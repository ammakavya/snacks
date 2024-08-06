import React from "react";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CardActionArea } from "@mui/material";
import { NavLink, Outlet } from 'react-router-dom';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const SnackCard = (props) => {
  const { name, image, weight1, weight2, weight3, price } = props;
  const [quantity, setQuantity] = useState(0);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <Box>
        
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              sx={{ padding: "10" }}
              component="img"
              height="180"
              image={image}
              alt="green iguana"
            />
            <Box sx={{ backgroundColor: "orangered", color: "white",textAlign:"center" }}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </Box>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="250gm"
              name="radio-buttons-group"sx={{marginLeft:"30px"}}
            >
              <FormControlLabel
                sx={{ color: "green" }}
                value="250gm"
                control={<Radio  sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 15,
                  },
                }} />}
                label={weight1}
              />
              <FormControlLabel
                sx={{  color: "green" }}
                value="500gm"
                control={<Radio  sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 15,
                  },
                }}  />}
                label={weight2}
              />
              <FormControlLabel
                sx={{ color: "green" }}
                value="1kg"
                control={<Radio  sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 15,
                  },
                }}  />}
                label={weight3}
              />
            </RadioGroup>
            <Typography variant="h6">Qty</Typography>
            <Box sx={{ display: "flex",padding:"7px" }}>
              <Button   sx={{ backgroundColor: "orangered", color: "white", ":hover":{
    backgroundColor:"orangered"
} }}onClick={handleDecrement}>-</Button>
              <Typography>{quantity}</Typography>
              <Button  sx={{ backgroundColor: "orangered", color: "white", ":hover":{
    backgroundColor:"orangered"
} }}onClick={handleIncrement}>+</Button>
           </Box>
           
           <Button sx={{backgroundColor: "orangered", color: "white",
           width:"300px",
           marginLeft:"5%",
            ":hover":{
    backgroundColor:"orangered",
   
} }}>
              Add <ShoppingCartIcon />
            </Button>
           
            
           
            <CardContent>
              <Typography variant="h6">{price}</Typography>
              <Button
                sx={{
                  borderRadius: "15",
                  marginRight: "50",
                  backgroundColor: "black",
                  color: "white",":hover":{
                    backgroundColor:"black"
                } 
                }}
              >
                view more
              </Button>
            </CardContent>
          </CardActionArea>
        </Card> 
      </Box>
     
    </div>
  );
};

export default SnackCard;
