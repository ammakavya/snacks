import { Box, Typography } from '@mui/material'
import React from 'react'
import { dummydata } from './data/dummy-data'

export const Resumek9 = () => {
  return (
    <Box sx={{marginTop:'20px', marginRight:'5%',width:'55%',height:'100%',border:'5px solid grey',borderRadius:'25px'}}>
        <Box sx={{backgroundColor:'brown',padding:'10px',borderRadius:'25px',display:'flex'}}>
        <Typography sx={{fontWeight:'bold',fontSize:'35px',color:'whitesmoke'}}>{dummydata.name}</Typography>
        <Typography sx={{marginLeft:'40%'}}> {dummydata.email}</Typography>
        <Typography sx={{marginLeft:'40%'}}> {dummydata.address}</Typography>
        </Box>

   </Box>
  )
}
