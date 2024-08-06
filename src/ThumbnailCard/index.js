import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import SnackCard from '../components/SnackCard';
import { Outlet } from 'react-router-dom';
 function ThumbnailCard(props) {
    const {data,title} = props;
    return (
            <Box sx={{ paddingBottom:"3px", borderRadius:"10px"}}>
            <Typography variant="h5">
                {title}
            </Typography>
            <Grid container >
                {
                    data.map((item) => {
                        return (
                            <Grid md={3} padding={1}>
                                <SnackCard image={item.image}
                                name={item.name}
                                price={item.price}
                                weight1={item.weight1}
                                weight2={item.weight2}
                                weight3={item.weight3}
                                    title={item.title} isTitleVisible={true} />
                            </Grid>)
                    })
                }

            </Grid>
            <Outlet/>
            </Box>

        
    )
}
export default ThumbnailCard;