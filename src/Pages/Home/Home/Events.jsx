import EventCard from "../../../Component/EventCard";
import TabComponent from "../../../Component/TabComponent";
 

 

const Events = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Events</h1>
          <TabComponent></TabComponent>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  ">
                <EventCard img='https://i.postimg.cc/y62zwMhm/Rectangle-16.png'></EventCard>
                <EventCard img='https://i.postimg.cc/k5MrQq9m/Rectangle-16-1.png'></EventCard>
                <EventCard img='https://i.postimg.cc/hjhHYsfZ/Rectangle-16-2.png'></EventCard>
           
               
            </div>
        </div>
    );
};

export default Events;