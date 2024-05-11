import MapCard from '@/components/MapCard'
import { REVOLTS } from '@/data/revolts'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import { ArrowRight, X } from 'lucide-react'
import RevoltCard from '@/components/RevoltCard'

const Blog = () => {
  const [showMap, setShowMap] = useState(true)

  return (
    <div className="relative overflow-x-hidden">
      <div className="grid w-screen max-w-7xl grid-cols-12 gap-8 p-2">
        <div className="col-span-12 bg-white p-8 lg:col-span-8">
          <h1 className="pt-8 text-center text-xl font-bold lg:text-left">
            Introduction to Early Revolts of the Indios
          </h1>
          <p className="mt-4 text-justify text-gray-600">
            In the subsequent section, we will delve deeper into the specific
            revolts that occurred prior to the 19th century and examine their
            outcomes using geographical maps. This visual aid will provide a
            clearer understanding of how the Philippines' diverse landscape
            influenced the course and results of these historical events. By
            mapping out the locations of various uprisings and highlighting the
            regions involved, we can grasp the challenges posed by the
            archipelagic nature of the Philippines and the impact it had on
            communication, coordination, and the overall success of resistance
            movements. Exploring these details will shed light on the complex
            dynamics at play during this pivotal period of Filipino history and
            illustrate the significance of geographic factors in shaping the
            outcomes of anti-colonial struggles against Spanish rule.
          </p>

          <div className="flex flex-col gap-4 pt-8">
            {REVOLTS.map((revolt, idx) => (
              <RevoltCard key={idx} revolt={revolt} />
            ))}
          </div>
        </div>
        <div
          className={cn(
            'relative order-1 col-span-12 row-span-2 lg:fixed lg:inset-y-0 lg:right-20 lg:top-12 lg:col-span-4 lg:block lg:h-screen lg:w-96',
            {
              hidden: showMap == false,
              block: showMap == true,
            }
          )}
        >
          <button
            onClick={() => setShowMap(false)}
            className="absolute right-2 top-2 z-50 rounded-lg bg-white lg:hidden"
          >
            <X />
          </button>
          <MapCard items={REVOLTS} />
        </div>

        <button onClick={() => setShowMap(true)}>Show Map</button>
      </div>
    </div>
  )
}

export default Blog
