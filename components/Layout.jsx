import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Layout = ({children}) => {
  const [theme, setTheme] = useState('')
  
  const handleTheme = ()=>{
    let newTheme
    if(theme === 'light-theme'){
      newTheme = 'dark-theme'
    }else{
      newTheme = 'light-theme'
    }
    setTheme(newTheme)
  }

  useEffect(()=>{
    setTheme(getStorageTheme())
  },[])

  useEffect(()=>{
    localStorage.setItem('theme', theme);
  },[theme])

  return (
    <div className={`layout ${theme}`} >
    <header>
      <Navbar handleTheme={handleTheme} theme={theme}/>
    </header>
    <main className="main-container">
      {children}
    </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout