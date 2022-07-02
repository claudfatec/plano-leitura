import { Grid, Link } from "@mui/material";
import Typography from "@mui/material/Typography";

interface TituloProps {
    children?: React.ReactNode;
  }
  
  export default function Title
  (props: TituloProps) {
    return (
      <Grid  container>
        <Grid item xs={12} md= {4}color="primary">
          <Typography component="h2" variant="h6"  color="inherit" gutterBottom>
           Bible
          </Typography>
        </Grid>

        <Grid item xs={12} md= {4}color="primary">
          <Typography component="h2" variant="h6"  color="inherit" gutterBottom>
            Titulo
          </Typography>
       </Grid>
       <Grid item xs={12} md= {4}color="primary">
          <Typography component="h2" variant="h6"  color="inherit" gutterBottom>
            <Link href="http://claudfatec.westeurope.cloudapp.azure.com/index.php">Home</Link>
          </Typography>
        </Grid>
      </Grid>
      
    );
  }
  