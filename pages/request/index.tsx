import React from 'react'
import type { NextPage } from 'next'
import RequestForm from '../../components/RequestForm'

const Request: NextPage = () => (
  <div className="flex flex-col items-center justify-between">
    <div className="grid gap-5 text-justify text-xl md:text-2xl w-full mb-10">
      <span>
        Are you interested in collaborating together? Or do you have an idea
        that you want to be realized? I would be happy to support you 🚀!
      </span>
      <span>
        Just fill out this form and I will reach out to you as soon as possible.
      </span>
    </div>
    <RequestForm />
  </div>
)

export default Request
