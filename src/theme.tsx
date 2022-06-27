import { createTheme, PaletteOptions } from "@mui/material/styles";
const palette: PaletteOptions = {
    primary: {
      main: "#3f50b5",
      dark: '#002884',
      contrastText: "#1565c0",
    },
    background: {
      default: "#e8eaf6",
    },
  };
  
  const theme = createTheme({
    palette,
  });
  
  export default theme;