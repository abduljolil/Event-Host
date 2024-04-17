import Button from "./Button";

 

const BannerCard = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-lg">
        <div className="carousel-item relative w-full ">
          <img src='https://i.postimg.cc/tCqJntyW/Rectangle-8.png' className="w-full  " />
          <div className="absolute h-full flex items-center 
           bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
             <div className="text-white ml-28 w-1/2 space-y-7">
                <h1 className='text-6xl font-bold'>CMA Fest</h1>
                <p className="text-2xl">Make memories that will last a lifetime. See your favorite artists live at CMA Fest!</p>
                <div className="flex justify-center items-center gap-5">
                <Button></Button>
                <button className="btn btn-outline btn-secondary">Explore All Events</button>
                </div>
             </div>
          </div>
          
        </div>
            
        </div>
    );
};

export default BannerCard;