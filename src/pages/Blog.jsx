import MapCard from '@/components/MapCard'
import { REVOLTS } from '@/data/revolts'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import { ArrowRight, X } from 'lucide-react'
import RevoltCard from '@/components/RevoltCard'

const CAVITE_IMAGES = [
  '1j18sRNs8XfaprS483qhfwm0fmJCtHHmn',
  '1O67yitMYGBFVy0lscMXe4-6T_KHPTSxO',
  '18F6TrXs0eyCws48_3DRt0RfactP8p3Bx',
  '1anWRbogu2V5uMTRgmewSbZGWbBdGmfOB',
]

const Blog = () => {
  const [showMap, setShowMap] = useState(true)

  return (
    <div className="relative overflow-x-hidden">
      <div className="bg-grid-black/[0.035] relative mx-auto flex w-screen justify-center">
        <div className="grid w-screen max-w-7xl grid-cols-12 gap-8 p-2">
          <div className="col-span-12 p-8 lg:col-span-8">
            <h1 className="pt-8 text-center text-2xl font-bold lg:text-left">
              Introduction to Early Revolts of the Indios
            </h1>
            <p className="mt-4 text-justify text-base/loose text-gray-600">
              In the subsequent section, we will delve deeper into the specific
              revolts that occurred prior to the 19th century and examine their
              outcomes using geographical maps. This visual aid will provide a
              clearer understanding of how the Philippines' diverse landscape
              influenced the course and results of these historical events. By
              mapping out the locations of various uprisings and highlighting
              the regions involved, we can grasp the challenges posed by the
              archipelagic nature of the Philippines and the impact it had on
              communication, coordination, and the overall success of resistance
              movements. Exploring these details will shed light on the complex
              dynamics at play during this pivotal period of Filipino history
              and illustrate the significance of geographic factors in shaping
              the outcomes of anti-colonial struggles against Spanish rule.
            </p>

            <div className="flex flex-col gap-12 pt-8 lg:ms-8">
              {REVOLTS.map((revolt, idx) => (
                <RevoltCard revolt={revolt} key={idx} />
              ))}
            </div>
          </div>

          <div className="col-span-12 p-8 pt-0 lg:col-span-8">
            <h1 className="text-center text-2xl font-bold lg:text-left">
              Cavite Mutiny and Execution of GomBurza
            </h1>
            <p className="mt-4 text-justify text-base/loose text-gray-600">
              Two significant events in the late 19th century affected
              reformists, the Filipino people, and Rizal profoundly, igniting
              nationalism.{' '}
              <b className="bg-gray-300">
                Due to a misunderstanding, the January 20, 1872, Cavite Mutiny,
                which was headed by Filipino sergeant Lamadrid and about 200
                soldiers and laborers, was a failed revolt.
              </b>{' '}
              They took control of the Cavite arsenal because they thought
              soldiers from Manila would follow. Plans were thrown off, though,
              since Manila was using fireworks to celebrate a fiesta.{' '}
              <b className="bg-gray-300">
                The Spaniards managed to link three Filipino priests who were
                fighting for their rights— Gomez, Burgos, and Zamora (GOMBURZA)
                —as the ones who started this whole thing. After unfair trials
                and false accusations of treason and mutiny, they were executed
                by garrote on February 17, 1872, in Luneta in front of a large
                crowd of foreigners (Ibid) and Filipinos.
              </b>{' '}
              The unlawful execution of GOMBURZA fueled nationalist enthusiasm
              and increased Filipino discontent with Spanish rule. After
              witnessing this injustice, Rizal's brother Paciano persuaded him
              to support related causes. To celebrate the bravery and
              nationalism of GOMBURZA, Rizal dedicated his book "Noli Me
              Tangere" to them. The incidents increased Filipinos' general
              knowledge of their rights and the wrongs done to them during
              Spanish rule. The martyrs promoted a collective Filipino identity
              by serving as a symbol of resistance to colonial oppression. The
              sacrifice made by GomBurZa turned into a turning point in the
              Filipino people's fight for independence, greatly influencing
              Rizal and influencing his nationalist beliefs.
            </p>

            <div
              className={cn(
                'relative my-6 flex w-full flex-col flex-wrap overflow-hidden rounded-lg lg:flex-row'
              )}
            >
              {CAVITE_IMAGES.map((element, index) => (
                <img
                  key={index}
                  src={`https://drive.google.com/thumbnail?id=${element}`}
                  className="aspect-square h-32 flex-auto transition-all duration-500 ease-linear group-hover:scale-105 lg:h-72"
                />
              ))}
            </div>
          </div>
          <div
            className={cn(
              'relative order-1 col-span-12 row-span-2 lg:fixed lg:inset-y-0 lg:right-10 lg:top-12 lg:col-span-4 lg:block lg:h-screen lg:w-96 xl:right-20 2xl:right-44',
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

          <button onClick={() => setShowMap(true)} className="w-96">
            Show Map
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog
