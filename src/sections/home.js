import React from 'react';
import Header from '../sections/header';

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-emerald-400'>
      <Header />
      <div className="relative flex items-center h-screen">
        
        <div className="z-0 max-w-6xl mx-auto sm:pl-16">
          <div className="flex justify-center text-center sm:text-left sm:grid sm:grid-cols-12">
            <div className=""> {/*sm:col-span-10 md:col-span-9 */}
            <main className="w-full h-full">
              <section className="h-full max-w-5xl pt-16 mx-auto md:pt-8">
                <div className="flex flex-col items-center justify-center md:items-start">
                  <h4 className="text-lg text-gray-800 dark:text-white">
                    <span className="text-xl font-normal">Hello,</span> I'm
                  </h4>
                  <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
                    Raymond Yan.
                  </h1>
                </div>
              </section>
            </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home