import { Box, Divider, Grid, Typography } from '@mui/material'
import { dummydata } from './data/dummy-data'
import React from 'react'
  

const ResumeK2 = () => {
  return (
   <Box sx={{marginTop:'20px', marginLeft:'15%',width:'43%',height:'100%', border:'5px solid whitesmoke'}}>
    <Divider sx={{border:'2px solid Black'}}/>
  <Typography sx={{textAlign:'center',fontWeight:'bold' ,fontSize:'40px', color:'skyblue'}} >{dummydata.name}</Typography>
  <Box sx={{display:'flex',marginLeft:"20%"}}>
  <Typography sx={{paddingRight:'5px'}} >{dummydata.mobilenumber}</Typography>
  <span>|</span>
  <Typography  >{dummydata.email}</Typography>
  </Box>
  <Box sx={{display:'flex' ,marginLeft:"40%"}}>
  <Typography sx={{paddingRight:'5px'}} >{dummydata.address}</Typography>
  </Box>
  <Divider sx={{border:'1px solid Black'}}/>
  <Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'5px',color:'skyblue', marginLeft:"40%",display:'flex'}}>Summary</Typography>
  <Typography sx={{padding:'5px' }}>{dummydata.summary}</Typography>
 <Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'5px',color:'skyblue',display:'flex',marginLeft:"40%"}}>Skills</Typography>
 <Grid container >
  <Grid md={6}>
<li>{dummydata.skills1}</li>
<li>{dummydata.skills2}</li>
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
 <Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'7px',color:'skyblue',display:'flex',marginLeft:"40%"}} > Experience</Typography> 
<Grid container> 
 <Grid md={10.5}  >
 <Typography sx={{fontWeight:'bold', fontSize:'20px',color:'black',display:'flex'}}>{dummydata.role}</Typography>
 <Box sx={{display:'flex'}}> 
 <Typography>{dummydata.company1}</Typography>
 <span>|</span>
 <Typography></Typography>
 <span>|</span>
 <Typography>{dummydata.duration}</Typography>
 </Box>
 
   <li >{dummydata.res1}</li>
 <li>{dummydata.res2} </li>
 <li>{dummydata.res3} </li>
 
 </Grid>

  <Grid md={10}  >
 <Typography sx={{fontWeight:'bold', fontSize:'20px',color:'black'}}>{dummydata.role2}</Typography>
 <Box sx={{display:'flex'}}> 
 <Typography>{dummydata.company2}</Typography>
 <span>|</span>
 <Typography>{dummydata.location}</Typography>
 <span>|</span>
 <Typography>{dummydata.duration2}</Typography>
 </Box>
 <li>{dummydata.res1} </li>
 <li>{dummydata.res2}</li>
 <li>{dummydata.res3}  </li>
 </Grid>
</Grid>
<Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'7px',color:'skyblue',display:'flex',marginLeft:"40%"}} > Education and training</Typography> 


  
  <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>{dummydata.course} </Typography> 
  <Box sx={{display:'flex'}}>
  <Typography >{dummydata.school} </Typography>
  <span>|</span>
  <Typography >
  {dummydata.location} 
</Typography>
<span>|</span>
<Typography>{dummydata.Acadamic} </Typography>
</Box>

<Typography sx={{fontWeight:'bold', fontSize:'25px',color:'skyblue',display:'flex',marginLeft:"40%"}}> languages</Typography>
  <Typography sx={{fontWeight:'bold',fontSize:'20px',}}>{dummydata.lang1} </Typography>
  <Typography> {dummydata.level3} </Typography>
  <Typography  sx={{fontWeight:'bold',fontSize:'20px'}}>{dummydata.lang2} </Typography>
  <Divider sx={{border:'2px solid grey'}} ></Divider>
  <Typography >{dummydata.level1} </Typography>
  <Typography  sx={{fontWeight:'bold', fontSize:'20px'}}>{dummydata.res3} </Typography>
  <Divider sx={{border:'2px solid grey'}} ></Divider>
  <Typography>{dummydata.level3} </Typography>
   </Box>
  )
}

export default ResumeK2;