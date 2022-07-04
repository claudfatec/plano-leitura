// @flow 
import { Grid } from '@mui/material';
import { Pezinho } from './Pezinho';
import { Texto } from './Texto';
import Titulo from './Titulo';
type Props = {
    
};
export function Principal(props: Props) {
    return (
        <div>
            <Grid container flexDirection={'column'}>
                <Grid item xs={12}><Titulo /></Grid>
                <Grid item xs={12}><Texto /></Grid>
                <Grid item xs={12}><Pezinho /></Grid>
            </Grid>
        </div>
    );
}