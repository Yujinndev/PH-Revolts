import { cn } from '@/utils/cn'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const CONTENTS = [
  {
    href: '#intro',
    title: 'Introduction to Early Revolts of the indios',
  },
  {
    href: '#revolts',
    title: 'Early Revolts in the Philippines',
    subtitles: ['Luzon', 'Visayas', 'Mindanao'],
  },
  {
    href: '#gomburza',
    title: 'Cavite Mutiny and Execution of Gomburza',
  },
  {
    href: '#summary',
    title: 'Summary',
  },
  {
    href: '#references',
    title: 'References',
  },
  {
    href: '#about',
    title: 'About Us',
  },
]

const TableOfContents = ({ active, onClick }) => {
  return (
    <div className="relative ms-[1px] flex w-[96%] flex-col justify-start rounded-xl border bg-slate-50 p-4">
      <h1 className="text-center text-lg font-medium lg:text-left">
        Table of Contents
      </h1>

      <div className="flex flex-col gap-4 p-2">
        {CONTENTS.map((item, idx) => (
          <div key={idx}>
            <Link
              to={item.href}
              onClick={onClick}
              className={cn('flex items-center gap-2 text-sm', {
                'font-bold text-green-700': item?.href.slice(1) === active,
              })}
            >
              <ArrowRight
                className={cn('flex-shrink-0', {
                  'text-green-700': item?.href.slice(1) === active,
                })}
                size={14}
              />
              {item.title}
            </Link>
            {item.subtitles ? (
              <div className="mt-2 px-8">
                {item?.subtitles.map((item, idx) => (
                  <li key={idx} className="pb-[4px] text-xs">
                    {item}
                  </li>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableOfContents
