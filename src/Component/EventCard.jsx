import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";


const EventCard = ({img}) => {
    return (
        <div className="card w-auto bg-blue-100 shadow-xl p-3 ">
       
       <div className="carousel w-full h-96 mb-4 ">
        <div className="carousel-item relative w-full ">
          <img src= {img}className="w-full  " />
          <div className="absolute h-full flex justify-center">
      
             <div className="flex gap-24 p-8">
             <button className="btn btn-info text-white">Online</button> 
             <div className="btn btn-info flex justify-center items-center gap-3   ">
                <img src='https://i.postimg.cc/k4kX1kY5/Heart.png' className="w-6 h-6" alt="" />
                <h2 className="text-3xl font-semibold text-white">Favorite</h2>
     
                 </div>

        </div>
          </div>
          
        </div>
            
        </div>
      <div className=" flex justify-between items-center ">
      <div className="flex-col ">
  <div className="flex justify-between gap-3 ">
<div className="space-y-4">
<button className="btn btn-info text-white text-xl">Music</button>
        <div className=" flex ">
         <p className="text-2xl text-blue-800"><FaLocationDot /></p>
         <p className="text-xl">Celebrity Convention Hall</p>
        </div>
        <h1 className="text-2xl font-bold ">ROUFIAN’S HSC-24 RAG  DAy</h1>
</div>
        <button className=" flex-col shadow-xl  items-center gap-1 rounded-lg px-4 py-2 h-36  ">
            <p className="text-xl ">Apr</p>
            <h1 className="text-4xl font-bold text-blue-600">20</h1>
            <p className="text-xl ">10:00PM</p>
            </button>
        
  </div>
        <div className=" flex   items-center  pt-4 gap-4 ">
            <Button></Button>
            <button className=" flex shadow-xl  items-center gap-1 rounded-lg  ">
            <h1 className="text-4xl font-bold text-blue-600">20</h1>
            <p className="text-xl "> Seat <br /> Left</p>
            </button>
            
            <div className="text-blue-600 text-xl pl-5 ">See More</div>
        </div>
        </div>
        
      </div>
      </div>
    );
};

export default EventCard;