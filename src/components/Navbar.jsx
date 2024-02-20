/* eslint-disable react/jsx-key */
import {FiMenu} from "react-icons/fi";
import {BiSolidMoon, BiSolidSun} from "react-icons/bi";
import  { useState } from "react";
import { useEffect } from "react";
const navMenus = [
    {
        name: "HOME",
        link: "/#", 
    },
    {
        name: "ABOUT",
        link: "/#about", 
    },
    {
        name: "SERVICES",
        link: "/#service", 
    },
    {
        name: "CONTACT",
        link: "/#contact", 
    },
]
const Navbar = ()=>{
    // eslint-disable-next-line no-undef
    const[showMenu, setShowMenu] =useState (false);
    const[theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const toggleMenu = ()=>{
        setShowMenu(!showMenu); 
    };
    useEffect(() => {
        if(theme=== "dark"){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light ");

        }
}, [theme])

    return (
        
        <nav className="fixed w-full bg-secondary dark:bg-gray-900 dark:text-white">
            <div className="container flex justify-between items-center py-3 sm:py-0">
            

                <h1 className="text-3xl font-bold text-primary">Maira. InnoLab</h1>
                {/* desktop menu */}
                <div className="hidden sm:flex">
                    <ul className="flex items-center gap-4">
                        {navMenus.map((menu) => (
                           
                            <li key={menu.name} className="text-xl font-semibold px-2 py-4 md:py-6 inline-block hover:bg-orange-200">
                                <a href={menu.link}> 
                                {menu.name}</a>
                            </li>
                        ))}
                        {
                        theme === "dark" ? (
                        <BiSolidSun className="text-2xl dark:text-white" onClick={() => setTheme("light")}  />
                             ) : (
                        <BiSolidMoon className="text-2xl cursor-pointer" onClick={() => setTheme("dark")}  />
                            )
                        }   
                    </ul>
                </div>
                {/* mobile menu */}
                <div className="block sm:hidden">
                    <div className="flex items-center gap-4">
                            {/* theme toggle */}
                        {
                            theme === "dark" ? (
                            <BiSolidSun className="text-2xl dark:text-white" onClick={() => setTheme("light")}  />
                                ) : (
                                    <BiSolidMoon className="text-2xl cursor-pointer" onClick={() => setTheme("dark")}  />
                                )
                        }            
                    <FiMenu className="text-2xl cursor-pointer dark:text-white" onClick={toggleMenu}  />
                    </div>
                    
                    {showMenu && (<div className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-b-xl py-10">
                        <ul className="flex flex-col items-center gap-4">
                        {navMenus.map((menu) => (
                           
                           <li key={menu.name}>
                               <a href={menu.link}
                               className="text-xl font-semibold px-2 py-6 inline-block"
                               > 
                               {menu.name}</a>
                           </li>
                       ))} 
                        </ul>
                    </div>
                    
                   ) }
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;