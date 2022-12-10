import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faWater,
  faClock,
  faBacteria,
  faSun,
  faCloudRain,
  faMosquito,
  faScrewdriver,
  faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";


export default function Flow() {
    return (
      
<section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg text-center">
      <h4 className="text-1xl font sm:text-2xl">Looking to start a Sustainable Business? {"\n"}{"\n"}</h4>
      <h2 className="text-3xl font-bold sm:text-4xl">We Can help</h2>
      <p className="mt-4 text-gray-300">
        Our vision lies around using Scientific Approach For Profitable Farming, Empowering communities, and
        enhancing educational opportunities for all!
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
       
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg> */}
      <FontAwesomeIcon
        icon={faWater}
        style={{ fontSize: 40, color: "pink" }}
      />
        <h2 className="mt-4 text-xl font-bold text-white">Lower Water Consumption</h2>

        <p className="mt-1 text-sm text-gray-300">
          It consumes 20 times less water than conventional agriculture, as the water is recirculated and reused.
        </p>
      </div>

      <div
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        
      >
        <FontAwesomeIcon
        icon={faClock}
        style={{ fontSize: 40, color: "pink" }}
      />

        <h2 className="mt-4 text-xl font-bold text-white">Higher Yield</h2>

        <p className="mt-1 text-sm text-gray-300">
        The produce increases multifold between three and ten times more food than conventional agriculture in the same space. 
        The plants also grow in half the time
        </p>
      </div>

      <div
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        
      >
        <FontAwesomeIcon
        icon={faBacteria}
        style={{ fontSize: 40, color: "pink" }}
      />

        <h2 className="mt-4 text-xl font-bold text-white">Less Contamination</h2>

        <p className="mt-1 text-sm text-gray-300">
        Since it is a closed system, there is neither water contamination nor soil with the 
        remains of fertilisers or pesticides.
        </p>
      </div>

      <div
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        
      >
        
        <FontAwesomeIcon
        icon={faCloudRain}
        style={{ fontSize: 40, color: "pink" }}
      />
        <h2 className="mt-4 text-xl font-bold text-white">Adaptation to Extreme Conditions</h2>

        <p className="mt-1 text-sm text-gray-300">
          Owing to the absence of soil, It allows plants to be grown in harsh environments, 
          under extreme weather conditions since the system can be controlled.
        </p>
      </div>

      <div
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        
      >
        
        <FontAwesomeIcon
        icon={faMosquito}
        style={{ fontSize: 40, color: "pink" }}
      />
        <h2 className="mt-4 text-xl font-bold text-white">No Need for Herbicides/Pesticides</h2>

        <p className="mt-1 text-sm text-gray-300">
        There is no need for herbicides or pesticides: they are safe from weeds and insects, 
        making unnecessaries the use of these products.
        </p>
      </div>

      <div
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
        
        <FontAwesomeIcon
        icon={faScrewdriverWrench}
        style={{ fontSize: 40, color: "pink" }}
      />
        <h2 className="mt-4 text-xl font-bold text-white">Low Maintainence</h2>

        <p className="mt-1 text-sm text-gray-300">
          After the initial setup, Hydroponic Systems are relatively much easier to maintainence. Also, the recurrence
          of maintainence requirements is lower resulting in much lower maintainence cost and effort.
        </p>
      </div>
    </div>
  </div>
</section>
)
}