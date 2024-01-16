
import { useEffect } from 'react';
import './App.css';
import NewsSection from "./Components/NewsSection";
import {
  BrowserRouter as Router, Routes,
  Route 
} from 'react-router-dom';
import MainLayout from "./Components/MainLayout";
import config from "./config";

import { useSelector, useDispatch } from 'react-redux'

// this app uses tailwindCSS

export default function App() {
  
  const textToSearch = useSelector((state) => state.search.searchText)

  // predefinening theme of this site 
  useEffect(() => {
    console.log(config.API_KEY)
    if (localStorage.theme !== 'light' && localStorage.theme !== 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    else {
      const cTheme = localStorage.theme;
      if (cTheme === 'dark')
        document.documentElement.classList.add('dark');
      else
        document.documentElement.classList.remove('dark');
    }
  }, []);

  
  return (
    <>
      <Router>
            
            <Routes>
            <Route path='/' element={<MainLayout />}>

            <Route path="/" element={<NewsSection key="general" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=top`} ctgry="Top Headlines" />} />

            <Route path="/India" element={<NewsSection key="india" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&country=in&language=en`} ctgry="India" />} />

            <Route path="/World" element={<NewsSection key="world" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=world`} ctgry="World" />} />

            <Route path="/Technology" element={<NewsSection key="technology" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=technology`} ctgry="Technology" />} />

            <Route path="/Business" element={<NewsSection key="business" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=business`} ctgry="Business" />} />

            <Route path="/Politics" element={<NewsSection key="Politics" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=politics`} ctgry="Politics" />} />

            <Route path="/Sports" element={<NewsSection key="Sports" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=sports`} ctgry="Sports" />} />

            <Route path="/Environment" element={<NewsSection key="Environment" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=environment`} ctgry="Environment" />} />

            <Route path="/Science" element={<NewsSection key="Science" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=science`} ctgry="Science" />} />

            <Route path="/Entertainment" element={<NewsSection key="Entertainment" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=entertainment`} ctgry="Entertainment" />} />

            <Route path="/Health" element={<NewsSection key="Health" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=health`} ctgry="Health" />} />

            <Route path="/Food" element={<NewsSection key="Food" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=food`} ctgry="Food" />} />

            <Route path="/Tourism" element={<NewsSection key="Tourism" url={`https://newsdata.io/api/1/news?apikey=${config.API_KEY}&language=en&category=tourism`} ctgry="Tourism"/>} />
            
            <Route path={`/Search`} element={<NewsSection url=""  key={textToSearch} ctgry="Search" />
            
          } />
            </Route>
          </Routes>
        
      </Router>
    </>
  )
}


