import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface TituloProps {
    children?: React.ReactNode;
  }
  
  export default function Title
  (props: TituloProps) {
    return (
        <Button color="inherit">
                  <Typography component="h2" variant="h6"  color="primary: light" gutterBottom>
        Titulo
      </Typography>

        </Button>
    );
  }
  