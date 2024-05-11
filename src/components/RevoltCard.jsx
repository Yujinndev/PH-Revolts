import { ArrowRight } from 'lucide-react'
import React from 'react'

const RevoltCard = ({ revolt }) => {
  return (
    <section
      id={revolt?.href?.slice(1)}
      className="relative flex items-start justify-center gap-2 lg:gap-4"
    >
      <ArrowRight
        className="relative mt-1 flex-shrink-0 text-blue-800"
        size={16}
      />
      <div className="flex-1">
        <h1 className="text-left text-base font-bold">{revolt.title}</h1>
        <p className="py-2 text-justify text-gray-600">{revolt.cause}</p>
        <p className="py-2 text-justify text-gray-600">~ {revolt.result}</p>
      </div>
    </section>
  )
}

export default RevoltCard
