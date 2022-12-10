import Typewriter from 'typewriter-effect';
import Img from 'next/image';



  export default function Example(){
    return(
      <>
      <section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className=" block relative h-80 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-[420px]"
      >
        
        <Img
                src="https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                layout='fill'
                objectFit='cover'
                priority 
                alt={''}								
							/>
      </div>

      <div className="lg:py-40">
      
        <div className='text-4xl font-bold mt-0'>
        <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
  .pauseFor(1000)
  .typeString('Its time to go green and')
  .pauseFor(300)
  .deleteChars(9)
  .typeString('<strong><span style="color: #27ae60;">green</span></strong> and make an  ')
  .typeString('<strong><span style="color: #9999ff;">impact!</span></strong>')
  .pauseFor(300)
  .typeString(' See our wide range of products')
  .pauseFor(2500)
  .start();
        }}
      />
</div>
        
      </div>
    </div>
  </div>
</section>
      </>
    )
  }