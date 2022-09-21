export interface FormState {
  [key: string]: {
    isValid: boolean
    visited: boolean
    value: string
    validatorRegEx: string
  }
}

export const initState = {
  firstName: {
    isValid: false,
    visited: false,
    value: '',
    validatorRegEx: '[a-z]{4,}',
  },
  lastName: {
    isValid: false,
    visited: false,
    value: '',
    validatorRegEx: '[a-z]{4,}',
  },
  email: {
    isValid: false,
    visited: false,
    value: '',
    validatorRegEx: '(\\S{1,}@\\S{1,}[.]\\S{1,})',
  },
  description: {
    isValid: false,
    visited: false,
    value: '',
    validatorRegEx: '[\\s\\S]{100,250}',
  },
  giveConsent: {
    isValid: false,
    visited: false,
    value: '',
    validatorRegEx: '',
  },
}

type ActionTypes =
  | 'reset'
  | 'changeValue'
  | 'setValid'
  | 'setVisited'
  | 'showValidationErrors'

interface FormReducerAction {
  payload?: {
    field: string
    value?: string
  }
  actionType: ActionTypes
}

const inputFormReducer = (
  state: FormState,
  action: FormReducerAction
): FormState => {
  const { payload, actionType } = action
  switch (actionType) {
    case 'setVisited': {
      return {
        ...state,
        [payload!.field]: {
          ...state[payload!.field],
          visited: true,
        },
      }
    }
    case 'changeValue': {
      const isValid = RegExp(state[payload!.field].validatorRegEx, 'i').test(
        payload!.value!
      )
      return {
        ...state,
        [payload!.field]: {
          ...state[payload!.field],
          value: payload!.value!,
          isValid,
        },
      }
    }
    case 'showValidationErrors': {
      const adjustedState: FormState = JSON.parse(JSON.stringify(state))
      Object.values(adjustedState).forEach((value) => {
        // eslint-disable-next-line no-param-reassign
        value.visited = true
      })

      return {
        ...state,
        ...adjustedState,
      }
    }
    default:
      return { ...state, ...initState }
  }
}

export default inputFormReducer
