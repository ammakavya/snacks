import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Box,
    Typography,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,
    Button
  } from "@mui/material";
  import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
  function Descriptioncard(props) {
    return (
      <>
      <Grid container>
        <Grid md={7.5}xs={12} marginLeft="60px" >
        <Card>
          <CardMedia 
          component="img"
          image=  {props.image}
         height="250px"
         widt
        
          />
      
      </Card>
      </Grid>
      <Grid md={3.5} xs={12}>
        <Box sx={{width:"600px"}}>
              <CardContent>
            <Typography  sx={{fontWeight:"bold",color:"green",letterSpacing:"0.2px",fontSize:"20px"}}>{props.title}</Typography>
            <Typography sx={{fontSize:"12px"}}>{props.description}</Typography>
            <Typography  sx={{fontSize:"12px"}}>{props.shelflife}</Typography>
            <RadioGroup  defaultValue="weight1" >
            <FormControlLabel sx={{fontSize:"20px"}} value={props.weight1 }  control={<Radio sx={{
      '& .MuiSvgIcon-root': {
        fontSize: 10,
      },
    }}/>} label={props.weight1} />
            <FormControlLabel value={props.weight2} control={<Radio sx={{
      '& .MuiSvgIcon-root': {
        fontSize: 10,
      },
    }}/>} label={props.weight2} />
            <FormControlLabel  value={props.weight3}control={<Radio sx={{
      '& .MuiSvgIcon-root': {
        fontSize: 10,
      },
    }}/>} label={props.weight3} />
            </RadioGroup>
            <Typography><CurrencyRupeeIcon/>{props.discountedprice}</Typography>
            <Typography>{props.price}</Typography>
            <Button sx={{backgroundColor:'orange', color:'whitesmoke' ,}}>AddtoCart</Button>
          </CardContent>
        
          </Box>
          </Grid>
        </Grid>
    
      </>
    );
  }
  export default Descriptioncard;