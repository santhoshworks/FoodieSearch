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
import Grid from '@mui/material/Grid';

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


      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Navbar />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <RandomFoodGenerator setFoodName={setFoodName} />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Restaurants foodName={foodName} />
          </Grid>
        </Grid>
      </Box>



    </div>
    // </ThemeProvider>
  )
}
