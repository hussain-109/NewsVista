import React, { useState } from 'react';
import darkMode from './images/dark.png'
import logo from './images/news.png'
import lightMode from './images/light.png'
import { Link } from 'react-router-dom';

import {  useDispatch } from 'react-redux'
import {  putText } from '../app/features/searchSlice'

export default function NavBar() {
    const [theme, setTheme] = useState(localStorage.theme);
    // const [searchTXT, setSearchTXT] = useState("");
    const dispatch = useDispatch()

    function removeUnderLine()
    {
        for(var i=0;i<=12;i++)
        document.getElementsByTagName('li')[i].classList.remove('border-b-2');
    }

    function handleKeyDown(event) {
          if (event.key === 'Enter') {
            handleEnterKeyPress();
          }
    }

      function handleEnterKeyPress() { 
        dispatch(putText((document.getElementsByClassName('search-txt')[0].value))) ; removeUnderLine() ;
      }

      function toggleMenu(){
        console.log("yes");
        document.getElementsByClassName('rods')[0].classList.toggle("menu_btn_rod1");
        document.getElementsByClassName('rods')[1].classList.toggle("menu_btn_rod2");
        document.getElementsByClassName('rods')[2].classList.toggle("menu_btn_rod3");
        document.getElementsByClassName('navbarMenu')[0].classList.toggle("navBarMenuToggle");
      }

    return (
        <>

            <div className="h-[2rem] w-[3rem] xl:hidden fixed top-[1rem] right-[1rem] z-30 overflow-hidden grid grid-rows-3 justify-space-between content-center" onClick={toggleMenu}>
              <div id="upper" className="rods bg-sky-500"></div>
              <div id="middle" className="rods bg-sky-500"></div>
              <div id="lower" className="rods bg-sky-500"></div>
            </div>

            {/* create top navBar using grid  */}
            <div className="fixed top-0 left-0 w-[100vw]  z-20 h-14 bg-[#dfdfdf] border-b-2 border-[#E7E7E7]  text-black dark:bg-[#1C1D19] dark:text-white dark:border-none flex flex-col xl:flex-row shadow-lg shadow-[#898987]/30 dark:shadow-none transition-all duration-500 ease-in-out">
            
            
                {/* NewsVista Name */}
                <div className=" w-[20rem]  self-start xl:self-center flex flex-row ">
                    <img src={logo} className="w-10 ml-4" alt="logo" />
                    <p className=" px-2 text-[2rem] text-[#CEC60C]">NewsVista</p>
                </div>

                <div className="navbarMenu relative top-[-14rem] xl:top-0 xl:self-center w-[100vw] bg-[#dfdfdf] dark:bg-[#1C1D19] xl:w-[calc(100vw-20rem)] grid grid-rows-2 grid-cols-1 xl:grid-cols-6  xl:grid-rows-1 justify-items-center  content-between transition-all duration-500 ease-in-out">
               
                  {/* search bar   */}
                  <div className="mt-4 xl:mt-0 ml-[1rem] xl:ml-0  xl:self-center xl:col-span-4 xl:justify-self-center justify-self-start">
                      <input className="search-txt rounded h-8 w-[15rem] xl:w-[25rem] mr-4 px-2 border-[#E7E7E7] border-2 dark:border-none dark:bg-[#686868] " type="text" placeholder="Search NewsVista" onKeyDown={(event)=>{handleKeyDown(event)}}/>

                      <button className="searchbtn bg-sky-500 text-white  py-1 px-4 rounded hover:bg-blue-500 hover:py-1.5 hover:px-5 hover:font-bold" onClick={handleEnterKeyPress}>
                          <Link to={`/Search`}>Search</Link>
                          </button>
                  </div>
                  
                  {/* mode switcher */}
                  <div className=" ml-[1rem] xl:ml-0 xl:col-span-2 self-center xl:justify-self-center justify-self-start flex flex-row cursor-pointer" onClick={changeTheme}>
                      <img src={(theme==='dark')? lightMode:darkMode} className="h-8 w-8" alt="dark" />
                      <p className="pl-3 text-[1.2rem] dark:text-[#FFFFFF]">{(theme==='dark')? "Light":"Dark"} mode</p>
                  </div>

                  {/* login button */}
                  {/* <div className="ml-[1rem] xl:ml-0 mb-2 xl:col-span-1 self-center xl:justify-self-center justify-self-start cursor-pointer">
                      <Link to="/login"> <img src={(profilePicture.length>0)?(profilePicture==="yes")?logind:profilePicture:(theme==='dark')? logind:loginl} alt="dark" className="w-[2rem]" /></Link></div> */}
                </div>

                </div>
        </>
    )
    function changeTheme(){
        const storedTheme = localStorage.getItem('theme');
          if (storedTheme==='dark') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
          } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark')
            setTheme('dark');
          }
    }
}