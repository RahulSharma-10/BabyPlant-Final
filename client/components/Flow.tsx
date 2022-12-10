import Slider from "./Slider";
import Typewriter from 'typewriter-effect';


export default function Flow() {
    return (
  <section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <Slider/>
      </div>

      <div className="lg:py-24">
      
        <h2 className="text-3xl font-bold sm:text-4xl">Grow With Us</h2>

        <p className="mt-4 text-white-600">
        Welcome to Baby Plant. Home of sustainable Hydroponics and Aquaponics farms.
        We are based in Ranchi and ship nationwide!
        </p>
        <div className='text-3xl font-bold mt-4 sm:text-4xl'>
        <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter.typeString('Shop With Us')
          .pauseFor(500)
          .deleteAll()
          .typeString('<strong><span style="color: #27ae60;">Shop With Us</span></strong>')
          .pauseFor(2500)
          .deleteAll()
          .start();
        }}
      />
</div>
        <a
          className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          <span className="text-sm font-medium"> Shop Now </span>

          <svg
            className="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
)
}