import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails,AccordionSummary, Grid, Typography,FormControl,Button } from '@mui/material';
 function SnackFilter() {
  const form = useForm();
  console.log("inside forms");
  const { register, control, handleSubmit } = form;
  const onSubmit = (data) => {
    console.log("form submitted", data)
  }
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormControl >
    <FormGroup>
    <Grid container>
    <Grid md={2.5}>
    <FormGroup>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         work mode
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
          {...register("work_Mode")} control={<Checkbox />} label="work from home" />
      <FormControlLabel {...register("work_Mode")}  control={<Checkbox />} label="remote" />
      <FormControlLabel {...register("work_Mode")}  control={<Checkbox />} label="hybrid" /> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         experience
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel {...register("experience")} control={<Checkbox />} label="work from home" />
      <FormControlLabel  {...register("experience")} control={<Checkbox />} label="remote" />
      <FormControlLabel  {...register("experience")} control={<Checkbox />} label="hybrid" /> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         department
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel  {...register("department")}control={<Checkbox />} label="IT& security" />
      <FormControlLabel  {...register("department")} control={<Checkbox />} label="data science " />
      <FormControlLabel  {...register("department")} control={<Checkbox />} label="consulting" /> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         location
        </AccordionSummary>
        <AccordionDetails>
      <FormControlLabel  {...register("location")}control={<Checkbox />} label="delhi" />
      <FormControlLabel  {...register("location")} control={<Checkbox />} label="banglore" />
      <FormControlLabel  {...register("location")} control={<Checkbox />} label="hyderabad" /> 
      <FormControlLabel  {...register("location")}control={<Checkbox />} label="chennai" />
      <FormControlLabel  {...register("location")} control={<Checkbox />} label="vizag" />
      <FormControlLabel {...register("location")} control={<Checkbox />} label="kochi" /> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         salary
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel {...register("salary")}control={<Checkbox />} label="0-3lakh" />
      <FormControlLabel {...register("salary")} control={<Checkbox />} label="4-6lakhs" />
      <FormControlLabel {...register("salary")} control={<Checkbox />} label="6-8lakhs" /> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         company type
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel {...register("company_type")} control={<Checkbox />} label="foreign" />
      <FormControlLabel {...register("company_type")} control={<Checkbox />} label="startup" />
      <FormControlLabel {...register("company_type")} control={<Checkbox />} label="corporate" /> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
           aria-controls="panel1-content"
          id="panel1-header"
        >
         role category
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel {...register("role_category")} control={<Checkbox />} label="software developer" />
      <FormControlLabel {...register("role_category")} control={<Checkbox />} label="quality assurance" />
      <FormControlLabel {...register("role_category")} control={<Checkbox />} label="testing" /> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         education
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel {...register("education")}  control={<Checkbox />} label="undergraduate" />
      <FormControlLabel  
    {...register("education")} 
      control={<Checkbox />} label=" degree" />
      <FormControlLabel {...register("education")}  control={<Checkbox />} label=" postGraduate" /> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         industry
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel {...register("industry")}  control={<Checkbox />} label="product based" />
      <FormControlLabel {...register("industry")}  control={<Checkbox />} label="service based" />
      <FormControlLabel {...register("industry")}  control={<Checkbox />} label=" BPO/call center" /> 
        </AccordionDetails>
      </Accordion>
     </FormGroup>
     </Grid>
      </Grid>
      </FormGroup>
      <Button type='applyFilter' variant='contained' onSubmit={handleSubmit(onSubmit)} sx={{ backgroundColor: 'pink' }}>ApplyFilter</Button>
      </FormControl>
      <DevTool control={control} />
      </form>
    
      

  );
}
export default SnackFilter;