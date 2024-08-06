import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { dummydata } from './data/dummy-data'

export const ResumeK4 = () => {
  return (
    <Box sx={{marginTop:'20px', marginLeft:'15%',width:'43%',height:'100%', borderRadius:'20px',border:'5px solid skyBlue'}}>
  <Typography sx={{fontWeight:'bold',fontSize:'40px', marginLeft:'55%'}}>{dummydata.name}</Typography>
  <Divider sx={{ backgroundColor:'black' ,margin:'2px'}}/>
  <Divider sx={{backgroundColor:'black'}}/>
  <Box sx={{display:'flex',marginLeft:'20%'}}>
<Typography sx={{marginRight:'2px'}}> {dummydata.address}</Typography>
<span>_</span>
<Typography>{dummydata.mobilenumber}</Typography>
<span>_</span>
<Typography>{dummydata.email}</Typography>
  </Box>
  <Typography sx={{fontWeight:'bold' , marginLeft:'20px',fontSize:'25px'}}>Summary</Typography>
  <Typography sx={{marginLeft:'20px'}}>{dummydata.summary}</Typography>
  <Typography sx={{fontWeight:'bold', marginLeft:'20px',fontSize:'25px'}}>Skills</Typography>
<Grid container>
    <Grid md={6} sx={{paddingLeft:'2px'}} >
<li>{dummydata.skills1}</li>
<li>{dummydata.skills2}</li>
<li>{dummydata.skills3}</li>
<li>{dummydata.skills4}</li>
    </Grid>
    <Grid md={6} >
<li>{dummydata.skills5}</li>
<li>{dummydata.skills6}</li>
<li>{dummydata.skills7}</li>
<li>{dummydata.skills8}</li>
    </Grid>
</Grid>
<Typography sx={{fontWeight:'bold' ,fontSize:'25px',marginLeft:'20px'}}>Experience</Typography>
<Box sx={{display:'flex'}}>
<Typography sx={{marginLeft:'20px'}}>{dummydata.company}</Typography>
<Typography sx={{marginLeft:'70%'}}>{dummydata.duration}</Typography>
</Box>
<Typography sx={{fontWeight:'bold',fontSize:'25px',marginLeft:'20px'}}>{dummydata.role}</Typography>
<Typography sx={{marginLeft:'20px'}}>{dummydata.location}</Typography>
<li>{dummydata.res1}</li>
<li>{dummydata.res2}</li>
<li>{dummydata.res3}</li>
<Box sx={{display:'flex',marginLeft:'20px'}}>
<Typography sx={{marginLeft:'20px'}} >{dummydata.company2}</Typography>
<Typography sx={{marginLeft:'70%'}}>{dummydata.duration2}</Typography>
</Box>
<Typography sx={{fontWeight:'bold',fontSize:'25px',marginLeft:'20px'}}>{dummydata.role2}</Typography>
<Typography sx={{marginLeft:'20px'}}>{dummydata.location}</Typography>
<li>{dummydata.res1}</li>
<li>{dummydata.res2}</li>
<li>{dummydata.res3}</li>
<Typography sx={{fontWeight:'bold',fontSize:'25px',marginLeft:'20px'}}>Education and Training</Typography>
<Box sx={{display:'flex'}}>
<Typography sx={{fontWeight:'bold',fontSize:'17px',marginLeft:'20px'}} >{dummydata.school}</Typography>
<Typography sx={{marginLeft:'50%',}}>{dummydata.Acadamic}</Typography>
</Box>

<Typography sx={{fontWeight:'bold',fontSize:'17px',marginLeft:'20px'}} >{dummydata.course}</Typography>
<Typography sx={{marginLeft:'2%',}}>{dummydata.location}</Typography>
<Typography sx={{fontWeight:'bold',fontSize:'25px',marginLeft:'20px'}}>languages</Typography>
<Typography sx={{marginLeft:'2%',}}>{dummydata.lang1}</Typography>
<Divider sx={{width:'50%'}}></Divider>
<Typography sx={{marginLeft:'2%',}}>{dummydata.level1}</Typography>
<Typography sx={{marginLeft:'2%',}}>{dummydata.lang2}</Typography>
<Divider sx={{width:'50%'}}></Divider>
<Typography sx={{marginLeft:'2%',}}>{dummydata.level2}</Typography>
<Typography sx={{marginLeft:'2%',}}>{dummydata.lang3}</Typography>
<Divider sx={{width:'50%'}}></Divider>
<Typography sx={{marginLeft:'2%',}}>{dummydata.level3}</Typography>
   </Box>
  )
}
