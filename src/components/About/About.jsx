import { aboutData } from "../../constants";

const About = () => {
    const { halfcrc, abtmain } = aboutData[0];
    return (
        //  <!-- home about section -->

        <section className="py-6 md:py-36">
            <div className="container">
                <div className="md:flex md:items-center">
                    <div className="relative w-3/6 flex flex-col items-center mx-auto mb-6 justify-center group">
                        <div className="absolute top-0 right-0 -rotate-12 md:right-10 2xl:right-28 group-hover:rotate-12 duration-200">
                            <img src={halfcrc} width="50" height="50" className="md:w-24" alt="" />
                        </div>
                        <div className="w-fit">
                            <img src={abtmain} width="200" height="100" className="md:w-[28vw] " alt="modern-marketing" />
                        </div>
                        <div className="absolute bottom-0 left-0 md:left-10 md:-bottom-10 rotate-[140deg] group-hover:rotate-180 duration-200">
                            <svg viewBox="0 0 156 312" fill="none" width={50} height={50} className="md:w-[12em] md:h-[12em]" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.28833 311.708C21.6959 311.632 41.8875 307.527 60.7045 299.628C79.5214 291.728 96.5933 280.191 110.94 265.678C125.287 251.165 136.627 233.961 144.309 215.054C151.991 196.148 155.863 175.91 155.705 155.503C155.546 135.096 151.359 114.921 143.383 96.1362C135.408 77.3513 123.802 60.3263 109.231 46.0381C94.6593 31.75 77.4099 20.4799 58.4723 12.8747C39.5346 5.26943 21.4063 0.258424 1 0.499895L0.999998 85.9999C10.1413 85.8917 18.1017 88.8695 26.5851 92.2763C35.0686 95.6832 42.7957 100.732 49.3231 107.132C55.8506 113.533 61.0498 121.16 64.6224 129.575C68.195 137.99 70.0708 147.027 70.1419 156.169C70.2131 165.311 68.4783 174.376 65.0371 182.846C61.5959 191.315 56.516 199.022 50.0891 205.524C43.6621 212.025 36.0144 217.193 27.5851 220.732C19.1557 224.27 10.1106 226.11 0.968692 226.144L1.28833 311.708Z" fill="#2E2F30" />
                            </svg>
                        </div>
                    </div>
                    <div className="md:w-4/6">
                        <div>
                            <p className="font-semibold 2xl:text-xl">About Rolex</p>
                            <hr className="h-2 w-24 bg-primary 2xl:w-36" />
                            <h2 className="mt-3 md:max-w-[20ch]">Say goodbye to <span className="font-semibold">traditional marketing</span></h2>
                            <p className="font-semibold md:max-w-[60ch] md:pt-6 md:pb-8 2xl:text-xl">We have considered our solutions to support every stage of your growth. We are the fastest
                                and
                                easiest way to promote your business. Efficiently manage and resolve customer issues,
                                improve
                                satisfaction and boost your bottom line with our all-in-one customer support solution.</p>
                            <div className="md:flex md:w-full gap-3 mt-3">
                                <div className="md:w-1/2">
                                    <h3 className="font-semibold md:mb-3 md:text-2xl">Growth Planner</h3>
                                    <p className="md:max-w-[30ch] md:font-semibold">We are the fastest and easiest way to
                                        promote your business. Efficiently manage and resolve customer.</p>
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="font-semibold md:mb-3 md:text-2xl">Small Business</h3>
                                    <p className="md:max-w-[30ch] md:font-semibold">It is a long established fact that a reader will be distracted. Efficiently manage
                                        and
                                        resolve customer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        //  <!-- home about section -->

    );
}

export default About;