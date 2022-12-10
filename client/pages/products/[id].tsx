import Head from 'next/head';
import { StarIcon } from '@heroicons/react/20/solid'
import Navbar from "../../components/Navbar";
import { products } from '../../products';



const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}
export async function getServerSideProps({
	params
}: {
	params: { id: string };
}) {
    const product=products.find(item => item.id == Number(params.id));
    return {
		props: { productdata: product }
	};
}
function Example( {productdata}:{productdata:any}){
    
  return (
  <div>
    <Head>
      <title>BabyPlant - Product Overview</title>
    </Head>
    <Navbar/>
  <div className="bg-gray-900">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={productdata.images[0].imageSrc}
              alt={productdata.images[0].imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={productdata.images[1].imageSrc}
              alt={productdata.images[1].imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{productdata.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-white">{productdata.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-indigo-600' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Buy Now
              </button>
            </div>

            
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              {productdata.description.trim().length!==0&&<h3 className="sr-only">Description</h3>}

              {productdata.description.trim().length!==0&&<div className="space-y-6">
                <p className="text-base text-white">{productdata.description}</p>
              </div>}
            </div>

            <div className="mt-10">
              { productdata.details.length!==0&&<h3 className="text-sm font-medium text-white-900">Details</h3>}

             { productdata.details.length!==0&&<div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {productdata.details.map((highlight:any) => (
                    <li key={highlight} className="text-white-400">
                      <span className="text-white-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
}
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Example;