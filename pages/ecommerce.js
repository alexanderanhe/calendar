import { useState } from "react"
import { ShoppingCartIcon, PlusCircleIcon, MinusCircleIcon, LocationMarkerIcon, MenuIcon, XIcon, ArrowNarrowRightIcon, SearchIcon } from '@heroicons/react/outline'

export default function Ecommerce() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ cartOpen, setCartOpen ] = useState(false);

  return (
    <>
      <div className="bg-white">
          <header>
              <div className="container mx-auto px-6 py-3">
                  <div className="flex items-center justify-between">
                      <div className="hidden w-full text-gray-600 md:flex md:items-center">
                        <LocationMarkerIcon className="w-5 h-5" aria-hidden="true" />
                        <span className="mx-1 text-sm">NY</span>
                      </div>
                      <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                          Brand
                      </div>
                      <div className="flex items-center justify-end w-full">
                          <button onClick={() => setCartOpen(!cartOpen)} className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                            <ShoppingCartIcon className="w-5 h-5" aria-hidden="true" />
                          </button>

                          <div className="flex sm:hidden">
                              <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                                <MenuIcon className="w-5 h-5" aria-hidden="true" />
                              </button>
                          </div>
                      </div>
                  </div>
                  <nav className={`sm:flex sm:justify-center sm:items-center mt-4 ${isOpen ? '' : 'hidden'}`}>
                      <div className="flex flex-col sm:flex-row">
                          <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
                          <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
                          <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
                          <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
                          <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
                      </div>
                  </nav>
                  <div className="relative mt-6 max-w-lg mx-auto">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <SearchIcon className="w-5 h-5" aria-hidden="true" />
                  </span>

                      <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
                  </div>
              </div>
          </header>
          <div className={`fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 ${cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'}`}>
              <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
                  <button onClick={() => setCartOpen(!cartOpen)} className="text-gray-600 focus:outline-none">
                    <XIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between mt-6">
                  <div className="flex">
                      <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
                      <div className="mx-3">
                          <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
                          <div className="flex items-center mt-2">
                              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <PlusCircleIcon className="w-5 h-5" aria-hidden="true" />
                              </button>
                              <span className="text-gray-700 mx-2">2</span>
                              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                  <MinusCircleIcon className="w-5 h-5" aria-hidden="true" />
                              </button>
                          </div>
                      </div>
                  </div>
                  <span className="text-gray-600">20$</span>
              </div>
              <div className="flex justify-between mt-6">
                  <div className="flex">
                      <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
                      <div className="mx-3">
                          <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
                          <div className="flex items-center mt-2">
                              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                  <PlusCircleIcon className="w-5 h-5" aria-hidden="true" />
                              </button>
                              <span className="text-gray-700 mx-2">2</span>
                              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                  <MinusCircleIcon className="w-5 h-5" aria-hidden="true" />
                              </button>
                          </div>
                      </div>
                  </div>
                  <span className="text-gray-600">20$</span>
              </div>
              <div className="flex justify-between mt-6">
                  <div className="flex">
                      <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
                      <div className="mx-3">
                          <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
                          <div className="flex items-center mt-2">
                              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                  <PlusCircleIcon className="w-5 h-5" aria-hidden="true" />
                              </button>
                              <span className="text-gray-700 mx-2">2</span>
                              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                  <MinusCircleIcon className="w-5 h-5" aria-hidden="true" />
                              </button>
                          </div>
                      </div>
                  </div>
                  <span className="text-gray-600">20$</span>
              </div>
              <div className="mt-8">
                  <form className="flex items-center justify-center">
                      <input className="form-input w-48" type="text" placeholder="Add promocode" />
                      <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                          <span>Apply</span>
                      </button>
                  </form>
              </div>
              <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <span>Chechout</span>
                  <ArrowNarrowRightIcon className="w-5 h-5 mx-2" aria-hidden="true" />
                  
              </a>
          </div>
          <main className="my-8">
              <div className="container mx-auto px-6">
                  <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')" }}>
                      <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                          <div className="px-10 max-w-xl">
                              <h2 className="text-2xl text-white font-semibold">Sport Shoes</h2>
                              <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                              <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <span>Shop Now</span>
                                <ArrowNarrowRightIcon className="w-5 h-5 mx-2" aria-hidden="true" />
                              </button>
                          </div>
                      </div>
                  </div>
                  <div className="md:flex mt-8 md:-mx-4">
                      <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')" }}>
                          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                              <div className="px-10 max-w-xl">
                                  <h2 className="text-2xl text-white font-semibold">Back Pack</h2>
                                  <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                  <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                    <span>Shop Now</span>
                                    <ArrowNarrowRightIcon className="w-5 h-5 mx-2" aria-hidden="true" />
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')" }}>
                          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                              <div className="px-10 max-w-xl">
                                  <h2 className="text-2xl text-white font-semibold">Games</h2>
                                  <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                  <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                    <span>Shop Now</span>
                                    <ArrowNarrowRightIcon className="w-5 h-5 mx-2" aria-hidden="true" />
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="mt-16">
                      <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')" }}>
                                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <ShoppingCartIcon className="w-5 h-5" aria-hidden="true" />
                                  </button>
                              </div>
                              <div className="px-5 py-3">
                                  <h3 className="text-gray-700 uppercase">Chanel</h3>
                                  <span className="text-gray-500 mt-2">$12</span>
                              </div>
                          </div>
                          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')" }}>
                                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <ShoppingCartIcon className="w-5 h-5" aria-hidden="true" />
                                  </button>
                              </div>
                              <div className="px-5 py-3">
                                  <h3 className="text-gray-700 uppercase">Man Mix</h3>
                                  <span className="text-gray-500 mt-2">$12</span>
                              </div>
                          </div>
                          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')" }}>
                                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <ShoppingCartIcon className="w-5 h-5" aria-hidden="true" />
                                  </button>
                              </div>
                              <div className="px-5 py-3">
                                  <h3 className="text-gray-700 uppercase">Classic watch</h3>
                                  <span className="text-gray-500 mt-2">$12</span>
                              </div>
                          </div>
                          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')" }}>
                                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <ShoppingCartIcon className="w-5 h-5" aria-hidden="true" />
                                  </button>
                              </div>
                              <div className="px-5 py-3">
                                  <h3 className="text-gray-700 uppercase">woman mix</h3>
                                  <span className="text-gray-500 mt-2">$12</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="mt-16">
                      <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')" }}>
                                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <ShoppingCartIcon className="w-5 h-5" aria-hidden="true" />
                                  </button>
                              </div>
                              <div className="px-5 py-3">
                                  <h3 className="text-gray-700 uppercase">Chanel</h3>
                                  <span className="text-gray-500 mt-2">$12</span>
                              </div>
                          </div>
                          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')" }}>
                                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <ShoppingCartIcon className="w-5 h-5" aria-hidden="true" />
                                  </button>
                              </div>
                              <div className="px-5 py-3">
                                  <h3 className="text-gray-700 uppercase">Man Mix</h3>
                                  <span className="text-gray-500 mt-2">$12</span>
                              </div>
                          </div>
                          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')" }}>
                                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <ShoppingCartIcon className="w-5 h-5" aria-hidden="true" />
                                  </button>
                              </div>
                              <div className="px-5 py-3">
                                  <h3 className="text-gray-700 uppercase">Classic watch</h3>
                                  <span className="text-gray-500 mt-2">$12</span>
                              </div>
                          </div>
                          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')" }}>
                                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <ShoppingCartIcon className="w-5 h-5" aria-hidden="true" />
                                  </button>
                              </div>
                              <div className="px-5 py-3">
                                  <h3 className="text-gray-700 uppercase">woman mix</h3>
                                  <span className="text-gray-500 mt-2">$12</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>

          <footer className="bg-gray-200">
              <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                  <a href="#" className="text-xl font-bold text-gray-500 hover:text-gray-400">Brand</a>
                  <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
              </div>
          </footer>
      </div>
    </>
  )
}