import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { snacks, snacksdata, sweets } from './data/snacks-data';
import MasalaPodis from './MasalaPodis';
import Snacks from './Snacks';
import Sweets from './Sweets';
export default function CategoriesTab() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={{backgroundColor:'orangered',color:'white', margin:'10'}} label="Snacks" value="1" />
            <Tab  sx={{backgroundColor:'orangered',color:'white'}}label="Sweets" value="2" />
            <Tab sx={{backgroundColor:'orangered',color:'white'}} label="Pickles" value="3" />
            <Tab sx={{backgroundColor:'orangered',color:'white'}} label="masalas&podis" value="4" />
            <Tab sx={{backgroundColor:'orangered',color:'white'}} label="DryfruitSweet" value="5" />
            <Tab sx={{backgroundColor:'orangered',color:'white'}} label="Specials" value="6" />
            <Tab sx={{backgroundColor:'orangered',color:'white'}} label="All" value="7" />
          </TabList>
        </Box>
        <TabPanel value="1"><Snacks/></TabPanel>
        <TabPanel value="2"><Sweets/> </TabPanel>
        <TabPanel value="3">Pickles</TabPanel>
        <TabPanel value="4"><MasalaPodis/></TabPanel>
        <TabPanel value="5"><Snacks/></TabPanel>
        <TabPanel value="6">Specials</TabPanel>
        <TabPanel value="7">All</TabPanel>
      </TabContext>
    </Box>
  );
}