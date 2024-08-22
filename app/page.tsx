import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between max-sm:mt-24 mb-24">
      
      {/* <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed block px-8 left-0 top-0 w-full max-w-5xl flex mx-auto border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
         The lads agency 
          <code className="font-mono font-bold"> - We will worry about it</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          
        </div>
      </div>

      <div className="mb-15 lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    <div className="z-10 max-w-5xl items-center font-mono text-sm lg:flex">
      <p className="fixed block px-8 block left-0 bottom-0 flex w-full max-w-5xl border-b border-blue-300 bg-gradient-to-b from-blue-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-blue-800/30">
         from the lads Vincent & Will
        </p>
      </div>
    </div> */}


<section>
  <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
      <div>
        <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
        Premium on-demand support that   
          <span className="text-gray-600"> grows your business.</span>
        </h1>
        <p className="mt-4 text-base font-medium text-gray-500 text-balance">
         We are a design & product duo with over 15 years experience working for companies like Meta & Booking.com. The value that we will bring to you busines will increase your conversion rates and double your revenue.
        </p>
        <p className="mt-4 text-base font-medium text-gray-500 text-balance">
         Our unique value will guarantee a increase your conversion rates and double your revenue.
        </p>

        <div className="flex flex-col items-center gap-2 mx-auto mt-8 md:flex-row">
                          <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="Primary action">
                            See our pricing
                          </button>
                          <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Secondary action">
                            Learn more
                          </button>
                        </div>


      </div>
      <div className="flex flex-col gap-y-12 text-balance">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div>
            <span className="flex items-center justify-center bg-gray-100 rounded-full size-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="text-gray-600 size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path></svg></span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Increase your conversion rates</h3>
            <p className="mt-2 text-sm text-gray-500">
              Our high level experience with A/B testing, we know what will be successful for your businuess. 
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div>
            <span className="flex items-center justify-center bg-gray-100 rounded-full size-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="text-gray-600 size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path></svg></span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Specialised Design & Product</h3>
            <p className="mt-2 text-sm text-gray-500">
              Make screenshots of a particular part of the screen to share quick
              and easy!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div>
            <span className="flex items-center justify-center bg-gray-100 rounded-full size-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="text-gray-600 size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"></path></svg></span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">On-demand service & transparant pricing</h3>
            <p className="mt-2 text-sm text-gray-500">
              More affordable than specialised agencys, Fast-Paced service that you can cancel at anytime. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



            
                <section>
                <div className="px-8 py-2 mx-auto md:px-12 lg:px-32 max-w-7xl">
                  <div className="grid items-center grid-cols-1 py-12 lg:grid-cols-4 border-y md:grid-cols-2 border-onyx-800 lg:gap-24">
                    <div className="mx-auto col-span-full lg:col-span-1 lg:max-w-none lg:mr-auto">
                      <p className="text-xs text-gray-500">
                        Some of the mazing companies we have worked with
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-between mt-12 lg:mt-0 md:col-span-3">
                      <div className="flex justify-center col-span-1 px-8">
                        <img className="max-h-12" src="https://windstatic.com/images/logos/1.svg" alt="logo" />
                      </div>
                      <div className="flex justify-center col-span-1 px-8">
                        <img className="max-h-12" src="https://windstatic.com/images/logos/2.svg" alt="logo" />
                      </div>
                      <div className="flex justify-center col-span-1 px-8">
                        <img className="max-h-12" src="https://windstatic.com/images/logos/3.svg" alt="logo" />
                      </div>
                      <div className="flex justify-center col-span-1 px-8">
                        <img className="max-h-12" src="https://windstatic.com/images/logos/4.svg" alt="logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            



