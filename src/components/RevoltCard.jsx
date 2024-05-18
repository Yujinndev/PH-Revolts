import { cn } from '@/utils/cn'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const RevoltCard = ({ revolt, className }) => {
  const [images, setImages] = useState([])
  const location = useLocation()

  useEffect(() => {
    if (Array.isArray(revolt?.images)) {
      setImages(revolt.images)
    } else if (typeof revolt?.images === 'string') {
      setImages([revolt.images])
    }
  }, [revolt])

  return (
    <section
      id={revolt?.href?.slice(1)}
      className="group relative flex w-full flex-col items-start justify-center gap-2 overflow-hidden rounded-lg border bg-white shadow-md"
    >
      <div className={cn('relative flex w-full flex-col lg:flex-row')}>
        {images?.map((element, index) => (
          <img
            key={index}
            alt={revolt.title}
            src={`https://drive.google.com/thumbnail?id=${element}`}
            className="aspect-square h-32 flex-auto filter transition-all duration-500 ease-linear group-hover:scale-105 lg:h-72"
          />
        ))}
        <span className="absolute right-2 top-2 line-clamp-2 w-max max-w-72 rounded-full bg-white px-3 py-1 text-center font-mono text-[12px] text-black">
          {revolt.place}
        </span>
      </div>
      <div className="relative flex-1 px-8 py-4">
        <div className="relative py-4">
          <h1 className="text-left text-lg font-bold">{revolt.title}</h1>
          <div className="absolute h-1 w-20 rounded-xl bg-yellow-700 lg:inset-y-12" />
        </div>

        {revolt.leader != '' && (
          <p className="text-left font-serif italic text-black">
            Leader/s: {revolt.leader}
          </p>
        )}

        <p className="pt-2 text-justify text-gray-600">{revolt.cause}</p>
        <p className="py-2 text-justify text-gray-600">~ {revolt.result}</p>
      </div>
    </section>
  )
}

export default RevoltCard
