import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

export default function Header() {
  return (
    <div className='bg-gray-900'>
      <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                {/* Logo Here */}
                
                <div className="hidden sm:block sm:ml-16">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-blue-400' : '  text-gray-100 hover:border-sky-500 hover:text-emerald-400 transition-colors duration-300 ease-in-out',
                          'px-4 py-3 rounded-sm text-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      </Disclosure>
      
    </div>
  );
}

const navigation = [
  { name: 'Experience', href: '#exp', current: true },
  { name: 'Leadership', href: '#leadership', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Other', href: '#other', current: false },
  { name: `Let's Connect!`, href: '#footer', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}