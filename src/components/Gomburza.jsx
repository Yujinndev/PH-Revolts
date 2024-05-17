import { cn } from '@/utils/cn'
import React from 'react'

const IMAGES = [
  '1j18sRNs8XfaprS483qhfwm0fmJCtHHmn',
  '1O67yitMYGBFVy0lscMXe4-6T_KHPTSxO',
  '18F6TrXs0eyCws48_3DRt0RfactP8p3Bx',
  '1anWRbogu2V5uMTRgmewSbZGWbBdGmfOB',
]

const Gomburza = () => {
  return (
    <section className="relative py-8">
      <h1 className="text-center text-2xl font-bold lg:text-left">
        Cavite Mutiny and Execution of GomBurza
      </h1>
      <p className="mt-4 text-justify text-base/loose text-gray-600">
        Two significant events in the late 19th century affected reformists, the
        Filipino people, and Rizal profoundly, igniting nationalism.{' '}
        <b className="bg-gray-300">
          Due to a misunderstanding, the January 20, 1872, Cavite Mutiny, which
          was headed by Filipino sergeant Lamadrid and about 200 soldiers and
          laborers, was a failed revolt.
        </b>{' '}
        They took control of the Cavite arsenal because they thought soldiers
        from Manila would follow. Plans were thrown off, though, since Manila
        was using fireworks to celebrate a fiesta.{' '}
        <b className="bg-gray-300">
          The Spaniards managed to link three Filipino priests who were fighting
          for their rights— Gomez, Burgos, and Zamora (GOMBURZA) —as the ones
          who started this whole thing. After unfair trials and false
          accusations of treason and mutiny, they were executed by garrote on
          February 17, 1872, in Luneta in front of a large crowd of foreigners
          (Ibid) and Filipinos.
        </b>{' '}
        The unlawful execution of GOMBURZA fueled nationalist enthusiasm and
        increased Filipino discontent with Spanish rule. After witnessing this
        injustice, Rizal's brother Paciano persuaded him to support related
        causes. To celebrate the bravery and nationalism of GOMBURZA, Rizal
        dedicated his book "Noli Me Tangere" to them. The incidents increased
        Filipinos' general knowledge of their rights and the wrongs done to them
        during Spanish rule. The martyrs promoted a collective Filipino identity
        by serving as a symbol of resistance to colonial oppression. The
        sacrifice made by GomBurZa turned into a turning point in the Filipino
        people's fight for independence, greatly influencing Rizal and
        influencing his nationalist beliefs.
      </p>

      <div
        className={cn(
          'relative my-6 flex w-full flex-col flex-wrap overflow-hidden rounded-lg lg:flex-row'
        )}
      >
        {IMAGES.map((element, index) => (
          <img
            key={index}
            src={`https://drive.google.com/thumbnail?id=${element}`}
            className="aspect-square h-32 flex-auto transition-all duration-500 ease-linear group-hover:scale-105 lg:h-72"
          />
        ))}
      </div>
    </section>
  )
}

export default Gomburza
