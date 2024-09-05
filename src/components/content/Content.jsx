import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import "./content.scss";

const Content = () => {
  return (
    <div className="contentWrapper">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid className="grid carousel" size={12}>
            CAROUSEL
          </Grid>
          <Grid className="grid" size={12}>
            Section1
          </Grid>
          <Grid className="grid text" size={12}>
            Section2
          </Grid>
          <Grid className="grid" size={12}>
            Section3
          </Grid>
          <Grid className="grid text" size={12}>
            Section4
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Content;
