import Head from 'next/head'
import Image from 'next/image'
import Homepage from '../components/Homepage';
import Shoe from '../components/Shoedesign';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Essemmi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Homepage heading='Essemmi' message='Peak elegance at your fingertips...' /> 
     <Slider />
    </>
  )
}