{/* <div className="overflow-hidden p-4 border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  <div className="marquee-content flex gap-4 items-center animate-marquee">
    <div className="px-4 py-2 bg-blue-500 text-white rounded w-full">Best shit ever</div>
    <div className="px-4 py-2 bg-green-500 text-white rounded w-full">Fuck up your competitors</div>
    <div className="px-4 py-2 bg-cyan-500 text-white rounded w-full">Get access to the best lads in tech</div>
    <div className="px-4 py-2 bg-yellow-500 text-black rounded w-full">BUFU</div>
    <div className="px-4 py-2 bg-blue-500 text-white rounded w-full">Best shit ever</div>
    <div className="px-4 py-2 bg-green-500 text-white rounded w-full">Fuck up your competitors</div>
    <div className="px-4 py-2 bg-cyan-500 text-white rounded w-full">Get access to the best lads in tech</div>
    <div className="px-4 py-2 bg-yellow-500 text-black rounded w-full">BUFU</div>

  </div>
</div> */}

<div className="grid gap-6 mt-6 md:gap-12 md:grid-cols-2 mx-auto ">   

<div className="max-w-sm  flex flex-col rounded-3xl bg-white dark:bg-gray-950 shadow-xl ring-1 ring-black/10">
    <div className="p-8 sm:p-10">
        <h3 id="tier-basic" className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Product & Design support</h3>
        <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            <span> €6.490 </span>
            <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">/Per Month</span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-slate-200">
        Product & Design starting as soon as you sign up. No contracts or long onboarding process, real and impactful value, so dont worry about it. 

        </p>
    </div>
    <div className="flex flex-1 flex-col p-2">
        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-900 p-6 sm:p-8">
            <ul role="list" className="space-y-6">
                <li className="flex items-start">
                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        Support fom Director level Product expert (Meta, Booking.com & Uber) and Senior Designer (Booking.com, Uber & Airbnb)
                    </p>
                </li>
                <li className="flex items-start">
                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    Landing pages, Web apps & Mobile apps
                    </p>
                </li>
                <li className="flex items-start">
                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    Data Analytics streamlining (North Star, KPIs & Success metrics review)
                    </p>
                </li>
                <li className="flex items-start">
                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    Conversion Rate Optimization (Let us create huge impact in increasing revenue with our 10+ years experience  )
                    </p>
                </li>
            </ul>
            <div className="mt-8">
                <a href="#" aria-describedby="tier-basic"
                    className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700">
                    Get started today
                </a>
            </div>
        </div>
    </div>
</div>

<div className="max-w-sm relative flex flex-col rounded-3xl bg-white dark:bg-gray-950 shadow-xl ring-1 ring-black/10 bg-white/5 ring-2 ring-indigo-500 rounded-3xl">
    <div className="p-8 sm:p-10">
        <h3 id="tier-basic" className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Product & Design support</h3>
        <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                    Most popular</p>
        <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            <span> €10.690 </span>
            <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">/Per Month</span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-slate-200">
        Product & Design starting as soon as you sign up. No contracts or long onboarding process, real and impactful value, so dont worry about it. 

        </p>
    </div>
    <div className="flex flex-1 flex-col p-2">
        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-900 p-6 sm:p-8">
            <ul role="list" className="space-y-6">
                <li className="flex items-start">
                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        Support fom Director level Product expert (Meta, Booking.com & Uber) and Senior Designer (Booking.com, Uber & Airbnb)
                    </p>
                </li>
                <li className="flex items-start">
                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    Landing pages, Web apps & Mobile apps
                    </p>
                </li>
                <li className="flex items-start">
                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    Data Analytics streamlining (North Star, KPIs & Success metrics review)
                    </p>
                </li>
                <li className="flex items-start">
                    <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    Conversion Rate Optimization (Let us create huge impact in increasing revenue with our 10+ years experience  )
                    </p>
                </li>
            </ul>
            <div className="mt-8">
                <a href="#" aria-describedby="tier-basic"
                    className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700">
                    Get started today
                </a>
            </div>
        </div>
    </div>
</div>

</div> 



    </main>
  );
}
