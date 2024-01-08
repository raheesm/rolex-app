import { heroData } from "../../constants";
const Hero = () => {
    const { googlePlay, appleStore, titleTop, mainTitle, bannerBg, bannerImg } = heroData[0]
    return (
        <section className="hero flex justify-center items-center my-10 h-[80dvh] md:h-[100dvh] bg-contain  md:bg-55vw  bg-no-repeat"
            style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="container">
                <div className="flex flex-wrap md:flex-nowrap gap-6 h-[full] justify-between items-start md:mt-6">
                    <div className="flex justify-center w-full md:w-1/2 items-center md:order-2">
                        <img src={bannerImg} className="w-[10em] md:w-[25vw]" alt="mobile-app" />
                    </div>
                    <div className="md:mt-[5em] md:order-1">
                        <p className="font-primary text-2xl mb-3 md:text-xl lg:text-[3rem] md:leading-none md:mb-4 xl:mb-12 md:max-w-[20ch] xl:text-[4rem]">{titleTop}</p>
                        <h1 className="mb-6 md:font-bold md:text-[5rem] md:max-w-[10ch] md:leading-[1em] md:mb-6 xl:text-[6rem]">{mainTitle}
                        </h1>
                        <div className="flex gap-3 mt-3 md:mt-6 md:gap-6">
                            <a href="#">
                                <img src={googlePlay} width={250} height={250} className="md:w-[12em]" target="blank"
                                    title="android app" alt="google-play" />
                            </a>
                            <a href="#">
                                <img src={appleStore} width={250} height={250} className="md:w-[12em]" target="blank" title="ios app"
                                    alt="apple-store" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;