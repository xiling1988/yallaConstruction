import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className='grid min-h-screen grid-cols-1 grid-rows-[1fr,auto,1fr] bg-gradient-to-l from-[#004a85] to-[#0094c4] lg:grid-cols-[max(50%,36rem),1fr]'>
        <main className='mx-auto w-full max-w-7xl   lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8'>
          <div className='max-w-lg'>
            <h1 className='text-3xl text-center font-bold tracking-tight text-[#5cd978] sm:text-5xl'>
              We are working on Yallasana...
            </h1>
            <Player
              autoplay
              loop
              src='https://assets5.lottiefiles.com/packages/lf20_irsboeve.json'
              style={{ height: '300px', width: '300px' }}
            >
              <Controls
                visible={false}
                buttons={['play', 'repeat', 'frame', 'debug']}
              />
            </Player>
            <p className='text-[#5cd978] text-2xl text-center leading-7'>
              One stretch at a time!
            </p>
          </div>
        </main>

        <div className='hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block'>
          <img
            src='desertYoga.jpeg'
            alt=''
            className='absolute inset-0 h-full w-full object-cover'
          />
        </div>
      </div>
    </>
  )
}
