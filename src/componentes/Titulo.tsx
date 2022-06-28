import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface TituloProps {
    children?: React.ReactNode;
  }
  
  export default function Title
  (props: TituloProps) {
    return (
      <Grid  container>
        <Grid item xs={12} md= {4}color="inherit">
          <Typography component="h2" variant="h6"  color="primary: light" gutterBottom>
           Bible
          </Typography>
        </Grid>

        <Grid item xs={12} md= {4}color="inherit">
        <Typography component="h2" variant="h6"  color="primary: dark" gutterBottom>
          Titulo
        </Typography>
       </Grid>
       <Grid item xs={12} md= {4}color="inherit">
          <Typography component="h2" variant="h6"  color="primary: light" gutterBottom>
            Status
          </Typography>
        </Grid>
      </Grid>
      
    );
  }
  