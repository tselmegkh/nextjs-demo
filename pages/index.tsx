import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import CustomCursor from '../components/CustomCursor'
import Featured from '../components/Featured'
import About from '../components/About'
import { useEffect, useRef, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function Home() {
  const [preloader, setPreloader] = useState(true);

  const [timer, setTimer] = useState(3);
  const initialRef: any = null;
  const id = useRef(initialRef);
  const clear = () => {
    console.log('here');
    window.clearInterval(id.current);
    setPreloader(false);
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000)
  }, [])

  useEffect(() => {

    if (timer == 0) {
      clear();
    }
  }, [timer])
  return (
    <>
      <CustomCursor />
      {
        preloader ? <div className="loader-wrapper absolute">
          <h1>SOMETHINGOOD</h1>
          <h2>New Drop Out</h2>
        </div> : <div className="main-container" id="main-container"

          data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
        </div>
      }

    </>
  )
}
