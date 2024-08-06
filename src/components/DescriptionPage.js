import { Grid } from "@mui/material";

import { descriptiondata } from "./data/descriptiondata";
import Descriptioncard from "./DescriptionCard";

function DescriptionPage() {
  return (
    <>
      <Grid container>
        {descriptiondata.map((item) => {
          return (
            <Grid  md={7} padding={"30px"}>
              <Descriptioncard
                image={item.image}
                title={item.title}
                description={item.description}
                shelflife={item.shelflife}
               weight1={item.weight1} 
                weight2={item.weight2}
                weight3={item.weight3}
                discountedprice={item.discountedprice}
                price={item.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
export default DescriptionPage;