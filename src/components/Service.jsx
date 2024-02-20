import ServicesBox from "./ServicesBox.jsx";

const Service = () => {
    return (
        <>
        <section id="service"className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
        <div className="container flex flex-col w-full items-center">
       
       <h1 className="text-3xl font-bold text-center dark:text-white border-b-2 border-primary pb-1">Services</h1>
        <p className="text-slate-500 text-center md-w-[50%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum veniam expedita voluptates voluptatum.</p>
       </div>
       {/* Services Card */}
       <div> 
        <ServicesBox />

       </div>
       
        </section>
        </>
        
    );
 }

 export default Service;