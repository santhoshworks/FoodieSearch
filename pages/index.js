import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RandomFoodGenerator from '../components/RandomFoodGenerator';
import Navbar from '../components/Navbar';
import Restaurants from '../components/Restaurants';
import Location from '../components/Location';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import React from 'react';

export default function Home() {
  const [foodName, setFoodName] = React.useState(null);

  return (
    // <ThemeProvider >

    <div className={styles.container}>
      <Head>
        <title>Foody :)</title>
        <meta name="description" content="Get your next meal ideas from us" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link href="https://fonts.googleapis.com/css2?family=Chilanka&display=swap" rel="stylesheet"></link>

      </Head>

      <Navbar />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{ m: '2rem' }}>
        {/* <Container maxWidth="lg"> */}
          <Box gridColumn="span 6">
             
              {/* <div className={styles.logo}><img src="https://img.icons8.com/color/100/000000/bento.png"/> </div>
            <div className={styles.title}>Foody</div> */}
              <RandomFoodGenerator setFoodName={setFoodName} />
 
          </Box>
          <Box gridColumn="span 4">
              <Restaurants foodName={foodName}/>
          </Box>
          <Box gridColumn="span 4">
            {/* <Item>xs=4</Item> */}
          </Box>
          <Box gridColumn="span 8">
            {/* <Item>xs=8</Item> */}
          </Box>
        {/* </Container> */}

      </Box>


    </div>      
    // </ThemeProvider>
  )
}
