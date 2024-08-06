import { Box, Divider, Grid, Typography } from '@mui/material'
import { dummydata } from './data/dummy-data'
import React from 'react'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
  

const ResumeK7 = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? 'maroon' : '#308fe8',
    },
  }));
  return (
   <Box sx={{marginTop:'20px', marginLeft:'15%',width:'43%',height:'100%',border:'2px solid black',borderRadius:'25px'}}>
   
  <Typography sx={{textAlign:'center',fontWeight:'bold' ,fontSize:'40px', color:'maroon'}} >{dummydata.name}</Typography>
  <Divider/>
  <Box sx={{display:'flex',marginLeft:"20%"}}>
  <Typography sx={{paddingRight:'5px'}} >{dummydata.mobilenumber}</Typography>
  <span>|</span>
  <Typography  >{dummydata.email}</Typography>
  <span>|</span>
  <Typography sx={{paddingRight:'5px'}} >{dummydata.address}</Typography>
  </Box>
  <Divider sx={{border:'1px solid Black'}}/>
  <Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'5px',color:'maroon', marginLeft:"40%",display:'flex'}}>Summary</Typography>
  <Divider/>
  <Typography sx={{padding:'5px' }}>{dummydata.summary}</Typography>
 <Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'5px',color:'maroon',display:'flex',marginLeft:"40%"}}>Skills</Typography>
 <Divider/>
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
 <Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'7px',color:'maroon',display:'flex',marginLeft:"40%"}} > Experience</Typography> 
 <Divider/>
<Grid container> 
 <Grid md={10.5}  >
 <Box sx={{display:'flex'}}> 
 <Typography sx={{fontWeight:'bold', fontSize:'20px',color:'black',display:'flex'}}>{dummydata.role}</Typography>
 <Typography sx={{marginLeft:'40%',fontWeight:'bold'}}>{dummydata.duration}</Typography>
 </Box>
 <Box sx={{display:'flex'}}> 
 <Typography sx={{fontWeight:'bold',color:'black',display:'flex'}}>{dummydata.company1}</Typography>
 <Typography sx={{marginLeft:'75%',fontWeight:'bold'}}>{dummydata.location}</Typography>
 </Box>
 
   <li >{dummydata.res1}</li>
 <li>{dummydata.res2} </li>
 <li>{dummydata.res3} </li>
 
 </Grid>

 <Grid md={10.5}  >
 <Box sx={{display:'flex'}}> 
 <Typography sx={{fontWeight:'bold', fontSize:'20px',color:'black',display:'flex'}}>{dummydata.role2}</Typography>
 <Typography sx={{marginLeft:'60%',fontWeight:'bold'}}>{dummydata.duration2}</Typography>
 </Box>
 <Box sx={{display:'flex'}}> 
 <Typography sx={{fontWeight:'bold',color:'black',display:'flex'}}>{dummydata.company2}</Typography>
 <Typography sx={{marginLeft:'60%',fontWeight:'bold'}}>{dummydata.location}</Typography>
 </Box>
 
   <li >{dummydata.res1}</li>
 <li>{dummydata.res2} </li>
 <li>{dummydata.res3} </li>
 
 </Grid>
</Grid>
<Typography sx={{fontWeight:'bold',fontSize:'25px',padding:'7px',color:'maroon',display:'flex',marginLeft:"30%"}} > Education and training</Typography>
<Divider/> 
   
  <Box sx={{display:'flex'}}>
  <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>{dummydata.course} </Typography>
  <Typography sx={{marginLeft:'40%'}} >{dummydata.Acadamic} </Typography>
  </Box>
  <Box sx={{display:'flex'}}>
  <Typography sx={{}}>{dummydata.school} </Typography>
  <Typography sx={{marginLeft:'25%'}} >{dummydata.location} </Typography>
  </Box>
 


<Typography sx={{fontWeight:'bold', fontSize:'25px',color:'maroon',display:'flex',marginLeft:"40%"}}> languages</Typography>
<Divider/>
  <Typography sx={{fontWeight:'bold',fontSize:'20px',}}>{dummydata.lang1} </Typography>
  <Typography> {dummydata.level3} </Typography>
  <Typography  sx={{fontWeight:'bold',fontSize:'20px'}}>{dummydata.lang2} </Typography>
  <BorderLinearProgress  variant="determinate" value={100} />
  <Typography >{dummydata.level1} </Typography>
  <Typography  sx={{fontWeight:'bold', fontSize:'20px'}}>{dummydata.lang3} </Typography>
  <BorderLinearProgress variant="determinate" value={66} />
  <Typography>{dummydata.level2} </Typography>
   </Box>
  )
}

export default ResumeK7;