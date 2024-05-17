import React from 'react'

const LISTS = [
  {
    author: 'Czaekha. (n.d.).',
    references: 'Early revolt. Scribd.',
    site: 'https://www.scribd.com/document/92072974/Early-Revolt',
  },
  {
    author: 'History, V. a. P. B. a. G. O. (2018, March 5).',
    references: 'TONDO CONSPIRACY ( 1587-1588). Site Title.',
    site: 'https://sendohakira0708.wordpress.com/2018/03/05/tondo-conspiracy/',
  },
  {
    author: 'Magalat revolution. (2011, September 4).',
    references: '[Slide show]. SlideShare.',
    site: 'https://www.slideshare.net/renzmarienollase/magalat-revolution',
  },
  {
    author: 'Malgapu, H. (2020, November 9).',
    references:
      'Matienzo of RCCAH, Philosophy discusses Hermano Pulis revolt and religiosity. University of Santo Tomas.',
    site: 'https://www.ust.edu.ph/matienzo-of-rccah-philosophy-discusses-hermano-pulis-revolt-and-religiosity/',
  },
  {
    author: 'Noguera, G. W. (n.d.).',
    references: 'HISTORY-REVOLT.pptx. Scribd.',
    site: 'https://www.scribd.com/presentation/442248046/HISTORY-REVOLT-pptx',
  },
  {
    author: 'Nudalo, F. L. (n.d.).',
    references: 'First Pampanga revolt. Scribd.',
    site: 'https://www.scribd.com/presentation/491265618/First-Pampanga-revolt',
  },
  {
    author: 'Prezi, A. M. L. O. (n.d.).',
    references: 'Caraga revolt. prezi.com.',
    site: 'https://prezi.com/wlon36aymjzx/caraga-revolt/',
  },
  {
    author: 'Prezi, Y. C. O. (n.d.).',
    references: 'MANIAGO REVOLT. prezi.com.',
    site: 'https://prezi.com/ge9fdsqwd5fp/maniago-revolt/',
  },
  {
    author: 'Saplad, N. D. (2012, November 14).',
    references: 'Filipino  revolts [Slide show]. SlideShare.',
    site: 'https://www.slideshare.net/NiachleoDianneSaplad/filipino-revolts',
  },
  {
    author: 'Studocu. (n.d.).',
    references:
      'The Cavite Mutiny and the Martyrdom of Gomburza - The Cavite Mutiny and the Martyrdom of GOMBURZA - Studocu.',
    site: 'https://www.studocu.com/ph/document/central-luzon-doctors-hospital-educational-institution/the-life-and-works-of-rizal/the-cavite-mutiny-and-the-martyrdom-of-gomburza/52003880',
  },
  {
    author: 'Vigan, & Vigan. (2015, June 17).',
    references:
      'Diego silang and Maria Josefa Gabriela silang | Vigan.ph. Vigan.ph | Welcome to Vigan.',
    site: ' https://www.vigan.ph/history/diego-silang-and-maria-josefa-gabriela-silang.html',
  },
]

const References = () => {
  return (
    <section className="relative py-16">
      <h1 className="text-center text-2xl font-bold lg:text-left">
        References
      </h1>
      {LISTS.map((item) => (
        <p className="mt-4 text-justify text-base/loose text-gray-600">
          {item.author} <em>{item.references}</em>
          <br />
          <a className="ms-6 text-blue-400" href={item.site} target="_blank">
            <i>{item.site}</i>
          </a>
        </p>
      ))}
    </section>
  )
}

export default References
