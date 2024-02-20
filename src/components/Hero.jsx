
import womenintech from "../assets/womenintech.jpg"; 
const Hero = ()=>{
    return (
        <>
        <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
            <div className="container sm:h-[600px] grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0">
                <div>
                    <div className="container space-y-2 grid justify-center sm:justify-center py-4 items-start">
                    <p className="uppercase  text-xl dark:text-white text-gray-800">Hello</p>
                    <p className="text-xl md:text-5xl font-bold text-black/80 dark:text-white"> I'm Aisha Muhyiddeen Ahmad</p>
                    <p className="text-xl text-gray-700 dark:text-white">Graphic Designer & <br/> 
                    A Frontend Developer
                    </p>
                    <p className="text-black/75 dark:text-white/70  sm:text-left">
                    I'm a developer who have a deep passion for developing and building solutions that are 
                    user-friendly with fuctional and seamless user experience to help achieve results.
                   
                    </p>
                    <div>
                    <a href="mailto:@gmail.com"className="inline-block primary-btn !px-6">Hire Me</a>
                    </div>
                    
                </div>
            </div>
            {/* image container */}
            <div>
                <img src={womenintech} alt="Not Found" className="w-full md:max-w-lg mx-auto" />
            </div>
            </div>
        </main>
        </>
    );
}

export default Hero;