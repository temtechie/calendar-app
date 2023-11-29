import { Fragment, Suspense } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import AirPrepLogo from './../assets/airprep-logo.svg';
// import AirPrepLogoWhite from './../assets/airprep-logoWhite.svg';
import { footerNavigation, LINK_TYPES, navigation } from '../utils/constants';
import { Link } from 'react-router-dom';
import { PATHS } from '../routes/constants';
import Loading from './common/loading/loading';

export default function Layout() {
  let loading: any;

  const matchHomeRoute = useMatch(PATHS.HOME);
  const matchRoutes = matchHomeRoute || '';
  return (
    <div className='bg-white'>
      {loading && <Loading />}
      <Popover as='header' className='relative'>
        <div className='bg-gray-50'>
          <nav
            className='relative mx-auto flex items-center justify-between px-6 py-2 xl:px-8'
            aria-label='Global'
          >
            <div className='flex flex-1 items-center'>
              <div className='flex w-full items-center justify-between lg:w-auto'>
                <a href='/'>
                  <span className='sr-only'>AIRprep</span>
                  <img className='h-10 w-auto sm:h-14' src={''} alt='' />
                </a>
                <div className='-mr-2 flex items-center lg:hidden'>
                  <Popover.Button className='focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500'>
                    <span className='sr-only'>Open main menu</span>
                    <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='hidden space-x-10 lg:ml-10 lg:flex'>
                {navigation.map((item: any) =>
                  item.type === 'ddd' ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      className='text-base font-medium text-gray-500 hover:text-gray-900'
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.path}
                      className='text-base font-medium text-gray-500 hover:text-gray-900'
                    >
                      {item.name}
                    </a>
                  ),
                )}
              </div>
            </div>
            <div className='hidden lg:flex lg:items-center lg:space-x-6'>
              {/* <button
                onClick={signOut}
                className='rounded-md border border-transparent bg-gray-100 py-2 px-6 text-base font-medium text-gray-900 hover:bg-gray-200'
              >
                Sign Out
              </button> */}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden'
          >
            <div className='overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='flex items-center justify-between px-5 pt-4'>
                <div>
                  <img className='h-8 w-auto' src={''} alt='' />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='pt-5 pb-6'>
                <div className='space-y-1 px-2'>
                  {navigation.map((item: any) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='mt-6 px-5'>
                  <a
                    href='/'
                    className='block w-full rounded-md border border-transparent bg-teal-500 py-2 px-4 text-center font-medium text-white shadow hover:bg-teal-600'
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      {!matchRoutes && (
        <footer className='bg-gray-900' aria-labelledby='footer-heading'>
          <h2 id='footer-heading' className='sr-only'>
            Footer
          </h2>
          <div className='mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8'>
            <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
              <div className='space-y-8 xl:col-span-1'>
                <img className='h-10' src={''} alt='Company name' />
                <p className='text-base text-gray-400'>
                  Making the radio better one link at the time
                </p>
              </div>
              <div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
                <div className='md:grid md:grid-cols-2 md:gap-8'>
                  <div>
                    <h3 className='text-base font-medium text-gray-200'>
                      Solutions
                    </h3>
                    <ul className='mt-4 space-y-4'>
                      {footerNavigation.solutions.map((item: any) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className='text-base text-gray-400 hover:text-gray-300'
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='mt-12 md:mt-0'>
                    <h3 className='text-base font-medium text-gray-200'>
                      Support
                    </h3>
                    <ul className='mt-4 space-y-4'>
                      {footerNavigation.support.map((item: any) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className='text-base text-gray-400 hover:text-gray-300'
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='md:grid md:grid-cols-2 md:gap-8'>
                  <div>
                    <h3 className='text-base font-medium text-gray-200'>
                      Company
                    </h3>
                    <ul className='mt-4 space-y-4'>
                      {footerNavigation.company.map((item: any) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className='text-base text-gray-400 hover:text-gray-300'
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='mt-12 md:mt-0'>
                    <h3 className='text-base font-medium text-gray-200'>
                      Legal
                    </h3>
                    <ul className='mt-4 space-y-4'>
                      {footerNavigation.legal.map((item: any) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className='text-base text-gray-400 hover:text-gray-300'
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 border-t border-gray-700 pt-8'>
              <p className='text-base text-gray-400 xl:text-center'>
                &copy; 2023 AIRprep LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
