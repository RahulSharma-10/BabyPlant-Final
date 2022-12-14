
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductList from "../components/ProductList";
import {products} from "../public/ata/ls";
import { motion } from "framer-motion"
const subCategories = [
  {name:'All Products',href:'#'},
  { name: 'Hydroponics', href: '#' },
  { name: 'Nutrients', href: '#' },
  { name: 'Grow Media', href: '#' },
  { name: 'Seeds', href: '#' },
  { name: 'Accessories', href: '#' },
]
const sortOptions = [
  { name: 'Most Popular', href: '#', current: false },
  
  
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [filteredProducts,setFilteredProducts]=useState(products);

  const sortClickHandler=(e:any)=>{
    if(e.target.innerHTML==='Most Popular')
    {
      setFilteredProducts(prevState=>{
        var arr=prevState;
        arr.sort(function(a, b) {
          var keyA = a.id,
            keyB = b.id;
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        return arr;
      });
    }
    else if(e.target.innerHTML==='Price: Low to High'){
      setFilteredProducts(prevState=>{
        var arr=prevState;
        arr.sort(function(a, b) {
          var keyA = a.price,
            keyB = b.price;
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        
        return arr;
      });
      console.log(filteredProducts);
    }
    else if(e.target.innerHTML==='Price: High to Low'){
      setFilteredProducts(prevState=>{
        var arr=prevState;
        arr.sort(function(a, b) {
          var keyA = a.price,
            keyB = b.price;
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
        });
        
        return arr;
      });
      
      console.log(filteredProducts);
    }
  }
  
  const CategoryClickHandler=(e:any)=>{

    //console.log(e.target.innerHTML);
    if(e.target.innerHTML==='All Products')
    {
      setFilteredProducts(products);
    }
    else {
      const result = products.filter((f:any) => {
        return f.category ===e.target.innerHTML ;
      });
      setFilteredProducts(result);
    }

  }

  return (
    <div className="bg-gray-900 ">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-gray-900 py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-white">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 p-2 text-gray"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                   <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-white">
                      {subCategories.map((category) => (
                        <li key={category.name} onClick={CategoryClickHandler} >
                          <p  className="block px-2 py-3">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={CategoryClickHandler} className="cursor-pointer">{category.name}</motion.div>
                          </p>
                        </li>
                      ))}
                    </ul>
                    
                  </form> 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-white hover:text-white">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-white group-hover:text-white"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                   <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-gray-900 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <div className='cursor-pointer'  >
                              <p
                             onClick={sortClickHandler}
                              className={classNames(
                                option.current ? 'font-medium text-white' : 'text-white',
                                active ? 'bg-black' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </p>
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items> 
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-white hover:text-white sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
               <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-white">
                  {subCategories.map((category) => (
                    <li key={category.name} onClick={CategoryClickHandler} className="cursor-pointer">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={CategoryClickHandler} className="cursor-pointer">{category.name}</motion.div>
                    </li>
                  ))}
                </ul>
                
              </form> 

              {/* Product grid */}
              <div className="lg:col-span-3">
              <ProductList items={filteredProducts}/>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
  