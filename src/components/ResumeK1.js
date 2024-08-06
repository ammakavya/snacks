import { Box, Divider, Grid, Typography } from '@mui/material'
import { dummydata } from './data/dummy-data'
import React from 'react'
  

const ResumeK1 = (props) => {
  return (
   <Box sx={{marginTop:'20px', marginLeft:'15%',width:'43%',height:'100%', border:'5px solid whitesmoke'}}>
    <Divider sx={{border:'2px solid Black'}}/>
  <Typography sx={{textAlign:'center',fontWeight:'bold' ,fontSize:'40px'}} >{dummydata.name}</Typography>

  <Box sx={{display:'flex',marginLeft:"20%"}}>
  <Typography sx={{paddingRight:'5px'}} >{dummydata.address}</Typography>
  <span>|</span>
  <Typography sx={{paddingRight:'5px'}} >{dummydata.mobilenumber}</Typography>
  <span>|</span>
  <Typography  >{dummydata.email}</Typography>
  </Box>
  <Divider sx={{border:'1px solid Black'}}/>
  <Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'5px'}}>Summary</Typography>
  <Typography sx={{padding:'5px' }}>{dummydata.summary}</Typography>
 <Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'5px'}}>Skills</Typography>
 <Grid container >
  <Grid md={6}>
<li>{dummydata.skills1}</li>
<li> {dummydata.skills2}</li>
<li>{dummydata.skills3}</li>
<li>{dummydata.skills4}</li>
  </Grid>
  <Grid md={6}>
<li>{dummydata.skills5}</li>
<li>{dummydata.skills6}</li>
<li>{dummydata.skills7}</li>
<li>{dummydata.skills8}</li>
  </Grid>
 </Grid>
 <Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'7px'}} > Experience</Typography> 
<Grid container> 
  <Grid md={1.5} >
<Typography sx={{padding:'2px'}}>{dummydata.duration}</Typography>
  </Grid >
 <Grid md={10.5}  >
 <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>{dummydata.role}</Typography>
   <li >{dummydata.res1}</li>
 <li>{dummydata.res2} </li>
 <li>{dummydata.res3} </li>
 
 </Grid>
 <Grid md={1.5}>
<Typography  sx={{padding:'2px'}}>{dummydata.duration}
</Typography>
  </Grid>
  <Grid md={10}  >
 <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>{dummydata.role2}</Typography>
 <li>{dummydata.res1} </li>
 <li>{dummydata.res2} </li>
 <li>{dummydata.res3} </li>
 </Grid>
</Grid>
<Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'7px'}} > Education and training</Typography> 
<Grid container>
<Grid md={1.5}>
<Typography  sx={{padding:'1px'}}>{dummydata.Acadamic}</Typography>
  </Grid>
  <Grid md={10.5}>
  <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>{dummydata.course}</Typography> 
  <Typography >{dummydata.school} </Typography>
  </Grid>
</Grid>
<Typography sx={{fontWeight:'bold', fontSize:'20px'}}> {dummydata.lang1}</Typography>
<Typography> native speaker</Typography>
  <Typography sx={{fontWeight:'bold'}}>{dummydata.lang2}</Typography>
  <Typography  sx={{fontWeight:'bold',fontSize:'20px'}}>{dummydata.lang3}</Typography>
  <Divider sx={{border:'2px solid grey'}} ></Divider>
  <Typography >proficient</Typography>
  <Typography  sx={{fontWeight:'bold', fontSize:'20px'}}>bengali</Typography>
  <Divider sx={{border:'2px solid grey'}} ></Divider>
  <Typography>upper intermediate</Typography>
   </Box>
  )
}

export default ResumeK1;