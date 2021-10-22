import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const StyledCard = styled(Card)({
    boxShadow: '0 0 10px 3px #6f9aa79e'
  });

function Restaurants(props) {
    const [restaurants, setRestaurants] = useState(null)

    useEffect(() => {
        const location = localStorage.getItem('location') || 'Cary, NC';
        if (props.foodName) {
            fetch('http://localhost:3000/api/placeSearch?search=' + props.foodName + '&location=' + location)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const openRes = data.results.filter((place) => {
                        return place?.opening_hours?.open_now
                    })
                    setRestaurants(openRes)
                })
        }
    }, [props.foodName])
    if (!restaurants) return null;
    return (
        <div className={""}>
            <Stack spacing={2}>
                {restaurants.slice(0, 5).map(place => {
                    return (
                        <StyledCard sx={{ display: 'flex' }} key={place.name}> 
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {place.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {place.formatted_address}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
 
                                    <Rating name="half-rating-read" defaultValue={place.rating} precision={0.5} readOnly />
                                    {
                                        Array(place.price_level).map((value, index)=> {
                                            return <AttachMoneyIcon fontSize="inherit"  key={'priceleve'+index}/>
                                        })
                                    } 
                                 
                                </Box>
                            </Box>
                            {/* <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image="/static/images/cards/live-from-space.jpg"
                                alt="Live from space album cover"
                            /> */}
                        </StyledCard>)
                })}
            </Stack>
        </div>
    )
}

export default Restaurants
