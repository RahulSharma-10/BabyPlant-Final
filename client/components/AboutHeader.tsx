import Typewriter from 'typewriter-effect';

const AboutHeader=()=>{
    return(
        <div>
            <div className="bg-gray-900 ">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <div className="block">
                        <Typewriter
                        options={{
                            loop: true,
                          }}
        onInit={(typewriter) => {
          typewriter
  .pauseFor(1000)
  .typeString('Want to go Organic?')
  .pauseFor(300)
  .deleteChars(8)
  .typeString('<strong><span style="color: #27ae60;">Organic</span></strong>?')
  .pauseFor(3000)
  .start();
        }}
      />
                        </div>
                        <span className="block text-indigo-500">
                            It&#x27;s today or never.
                        </span>
                    </h2>
                    <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
                        In a world plagued by a huge environmental crisis, we are revolutinising the world by 
                        democratising the technology of Hydroponics. 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutHeader;