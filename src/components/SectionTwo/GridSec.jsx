
import { sectionTwoData } from '../../constants'

const GridSec = () => {
    const { mobilecoffe, speaker, oneapp, usersmall, usrmedium, usrbig, growchart, halfCircle } = sectionTwoData[0];
    return (
        <section className="md:mt-[8em]">
            <div className="container">
                <h2 className='text-center max-w-[23ch] mx-auto mb-8'>Reach more customers
                    with <span className='font-bold'>Rolex</span></h2>
                <div className="grid grid-cols-2 grid-flow-row-dense md:grid-cols-[1fr,1fr,1fr,1.2fr,auto] md:grid-rows-3">
                    {/* <!-- card1 --> */}
                    <div className="flex border border-slate-400 rounded-tl-xl md:rounded-tl-3xl md:row-span-2 md:border-b-0">
                        <div className="px-2 pt-2 md:px-6 md:pt-8 flex flex-col justify-between h-full relative z-1000">
                            <div className='absolute z-[-1] left-10 top-1/2 rounded-full bg-primary w-32 h-32 2xl:w-56 2xl:h-56 2xl:top-56'></div>
                            <h3 className="md:text-xl 2xl:text-3xl leading-none mb-6 md:mb-8 font-semibold 2xl:max-w-[20ch]"><span className="font-bold text-2xl 2xl:text-4xl">Connect</span> with customers Smartly</h3>
                            <img src={mobilecoffe} width="250" height="350" className=" md:h-auto object-contain 2xl:w-[28em] 2xl:h-auto" alt="connect-with-customers" />
                        </div>
                    </div>
                    {/* <!-- card1 --> */}

                    {/* <!-- card2 --> */}
                    <div className="border rounded-tr-xl md:rounded-none border-slate-400 md:row-span-2 grid-cols-subgrid md:border-l-0 bg-pink-50">
                        <div className="flex flex-col justify-end items-center h-full pb-6 relative">
                            <img src={halfCircle} width={50} height={50} alt="" className='absolute z-[1] top-5 left-0 md:w-1/2 xl:w-2/5' />
                            <img src={speaker} width="100" height="100" className="md:w-[12em] md:h-[12em] 2xl:w-[15em] 2xl:h-[15em] relative z-10" alt="build-brand" />
                            <h3 className="text-center font-semibold md:max-w-[20ch] md:text-lg lg:text-xl 2xl:text-2xl mt-3">Build Your Brand Efficiently</h3>
                        </div>
                    </div>
                    {/* <!-- card2 --> */}

                    {/* <!-- card3 --> */}
                    <div className="border border-slate-400 bg-primary col-span-2 md:col-span-1 md:row-span-2 md:border-x-0 w-full relative z-1 ">
                        <div className="px-2 pt-2 md:px-6 md:pt-8 flex flex-col justify-between items-center h-full w-full">
                            <div className='absolute top-28 left-0 z-2 w-full'>
                                <svg viewBox="0 0 156 312" fill="#fff" width={70} height={150} className='md:w-auto md:h-[15em] 2xl:h-[20em] fill-white' xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.28833 311.708C21.6959 311.632 41.8875 307.527 60.7045 299.628C79.5214 291.728 96.5933 280.191 110.94 265.678C125.287 251.165 136.627 233.961 144.309 215.054C151.991 196.148 155.863 175.91 155.705 155.503C155.546 135.096 151.359 114.921 143.383 96.1362C135.408 77.3513 123.802 60.3263 109.231 46.0381C94.6593 31.75 77.4099 20.4799 58.4723 12.8747C39.5346 5.26943 21.4063 0.258424 1 0.499895L0.999998 85.9999C10.1413 85.8917 18.1017 88.8695 26.5851 92.2763C35.0686 95.6832 42.7957 100.732 49.3231 107.132C55.8506 113.533 61.0498 121.16 64.6224 129.575C68.195 137.99 70.0708 147.027 70.1419 156.169C70.2131 165.311 68.4783 174.376 65.0371 182.846C61.5959 191.315 56.516 199.022 50.0891 205.524C43.6621 212.025 36.0144 217.193 27.5851 220.732C19.1557 224.27 10.1106 226.11 0.968692 226.144L1.28833 311.708Z"  />
                                </svg>
                            </div>
                            <h3 className="font-medium text-center text-2xl mb-6 md:leading-6 md:max-w-[13ch]">One App for <span className="font-semibold">all need</span></h3>
                            <img src={oneapp} width={200} height={200} className="md:h-full md:w-auto relative z-4" alt="one-app-for-all" />
                        </div>
                    </div>
                    {/* <!-- card3 --> */}

                    {/* <!-- card4 --> */}
                    <div className="col-span-2 row-span-2 border rounded-r-xl md:rounded-r-3xl border-slate-400 px-6 py-6 md:row-span-3">
                        <div>
                            <div className="flex flex-wrap items-center justify-center w-[6em] md:w-[12em] ml-auto mr-0 md:mb-8">
                                <img src={usrbig} className="w-12 h-12 md:w-20 md:h-20" alt="" />
                                <img src={usrmedium} className="w-12 h-12 md:w-24 md:h-24" alt="" />
                                <img src={usersmall} className="w-12 h-12 md:w-20 md:h-20" alt="" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-2xl mb-3 md:max-w-[20ch] md:text-4xl 2xl:text-5xl 2xl:leading-[1.25em]">We are trusted by thousands of people</h3>
                                <p className="mb-3 md:mb-8 md:max-w-[30ch] font-semibold 2xl:text-2xl 2xl:mt-8">We have considered our solutions to support every stage of your growth.
                                    We
                                    are the fastest and easiest way to promote your business.</p>
                                <a href="#" className="btn">
                                    Contact Us
                                    <span className="arrow-span"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor" className="bi bi-arrow-right"
                                        viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- card4 --> */}

                    {/* <!-- card5 --> */}
                    <div className="bg-primary col-span-2 md:col-span-1 flex items-center md:rounded-bl-3xl justify-center py-8 md:border md:border-x-slate-400 md:border-b-slate-400">
                        <div>
                            <p className="md:text-lg md:font-semibold">Trusted by</p>
                            <h3 className="text-2xl font-semibold md:text-4xl">25,00+</h3>
                            <p className="font-semibold md:text-2xl">happy buyers</p>
                        </div>
                    </div>
                    {/* <!-- card5 --> */}

                    {/* <!-- card6 --> */}
                    <div className="bg-pink-50 col-span-2 p-6 md:col-span-2 md:row-span-2 md:border md:border-b-slate-400 md:border-t-0">
                        <div className="flex justify-between items-center gap-6 h-full">
                            <div>
                                <img src={growchart} width="70" height="70" className='md:w-32 md:h-32 2xl:w-40 2xl:h-40' alt="grow-chart" />
                            </div>
                            <div>
                                <h3 className="mb-3 md:text-2xl 2xl:text-3xl 2xl:max-w-[30ch]">W help to grow fast, so <span className="font-semibold">get started today !</span></h3>
                                <a href="#" className="btn">
                                    Contact Us
                                    <span className="arrow-span"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor" className="bi bi-arrow-right"
                                        viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- card6 --> */}

                </div>
            </div>
        </section>
    );
}

export default GridSec;