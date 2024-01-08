import { prCustomers } from "../../constants";
import PrCard from "./PrCard";

const PremiumSec = () => {
    console.log(prCustomers.map(item => item.brands));
    return (
        <section>
            <div className="container">
                <h2>Our Premium <span className="font-semibold">Customers</span></h2>
                <div className="flex flex-wrap md:justify-between gap-6  mt-6">
                    {
                        prCustomers.map(pr => {
                            return (
                                <PrCard pr={pr}/>
                            )
                        })

                    }
                </div>
            </div>
        </section>
    );
}

export default PremiumSec;