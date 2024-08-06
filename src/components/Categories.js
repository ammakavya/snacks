
import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
export const Categories = () => {
  return (
   <Box>
    <Grid container sx={{padding:'30px'}}>
        <Grid md={1.8}>
<Button sx={{backgroundColor:'orangered',color:'white',
":hover":{
    backgroundColor:"orangered"

}}}>snacks</Button>
        </Grid>
<Grid md={1.8}>
<Button sx={{backgroundColor:'orangered',color:'white',
":hover":{
    backgroundColor:"orangered"
}
}}> sweets</Button>
</Grid>
<Grid md={1.8}>
<Button sx={{backgroundColor:'orangered',color:'white', ":hover":{
    backgroundColor:"orangered"
}}}> pickles</Button>
</Grid>
<Grid md={1.8}>
<Button sx={{backgroundColor:'orangered',color:'white',":hover":{
    backgroundColor:"orangered"
}}}> Dryfruitsweet</Button>
</Grid>
<Grid md={1.5}>
<Button sx={{backgroundColor:'orangered',color:'white',":hover":{
    backgroundColor:"orangered"
}}}> masala&podis</Button>
</Grid>
<Grid md={1.5}>
<Button sx={{backgroundColor:'orangered',color:'white',":hover":{
    backgroundColor:"orangered"
}}}> specials</Button>
</Grid>
<Grid md={1.5}>
<Button sx={{backgroundColor:'orangered',color:'white',":hover":{
    backgroundColor:"orangered"
}}}>All</Button>
</Grid>
    </Grid>
   </Box>
  )
}
