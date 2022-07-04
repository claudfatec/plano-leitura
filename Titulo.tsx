import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

interface TituloProps {
    children?: React.ReactNode;
  }
  
  export default function Title
  (props: TituloProps) {
    return (
      <Grid  container display={'flex'} color='#A1C7E0' bgcolor='#3f50b5'>
        <Grid item xs={12} md= {4}>
          <Typography component="h2" variant="h6"  color="inherit" gutterBottom>
           Bible
          </Typography>
        </Grid>

        <Grid item xs={'auto'} md= {4}color="primary">
          <Typography component="h2" variant="h3"  color="inherit" gutterBottom>
            Titulo
          </Typography>
       </Grid>
       <Grid item xs={12} md= {4}color="primary">
          <Typography component="h2" variant="h6"  color="inherit" gutterBottom>
            Home
          </Typography>
        </Grid>
      </Grid>
      
    );
  }
  