// @flow 
import { Loading } from "./Loading";
import { Next } from "./Next";
import { Previous } from "./Previous";
import { Grid } from '@mui/material';
type Props = {
    
};
export const Pezinho = (props: Props) => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={4}><Previous /></Grid>
                <Grid item xs={12} md={4}><Loading /></Grid>
                <Grid item xs={12} md={4}><Next /></Grid>
            </Grid>
        </div>
    );
};