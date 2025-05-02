import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, BuildingOffice2Icon, HomeIcon, HomeModernIcon, DocumentCheckIcon, BuildingLibraryIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import img from '../../assets/professional_yellow_logo-removebg-preview.png';
import { Link, NavLink } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

const products = [
  { name: 'Buy a Home', description: 'Get your dream house', href: '/products/BuyHome', icon: HomeIcon },
  { name: 'Commercial', description: 'Get and expand your business', href: '/products/Commercial', icon: BuildingLibraryIcon },
  { name: 'Land/Plots', description: 'Secure for the future', href: '/products/Land', icon: DocumentCheckIcon },
  { name: 'Flats', description: 'Get our home on monthly charges', href: '/products/Flat', icon: BuildingOffice2Icon },
  { name: 'Villas', description: 'Get villas affordably', href: '/products/Villa', icon: HomeModernIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      {/* Header */}
      <header className="bg-white">
        {/* Navigation */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-20 w-auto" src={img} alt="Company Logo" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Menu */}
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {/* Products Dropdown */}
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-gray-900">
                For Buyers
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>
              {/* Dropdown Content */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  {/* Products List */}
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <NavLink to={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </NavLink>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            {/* Other Links */}
            <NavLink to="/Home" className="text-xl font-semibold leading-6 text-gray-900">
              Home
            </NavLink>
            <NavLink to="/Sites" className="text-xl font-semibold leading-6 text-gray-900">
              Sites
            </NavLink>
            <NavLink to="/AboutUs" className="text-xl font-semibold leading-6 text-gray-900">
              About Us
            </NavLink>
            <NavLink to="/Dealership" className="text-xl font-semibold leading-6 text-gray-900">
              Dealership
            </NavLink>
            <NavLink to="/Contact" className="text-xl font-semibold leading-6 text-gray-900">
              Contact Us
            </NavLink>
          </Popover.Group>

          {/* Login Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isAuthenticated ? (
              <button
                className="text-xl font-semibold leading-6 hover:bg-yellow-300 p-3 rounded-3xl text-gray-900"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            ) : (
              <button
                className="text-xl font-semibold leading-6 hover:bg-yellow-300 p-3 rounded-3xl text-gray-900"
                onClick={() => loginWithRedirect()}
              >
                Log in
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={img} alt="Company Logo" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              {/* Mobile Menu Items */}
              <div className="-my-6 divide-y divide-gray-500/10">
                {/* Products Dropdown */}
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Products
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {products.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* Other Links */}
                  <NavLink
                    to="/Sites"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sites
                  </NavLink>
                  <NavLink
                    to="/AboutUs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/Dealership"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dealership
                  </NavLink>
                  <NavLink
                    to="/Contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
              {/* Login Link */}
              <div className="py-6">
                {isAuthenticated ? (
                  <button
                    className="text-xl font-semibold leading-6 hover:bg-yellow-300 p-3 rounded-3xl text-gray-900"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="text-xl font-semibold leading-6 hover:bg-yellow-300 p-3 rounded-3xl text-gray-900"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in
                  </button>
                )}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
