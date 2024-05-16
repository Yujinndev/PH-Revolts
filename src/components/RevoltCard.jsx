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
      className="group relative flex w-full flex-col items-start justify-center gap-2 overflow-hidden rounded-lg border bg-white shadow-sm"
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
      <div className="flex-1 px-8 py-4">
        <h1 className="text-left text-lg font-bold">{revolt.title}</h1>
        <p className="py-2 text-justify text-gray-600">{revolt.cause}</p>
        <p className="py-2 text-justify text-gray-600">~ {revolt.result}</p>
      </div>
    </section>

    // <article
    //   id={revolt?.href?.slice(1)}
    //   className={cn(
    //     'group relative overflow-hidden rounded-lg shadow transition-all hover:shadow-lg',
    //     className
    //   )}
    // >
    //   <div
    //     className={cn('block', {
    //       'grid grid-cols-2': images.length < 1,
    //       flex: images.length >= 1,
    //     })}
    //   >
    //     {images?.map((element, index) => (
    //       <img
    //         key={index}
    //         alt={revolt.title}
    //         src={`https://drive.google.com/thumbnail?id=${element}`}
    //         className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-linear group-hover:scale-110"
    //       />
    //     ))}
    //   </div>

    //   <div className="relative bg-gradient-to-t from-gray-900/70 to-gray-400/25 pt-32 group-hover:from-gray-900 sm:pt-48 lg:pt-64">
    //     <div className="w-auto p-4 sm:p-6 lg:w-4/6">
    //       {/* <time datetime="2022-10-10" className="block text-xs text-white/90">
    //         10th Oct 2022
    //       </time> */}

    //       <span className="block w-max rounded-xl bg-black px-3 py-1 text-sm text-white lg:text-base">
    //         {revolt.place}
    //       </span>

    //       <a href="#">
    //         <h3 className="mt-2 text-xl font-bold text-white lg:text-2xl">
    //           {revolt.title}
    //         </h3>
    //       </a>

    //       <p className="mt-2 text-sm/relaxed text-white/95 lg:line-clamp-3 lg:text-base/relaxed">
    //         {revolt.result}
    //       </p>

    //       <p className="group-hovfer:flex mt-2 hidden text-sm/relaxed text-white/95 lg:text-base/relaxed">
    //         {revolt.result}
    //       </p>
    //     </div>
    //   </div>
    // </article>
  )
}

export default RevoltCard
