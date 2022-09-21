import React, { ChangeEvent, FC, useMemo, useReducer, useState } from 'react'

import inputFormReducer, { initState } from './reducerFunction'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Checkbox from '../ui/Checkbox'
import Input from '../ui/Input'
import Modal from '../ui/Modal'
import { Failed, Loading, Successful } from '../common/Responses'

export interface SendMail {
  sendSuccessful: boolean
}

/**
 *
 * @returns
 */
const RequestForm: FC = () => {
  const [state, dispatcher] = useReducer(inputFormReducer, initState)
  const [response, setResponse] = useState<SendMail | {}>({})
  const [showModal, setShowModal] = useState(false)

  const handleModalClose = () => {
    dispatcher({
      actionType: 'reset',
    })
    setResponse({})
    setShowModal(false)
  }

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    if (Object.values(state).every((fieldData) => fieldData.isValid)) {
      setShowModal(true)
      const result = await fetch('/api/sendMail', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: state.firstName.value,
          lastName: state.lastName.value,
          email: state.email.value,
          description: state.description.value,
        }),
      })
      setResponse(await result.json())
    } else {
      dispatcher({
        actionType: 'showValidationErrors',
      })
    }
  }

  const handleOnChange = (e: ChangeEvent) => {
    dispatcher({
      payload: {
        field: (e.target as HTMLInputElement).id,
        value:
          (e.target as HTMLInputElement).type === 'checkbox'
            ? String((e.target as HTMLInputElement).checked)
            : (e.target as HTMLInputElement).value,
      },
      actionType: 'changeValue',
    })
  }

  const responseStatus = useMemo(() => {
    switch ((response as SendMail).sendSuccessful) {
      case true: {
        return <Successful text="Request successfully submitted" />
      }
      case false: {
        return (
          <Failed text="Error submitting the request. Please try again later" />
        )
      }
      default: {
        return <Loading text="" />
      }
    }
  }, [response])

  const handleOnFocus = (e: FocusEvent) => {
    const fieldName = (e.target as HTMLInputElement).id
    if (!state[fieldName].visited) {
      dispatcher({
        payload: {
          field: fieldName,
        },
        actionType: 'setVisited',
      })
    }
  }

  return (
    <div className="w-full max-w-md md:max-w-lg">
      {showModal ? (
        <Modal handleClose={handleModalClose}>{responseStatus}</Modal>
      ) : null}
      <Card>
        <form className="px-1 md:px-8 flex flex-col">
          <Input
            value={state.firstName.value}
            showErrorMsg={!state.firstName.isValid && state.firstName.visited}
            errorMsg="The first name must have at least 3 characters."
            label="First name"
            id="firstName"
            type="text"
            handleOnChange={handleOnChange}
            autoComplete="on"
            handleOnFocus={handleOnFocus}
          />
          <Input
            value={state.lastName.value}
            showErrorMsg={!state.lastName.isValid && state.lastName.visited}
            errorMsg="The last name must have at least 3 characters."
            label="Last name"
            id="lastName"
            type="text"
            handleOnChange={handleOnChange}
            autoComplete="on"
            handleOnFocus={handleOnFocus}
          />
          <Input
            value={state.email.value}
            showErrorMsg={!state.email.isValid && state.email.visited}
            errorMsg="The mail address must contain an '@' and a domain (e.g. '.org')."
            label="E-Mail"
            id="email"
            type="email"
            handleOnChange={handleOnChange}
            handleOnFocus={handleOnFocus}
            autoComplete="on"
          />
          <Input
            value={state.description.value}
            showErrorMsg={
              !state.description.isValid && state.description.visited
            }
            errorMsg="The description must be between 100 and 250 characters."
            label="Description"
            id="description"
            type="text"
            handleOnChange={handleOnChange}
            handleOnFocus={handleOnFocus}
          />
          <Checkbox
            id="giveConsent"
            handleOnChange={handleOnChange}
            highlight={!state.giveConsent.isValid && state.giveConsent.visited}
            // @ts-ignore
            checked={state.giveConsent.value === 'true'}
          >
            <span>
              I hereby confirm that I would like to be contacted via mail to
              discuss my project ideas.
            </span>
          </Checkbox>
          <span className="flex justify-center pt-5">
            <Button size="large" handleOnClick={handleSubmit}>
              <span className="font-bold">Submit</span>
            </Button>
          </span>
        </form>
      </Card>
    </div>
  )
}

export default RequestForm
