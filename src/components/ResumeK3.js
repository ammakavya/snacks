import { Box, Grid, Typography } from '@mui/material'
import { dummydata } from './data/dummy-data'
import React from 'react'

export const ResumeK3 = (props) => {
   
  return (
   <Box sx={{marginTop:'20px', marginLeft:'15%',width:'45%',height:'100%', borderRadius:'20px',border:'2px solid grey'}}>
    <Typography sx={{fontWeight:'bold' ,fontSize:'40px', color:'skyblue'}}> Diya Agarwal</Typography>
   <Box sx={{display:'flex'}}>
    <Typography sx={{paddingRight:'10px'}}> {dummydata.email}</Typography>
    <span>|</span>
    <Typography sx={{paddingLeft:'10px'}}>{dummydata.mobilenumber}</Typography>
    <span>|</span>
    <Typography sx={{paddingLeft:'10px'}}>{dummydata.location}</Typography>
    </Box>
    <Grid container>
        <Grid md={3}>
        <Typography sx={{fontWeight:'bold',fontSize:'25px',color:'skyblue',padding:'7px'}}>Summary</Typography>
        </Grid>
        <Grid md={9}>
        <Typography>{dummydata.summary}</Typography>
        </Grid>
        <Grid md={3}>
<Typography sx={{fontWeight:'bold',fontSize:'25px',color:'skyblue',padding:'7px'}}> Skills</Typography>
        </Grid>
        <Grid md={4.5}>
<li>{dummydata.skills1}</li>
<li> {dummydata.skills2} </li>
<li>{dummydata.skills3}</li>
<li>{dummydata.skills4}</li>
        </Grid>
        <Grid md={4.5}>
<li>{dummydata.skills5}</li>
<li> {dummydata.skills6} </li>
<li>{dummydata.skills7}</li>
<li>{dummydata.skills8}</li>
        </Grid>
        <Grid md={3}>
<Typography sx={{fontWeight:'bold',fontSize:'25px',color:'skyblue',padding:'7px'}}>Experience</Typography>
        </Grid>
       
        <Grid md={9}>
        <Typography sx={{fontWeight:'bold',fontSize:'25px'}}>{dummydata.role}</Typography>
        <Box sx={{display:'flex'}}>
        <Typography>{dummydata.company}</Typography>
<Typography>{dummydata.location}</Typography>
<Typography>{dummydata.duration}</Typography>

</Box>

<li>{dummydata.res1}</li>
<li>{dummydata.res2}</li>
<li>{dummydata.res3}</li>
<Typography sx={{fontWeight:'bold',fontSize:'25px'}}>{dummydata.role2}</Typography>
        <Box sx={{display:'flex'}}>
        <Typography>{dummydata.company}</Typography>
<Typography>{dummydata.location}</Typography>
<Typography>{dummydata.duration}</Typography>

</Box>

<li>{dummydata.res3}</li>
<li>{dummydata.res1}</li>
<li>{dummydata.res2}</li>
        </Grid>
      
       
        <Grid md={3}>
<Typography sx={{fontWeight:'bold',fontSize:'25px',color:'skyblue',padding:'7px'}}>Eucation And Training</Typography>
        </Grid>
       <Grid md={9}>
       <Typography sx={{fontWeight:'bold',fontSize:'25px'}}>{dummydata.course}</Typography>
       <Typography>{dummydata.Acadamic}</Typography>
       <Typography>{dummydata.school}</Typography>
       </Grid>
       <Grid md={3}>
<Typography sx={{fontWeight:'bold',fontSize:'25px',color:'skyblue',padding:'7px'}}>languages</Typography>
        </Grid>
        <Grid md={9}>
       <Typography >{dummydata.lang1}</Typography>
       <Typography>{dummydata.lang2}</Typography>
       <Typography>{dummydata.lang3}</Typography>
       </Grid>
    </Grid>
    
   </Box>
  )
}
