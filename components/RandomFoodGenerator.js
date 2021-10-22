import React, { useState, useEffect } from 'react'
import map from 'lodash/map';
import { Meal } from '../Mockdata/RandomMeal'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
// import Image from 'next/image'
import { styled } from '@mui/material/styles';
import styles from '../styles/Home.module.css'

const StyledImage = styled('img')(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    height: 'auto',
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

function RandomFoodGenerator(props) {
    const [dish, setDish] = useState(null);

    const generateDish = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        // Promise.resolve(Meal)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDish(data.meals[0])
                props.setFoodName(data.meals[0].strMeal)
            })
    }

    useEffect(() => {
        generateDish();
    }, [])

    if (!dish) {
        return null;
    }

    return (
        <div className={styles.card}>

            <div className={styles.cardImage}>
                <StyledImage src={dish.strMealThumb} className={styles.cardImageContent} />
            </div>
            <div className={styles.cardHeader}>
                <Typography gutterBottom variant="h4" component="div">
                    {dish.strMeal}

                    <Button variant="contained" size="small" onClick={() => generateDish()}>

                        <AutorenewOutlinedIcon fontSize="medium" />

                        Generate</Button>
                </Typography>

            </div>
            <div className={styles.cardContent}>
                <Typography variant="body2" color="#FFF">
                    <div className="meal-origin">{dish.strArea}</div>
                    <div className="meal-ingredients">
                        {
                            map(dish, (item, key) => {
                                if (key.indexOf("strIngredient") > -1 && item) {
                                    return <Chip label={item} mr={1} sx={{ margin: '0.2rem 0.2rem' }} variant="outlined" background="#FFF" />
                                }
                                return ""
                            })
                        }
                    </div>
                    <div className="meal-youtube">{dish.strYoutube}</div>
                    <div className="dish"></div>


                </Typography>
            </div>
            {/* <Card sx={{ maxWidth: 345 }}> */}
            {/* <CardHeader */}








        </div>
    )
}

export default RandomFoodGenerator
