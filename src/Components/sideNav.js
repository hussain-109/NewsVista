import React, { useEffect } from 'react'
import {useState} from 'react'

import top from './images/top.png'
import india from './images/india.png'
import world from './images/world.png'
import business from './images/stock.png'
import tech from './images/technology.png'
import sport from './images/ball.png'
import science from './images/flask.png'
import tour from './images/tourism.png'
import health from './images/health.png'
import food from './images/french-fries.png'
import enviro from './images/environment.png'
import entertain from './images/entertainment.png'
import politics from './images/parliament.png'

import { Link } from 'react-router-dom'

export default function SideNav(){ 


    
    // Uind is a state for index the list items of side Navigation bar and add underline border on click 
    // Uind_p will store the privious index that was underlined and underline is removed from it when other is clicked

    const [Uind, setUind] = useState(0);
    const [Uind_p,setUind_p] = useState(0);

    // this useEffect helps remove and adding underline to the selected category
    useEffect(()=>{
        document.getElementsByClassName('search-txt')[0].value ="";
        document.getElementsByTagName('li')[Uind_p].classList.remove('border-b-2');
        document.getElementsByTagName('li')[Uind].classList.add('border-b-2');
        document.getElementsByTagName('li')[Uind].classList.add('border-sky-500');
    },[Uind])

    function showOrHideMenu(){
        let a = document.getElementById('arrow').innerHTML;
        if(a==='&lt;')
        hideMenu();
        else
        showMenu();
    }
    function showMenu(){
        document.getElementById('menu').style.left = '0rem';
        document.getElementsByClassName('sideMenuBtn')[0].style.left = '15rem';
        // document.getElementById('menu').style.zIndex = '30';
        document.getElementById('arrow').innerHTML = '&lt;'
    }
    function hideMenu(){
        document.getElementById('menu').style.left = '-15rem';
        document.getElementsByClassName('sideMenuBtn')[0].style.left = '0rem';
        // document.getElementById('menu').style.zIndex = '10';
        document.getElementById('arrow').innerHTML = '&gt;' 
    }
 
    return(
        <>
            {/* side menu button will be displayed only for devices less tha md */}

            <div  className="sideMenuBtn fixed xl:hidden left-0 top-1/2 z-20 transition-all duration-500 ease-in-out " onClick={showOrHideMenu}>
            <div className="bg-sky-500 p-2  rounded-r-full cursor-pointer shadow-lg shadow-sky-500/50 select-none">
                <span id="arrow" className="text-white text-xl ">&gt;</span>
            </div>
            </div>
            {/* <div> YEs asdfa</div> */}
            
            <div id ="menu" className="fixed top-14 left-[-15rem] xl:left-0 z-30 bg-[#f7f9fa] dark:bg-[#1C1D19] min-w-[15rem] h-screen  dark:text-white pt-5 flex justify-center max-w-[15rem] shadow-lg shadow-[#898987]/80 transition-all duration-500 ease-in-out  ">
                {/* list items in side navigation bar */}
                <ul className="">

                    {/* top headlines */}
                    
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer border-b-2 border-sky-500" > <img src={top} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(0)}}>
                    <Link to="/">Top</Link></div></li>
                    
                    {/* India  */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={india} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(1)}}><Link to="/India">India</Link></div></li>

                    {/* World  */}  
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={world} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(2)}}><Link to="/World">World</Link></div></li>

                    {/* Tachnology  */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={tech} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(3)}}><Link to="/Technology">Technology</Link></div></li>

                    {/* Business   */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={business} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(4)}}><Link to="/Business">Business</Link></div></li>

                    {/* Politics */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={politics} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(5)}}><Link to="/Politics">Politics</Link></div></li>

                    {/* sports  */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={sport} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(6)}}><Link to="/Sports">Sports</Link></div></li>

                    {/* Entertainment  */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={entertain} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(7)}}><Link to="/Entertainment">Entertainment</Link></div></li>

                    {/* Science  */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={science} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(8)}}><Link to="/Science">Science</Link></div></li>

                    {/* Tourism  */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={tour} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(9)}}><Link to="/Tourism">Tourism</Link></div></li>

                    {/* Health  */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={health} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(10)}}><Link to="/Health">Health</Link></div></li>

                    {/* Food  */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={food} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(11)}}><Link to="/Food">Food</Link></div></li>

                    {/* Environment  */}
                    <li className="py-1 h-[2.4rem] hover:scale-[113%]  flex flex-row items-center cursor-pointer"> <img src={enviro} className="h-6 mr-2 " alt="home" /><div className="text-[1rem] " onClick={()=>{setUind_p(Uind);  setUind(12)}}><Link to="/Environment">Environment</Link></div></li>
                    
                </ul>
            </div>

        </>
    )
}