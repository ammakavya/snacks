import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { dummydata } from './data/dummy-data'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
  

export const ResumeK6 = () => {
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
    <Box sx={{marginTop:'20px', marginLeft:'15%',width:'43%',height:'100%', borderRadius:'20px',border:'5px solid black'}}>
       <Divider sx={{border:'10px solid orange',margin:'10px'}}/>
  <Typography sx={{fontWeight:'bold',fontSize:'40px',color:'maroon', marginLeft:'35%'}}>{dummydata.name}</Typography>
  <Box sx={{display:'flex',marginLeft:'20%'}}>
<Typography sx={{marginRight:'2px'}}> {dummydata.address}</Typography>
<span>_</span>
<Typography>{dummydata.mobilenumber}</Typography>
<span>_</span>
<Typography>{dummydata.email}</Typography>
  </Box>
  <Typography sx={{fontWeight:'bold' , marginLeft:'20px',color:'maroon',fontSize:'25px'}}>Summary</Typography>
  <Divider/>
  <Typography sx={{marginLeft:'75px'}}>{dummydata.summary}</Typography>
  <Typography sx={{fontWeight:'bold', marginLeft:'20px', color:'maroon',fontSize:'25px'}}>Skills</Typography>
  <Divider/>
<Grid container>
    <Grid md={5} sx={{marginLeft:'65px'}} >
<li>{dummydata.skills1}</li>
<li>{dummydata.skills2}</li>
<li>{dummydata.skills3}</li>
<li>{dummydata.skills4}</li>
    </Grid>
    <Grid md={5} >
<li>{dummydata.skills5}</li>
<li>{dummydata.skills6}</li>
<li>{dummydata.skills7}</li>
<li>{dummydata.skills8}</li>
    </Grid>
</Grid>
<Typography sx={{fontWeight:'bold', color:'maroon' ,fontSize:'25px',marginLeft:'20px'}}>Experience</Typography>
<Divider/>
<Box sx={{display:'flex'}}>
<Typography sx={{marginLeft:'20px',fontWeight:'bold'}}>{dummydata.role}</Typography>
<Typography sx={{marginLeft:'50%'}}>{dummydata.duration}</Typography>
</Box>
<Box sx={{display:'flex'}}>
<Typography sx={{fontWeight:'bold',fontSize:'20px'}}>{dummydata.company}</Typography>
<span>_</span>
<Typography>{dummydata.location}</Typography>
</Box>

<li>{dummydata.res1}</li>
<li>{dummydata.res2}</li>
<li>{dummydata.res3}</li>
<Box sx={{display:'flex',marginLeft:'20px'}}>
<Typography sx={{marginLeft:'20px'}} >{dummydata.company2}</Typography>
<Typography sx={{marginLeft:'70%'}}>{dummydata.duration2}</Typography>
</Box>
<Typography sx={{fontWeight:'bold',fontSize:'20px',marginLeft:'20px'}}>{dummydata.role2}</Typography>
<Typography sx={{marginLeft:'20px'}}>{dummydata.location}</Typography>
<li>{dummydata.res1}</li>
<li>{dummydata.res2}</li>
<li>{dummydata.res3}</li>
<Typography sx={{fontWeight:'bold',fontSize:'25px', color:'maroon',marginLeft:'20px'}}>Education and Training</Typography>
<Divider/>
<Box sx={{display:'flex'}}>
<Typography sx={{fontWeight:'bold',fontSize:'15px',marginLeft:'50px'}} >{dummydata.course}</Typography>
<Typography sx={{marginLeft:'50%',}}>{dummydata.Acadamic}</Typography>
</Box>
<Box sx={{display:'flex'}}>
<Typography sx={{fontSize:'17px',marginLeft:'20px'}} >{dummydata.school}</Typography>
<span>__</span>
<Typography sx={{marginLeft:'2%',}}>{dummydata.location}</Typography>
</Box>

<Typography sx={{fontWeight:'bold',fontSize:'25px',color:'maroon',marginLeft:'20px'}}>languages</Typography>
<Divider/>
<Typography sx={{marginLeft:'2%',}}>{dummydata.lang1}</Typography>
<Divider sx={{width:'50%'}}></Divider>
<Typography sx={{marginLeft:'2%',}}>{dummydata.level1}</Typography>
<Typography sx={{marginLeft:'2%',}}>{dummydata.lang2}</Typography>
<BorderLinearProgress variant="determinate" value={100} />
<Typography sx={{marginLeft:'2%',}}>{dummydata.level2}</Typography>
<Typography sx={{marginLeft:'2%',}}>{dummydata.lang3}</Typography>
<BorderLinearProgress variant="determinate" value={66} />
<Typography sx={{marginLeft:'2%',}}>{dummydata.level3}</Typography>
   </Box>
  )
}
