// @flow 
import { Loading } from "./Loading";
import { Next } from "./Next";
import { Previous } from "./Previous";
import { Grid } from '@mui/material';
type Props = {
    
};
export const Pezinho = (props: Props) => {
    return (
            <Grid container>
                <Grid item xs><Previous /></Grid>
                <Grid item xs={6}><Loading /></Grid>
                <Grid item xs><Next /></Grid>
            </Grid>
    );
};