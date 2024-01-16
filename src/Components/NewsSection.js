import React,{useEffect} from 'react'
import NewsItem from './NewsTile'
import { useState } from 'react';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import def_img from './images/default_news_image.jpeg'
import config from "../config" 

export default function NewsSection(props) {

    const [articles, setArticles] = useState([]);
    const [nextPage, setNextpage] = useState("");
    const [pages,setPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading,setLoading] =useState(false);
    const [url,setURL] = useState(props.url);
    
  
    //top headlines news loads when webpage load first
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          let apiURL = url;
          if(url==="")
          {
            apiURL = `https://newsdata.io/api/1/news?apikey=${config.API_KEY}&qInTitle=${(document.getElementsByClassName('search-txt')[0].value).replace(" ","%20")}&language=en`;
            setURL(apiURL);
          }
          
          setLoading(true);

          const result = await fetch(apiURL);
          const data = await result.json();
          setLoading(false);
          setArticles(data.results);
          setNextpage(data.nextPage);
          setTotalResults(data.totalResults);
        } catch (error) {
          console.error('Error fetching data:');
        }
      };
      fetchData();
    }, [url]); 
    

    async function fetchMoreData(){
      try{
        setLoading(true);
      const result = await fetch(`${url}&page=${nextPage}`);
      const data = await result.json();

      setTimeout(() => {
        setArticles(articles.concat(data.results));
      setNextpage(data.nextPage);
      setPages(pages+1);
      }, 700);
      setLoading(false);
      }catch(err){
         console.log(err);
       }
      }
    return (
      <>
        

        {/* outer div to defining the news section */}
        <div id="news_body" className="dark:bg-[#232520] absolute top-14 left-[0rem] xl:left-[15rem] z-10  dark:text-white w-[100%] xl:w-[calc(100%-15rem)]  px-5 pt-5 pb-[3.7rem] transition-all duration-500 ease-in-out">

          {/* for Headlines */}
          <div className="w-[100%] xl:w-[100%] h-12 flex justify-center">
          <div className="w-[90%] xl:w-[100%] h-12 px-5 font-bold rounded text-[1.5rem] bg-[#b9e4f5] dark:bg-rose-500 flex flex-row items-center inline-block ">{props.ctgry}</div>
          </div>
          
          <InfiniteScroll
          dataLength={pages*10} 
          next={fetchMoreData}
          hasMore={(pages*10>totalResults)? false:true}
          loader={<div></div>}
          >

          {/* various news tiles are set from here */}
          <div className="mt-8 w-[100%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center overflow-hidden">
            
            {articles.map((element) => (
              <NewsItem key={element.link} src={element.source_id} img={(element.image_url)?element.image_url:def_img} date={element.pubDate} title={element.title} desc={element.description} link={element.link} />
            ))}
            

          </div>
          <div className="w-[100%] flex flex-row justify-center pt-5">{(setLoading)?<Spinner/>:""}</div>
          </InfiniteScroll>

          
        </div>
       
      </>
    );
  }

