import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { dummydata } from './data/dummy-data'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export const ResumeK8 = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? 'orange' : '#308fe8',
        },
      }));
      
  return (
   <Box sx={{marginTop:'20px', marginRight:'5%',width:'55%',height:'100%',border:'5px solid grey',borderRadius:'25px'}}>
    <Typography sx={{fontSize:'35px',fontWeight:'bold',textAlign:'center',margin:'5px'}}>{dummydata.name}</Typography>
    <Grid container> 
<Grid md={8.7}>
<Typography sx={{fontSize:'20px',fontWeight:'bold',margin:'7px'}}>SUMMARY</Typography>
<Typography sx={{margin:'10px'}}>{dummydata.summary}</Typography>
</Grid>
<Grid md={3} sx={{marginLeft:'5px'}}>
<Box sx={{backgroundColor:"darkSalmon" ,margin:'10px'}}>
    <Typography>CONTACT</Typography>
    <Typography>
        <PhoneIcon sx={{marginBottom:'-10px' ,padding:'2px'}}/>{dummydata.mobilenumber}</Typography>
    <Typography>
        <EmailIcon  sx={{marginBottom:'-10px',padding:'2px'}}/>{dummydata.email}</Typography>
    <Typography>
       <LocationOnIcon  sx={{marginBottom:'-10px',padding:'3px'}}/> {dummydata.location}</Typography>
</Box>

</Grid>
<Grid md={8.5}>
<Typography sx={{fontSize:'20px',fontWeight:'bold',margin:'7px'}}>EXPERIENCE</Typography>
<Typography sx={{fontWeight:'bold'}}> {dummydata.role}</Typography>
<Box sx={{display:'flex',marginBottom:'10px'}}>
<Typography >{dummydata.company1}</Typography>
<span>|</span>
<Typography >{dummydata.location}</Typography>
<span>|</span>
<Typography >{dummydata.duration}</Typography>
</Box>
<li style={{margin:'3px'}}>{dummydata.res1}</li>

<li style={{margin:'3px'}}>{dummydata.res2}</li>

<li style={{margin:'3px'}}>{dummydata.res3}</li>

<Typography sx={{fontWeight:'bold',marginTop:'10px'}}> {dummydata.role2}</Typography>
<Box sx={{display:'flex' ,marginBottom:'10px'}}>
<Typography >{dummydata.company2}</Typography>
<span>|</span>
<Typography >{dummydata.location}</Typography>
<span>|</span>
<Typography>{dummydata.duration2}</Typography>
</Box>
<li style={{margin:'3px'}}>{dummydata.res1}</li>
<li style={{margin:'3px'}}>{dummydata.res2}</li>
<li style={{margin:'3px'}}>{dummydata.res3}</li>
</Grid>
<Grid md={3} sx={{marginLeft:'5px'}}>
<Box sx={{margin:'10px'}}>
    <Typography >SKILLS</Typography>
    <li style={{margin:'3px'}}> {dummydata.skills1} </li> 
    <li style={{margin:'3px'}}>  {dummydata.skills2}</li>
     <li style={{margin:'3px'}}> {dummydata.skills3}</li>
      <li style={{margin:'3px'}}> {dummydata.skills4}</li>
      <li style={{margin:'3px'}}> {dummydata.skills5}</li>
      <li style={{margin:'3px'}}>{dummydata.skills6}</li>
      <li style={{margin:'3px'}}>{dummydata.skills7}</li>
      <li style={{margin:'3px'}}> {dummydata.skills8}</li>
</Box>
<Typography sx={{fontWeight:'bold',fontSize:'20px',marginBottom:'10px'}}> EDUCATION AND TRAINING</Typography>
<Typography sx={{fontWeight:'bold'}}> {dummydata.course}</Typography>
<Typography>{dummydata.school}</Typography>
<Typography>{dummydata.location}</Typography>
<Typography>{dummydata.Acadamic}</Typography>
<Typography sx={{fontWeight:'bold',fontSize:'20px',marginTop:'20px'}}> languages</Typography>
<Box sx={{display:'flex'}}> 
<Typography sx={{fontWeight:'bold' ,padding:'3px'}}>{dummydata.lang1}</Typography>
<Typography >{dummydata.level3}</Typography>
</Box>
<Typography sx={{fontWeight:'bold',margin:'3px' }}>{dummydata.lang2}</Typography>
<BorderLinearProgress  variant="determinate" value={100} />
<Typography>{dummydata.level1}</Typography>
<Typography sx={{fontWeight:'bold' }}>{dummydata.lang3}</Typography>
<BorderLinearProgress variant="determinate" value={66} />
<Typography>{dummydata.level2}</Typography>

    </Grid>
   
   </Grid>
   </Box>
  )
}
