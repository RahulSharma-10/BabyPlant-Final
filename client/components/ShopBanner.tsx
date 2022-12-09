import Typewriter from 'typewriter-effect';


export default function Example() {
    return (
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <div className="text-5xl">
          <Typewriter
        onInit={(typewriter) => {
          typewriter
  .pauseFor(2500)
  .typeString('Its time to go green and')
  .pauseFor(300)
  .deleteChars(9)
  .typeString('<strong><span style="color: #27ae60;">green</span></strong> and make an  ')
  .typeString('<strong><span style="color: #9999ff;">impact!</span></strong>')
  .pauseFor(300)
  .typeString('See our wide range of products')
  .start();
        }}
      /></div>
         
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            {/* <img src="https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="">
            </img> */}
          </div>
        </div>
      </div>
    )
  }
  