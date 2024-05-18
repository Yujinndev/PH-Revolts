import { User } from 'lucide-react'
import React from 'react'

const MEMBERS = [
  {
    name: 'Mark Eugene Laysa',
    // image: '1qN1Wv2Lue3RSItenYRQhBWBKDwWB0Ht3',
  },
  {
    name: 'Jerick Gaerlan',
  },
  {
    name: 'Vhince Cedrick Afroilan',
  },
  {
    name: 'Mighty Angel Angelo',
    // image: '1-4VmU5tRX1iJpqL0q-VhnWK2jrUfiCoP',
  },
]

const About = () => {
  return (
    <section className="relative py-8 lg:h-[97vh]">
      <h1 className="text-center text-2xl font-bold lg:text-left">About Us</h1>
      <div className="mt-4 flex flex-wrap gap-4">
        {MEMBERS.map((item) => (
          <div
            key={item.name}
            className="flex w-full items-center justify-center gap-4 rounded-md border bg-slate-50 p-6 lg:gap-0"
          >
            <div className="m-auto flex w-[25%] justify-center">
              {item.image ? (
                <img
                  alt={`${item.name} profile`}
                  src={`https://drive.google.com/thumbnail?id=${item.image}`}
                  className="h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
                />
              ) : (
                <User className="rounded-full" />
              )}
            </div>

            <div className="flex-1">
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-sm">BS in Computer Science - III</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
