import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Card from '../components/card'

export default function Project() {  
  return (
    <div className="w-full max-w-md px-2 py-16 text-center sm:px-0">
                  <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
                    Skills
                  </h1>
                  <Card />
    </div>
  )
}