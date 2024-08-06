import { Box, Grid, Typography,Avatar, useMediaQuery, Divider } from '@mui/material'
import React from 'react'
import { shadows } from '@mui/system';
import { dummydata } from './data/dummy-data'
export const ResumeK5 = () => {
  const mediaViewPort = useMediaQuery("(min-width:600px)")
  return (
    <Box sx={{marginTop:'20px', marginLeft:'15%',width:'44%',height:'100%', borderRadius:'20px',border:'5px solid grey'}}>

<Grid container>
<Grid md={2.5}>
  <Box sx={{border:'5px solid maroon'}}>
  <Avatar
                sx={{ backgroundColor: 'white'}}
                variant="square"
                style={{
                  width:mediaViewPort? "70%":"30%",
                  height:mediaViewPort? "70%":"30%",
                  marginLeft:mediaViewPort? "10%":"30%",
                  marginTop:mediaViewPort? "2%":"0%",
                  marginBottom:mediaViewPort?"20%":"10%",
                  fontSize: "50px",
                  color: "black",
                }}
              >
                DA
              </Avatar>
  </Box>

</Grid>
<Grid md={9.3}>
<Box display={{display:'flex', backgroundColor:'maroon', color:'white',boxShadow: '10px 10px' }} >
   <Typography sx={{marginLeft:'10px',fontWeight:'bold',fontSize:'40px'}}>{dummydata.name} </Typography>
   </Box>
   <Typography sx={{fontWeight:'bold',fontSize:'25px'}}>summary</Typography>
   <Divider/>
   <Typography>{dummydata.summary}</Typography>
   <Typography sx={{fontWeight:'bold',fontSize:'25px'}}>Skills</Typography>
   <Divider/>
   <Grid container>
   <Grid md={4.8}> 
    <li>{dummydata.skills1}</li>
    <li>{dummydata.skills2}</li>
    <li>{dummydata.skills3}</li>
    <li>{dummydata.skills4}</li>
   </Grid>
   <Grid md={4.7}> 
    <li>{dummydata.skills5}</li>
    <li>{dummydata.skills6}</li>
    <li>{dummydata.skills7}</li>
    <li>{dummydata.skills8}</li>
   </Grid>
   </Grid>
   <Typography sx={{fontWeight:'bold',fontSize:'25px'}}>Experience</Typography>
<Divider sx={{backgroundColor:'black'}}/>
<Typography sx={{fontWeight:'bold',fontSize:'18px'}}> {dummydata.role}</Typography>
<Box sx={{display:'flex'}}>
  <Typography>{dummydata.company1}</Typography>
  <span>|</span>
  <Typography>{dummydata.location}</Typography>
  <span>|</span>
  <Typography>{dummydata.duration}</Typography>
  

</Box>
<li>{dummydata.res1}</li>
  <li>{dummydata.res2}</li>
  <li>{dummydata.res3}</li>
  <Typography sx={{fontWeight:'bold',fontSize:'18px'}}> {dummydata.role2}</Typography>
<Box sx={{display:'flex'}}>
  <Typography>{dummydata.company2}</Typography>
  <span>|</span>
  <Typography>{dummydata.location}</Typography>
  <span>|</span>
  <Typography>{dummydata.duration2}</Typography>
  

</Box>
<li>{dummydata.res1}</li>
  <li>{dummydata.res2}</li>
  <li>{dummydata.res3}</li>
  <Typography sx={{fontWeight:'bold',fontSize:'25px'}}>languages</Typography>
  <Divider sx={{backgroundColor:'black'}}/>
  <Box sx={{display:'flex'}}>
  <Typography sx={{fontWeight:'bold' ,fontSize:'14px'}}>{dummydata.lang1}</Typography>
  <span>:</span>
  <Typography>{dummydata.level3}</Typography>
  </Box>
 <Grid container>
  <Grid md={4.8}>
<Typography sx={{fontWeight:'bold'}}>{dummydata.lang2}</Typography>
<Divider sx={{backgroundColor:'maroon',marginleft:'100%'}}/>
<Typography>{dummydata.level1}</Typography>
  </Grid>
  <Grid md={4.7}>
<Typography sx={{fontWeight:'bold'}}> {dummydata.lang3}</Typography>
<Divider sx={{backgroundColor:'maroon',}}/>
<Typography>{dummydata.level2}</Typography>
  </Grid>
 </Grid>
</Grid>

</Grid>

    </Box>
  )
}
