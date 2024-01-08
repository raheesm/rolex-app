const PrCard = ({pr}) => {
    return (
        <div key={pr.id} className="w-full md:w-[30%] rounded-xl overflow-hidden ring-2 ring-slate-300">
            <div className="flex items-center gap-3 px-2 py-3 bg-pm-lite">
                <div className="bg-white rounded-full p-1">
                    <img src={pr.icon} width={30} height={30} alt="" />
                </div>
                <h3 className="text-sm font-semibold">{pr.title}</h3>
            </div>
            <div className="flex flex-wrap justify-between  p-6">
                {
                    pr.brands.map((brand, index) => (
                        <img key={index} src={brand} alt={`Brand ${index + 1}`} width={50} height={50} className="w-[48%] object-contain grayscale-[1]" />
                    ))
                }
            </div>
        </div>
    );
}

export default PrCard;