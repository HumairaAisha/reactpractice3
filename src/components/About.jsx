
const About = () => {
    return (
        <>
        <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
        <div className="container md:w-[70%] sm:py-16 py-10">
            <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="relative font-bold">
                <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">ABOUT</div>
                <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl md:text-3xl">About Me</h1>
                </div>
                <div className="text-slate-600">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Vero et officiis eos? Facilis minima dolores sint nemo, 
                        dolorum earum sed.</p> <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, magnam.</p> 
                        <div>
                            <a href="#" className="primary-btn inline-block my-6 mr-6">Dowmload Resume</a>
                            <a href="#tel:+234" className="outline-btn inline-block ">Contact</a>
                        </div>
                </div>

            </div>

        </div>
        </section>
        </>
    );
}
export default About;