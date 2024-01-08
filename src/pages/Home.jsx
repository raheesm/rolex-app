import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import PremiumSec from "../components/PremiumCustomers/PremiumSec";
import GridSec from "../components/SectionTwo/GridSec";

const Home = () => {
    return (
        <>
            <div id="hero">
                <Hero />
            </div>
            <GridSec/>
            <div id="about">
                <About/>
            </div>
            <PremiumSec/>
        </>
    );
}

export default Home;