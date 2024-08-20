import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between max-sm:mt-24 mb-24">
      
      <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
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
    </div>

      <div className="flex place-items-center  before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
  
        <a
          href="mailto: thelads@wewillworryaboutit.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Email sign up
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Be the first to know when we lauch
          </p>
        </a> 
      </div>




<div className="overflow-hidden p-4 border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
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
</div>

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
