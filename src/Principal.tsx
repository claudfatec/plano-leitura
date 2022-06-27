// @flow 
import { Grid } from '@mui/material';
import * as React from 'react';
import Titulo from './Titulo';
type Props = {
    
};
export function Principal(props: Props) {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}><Titulo /></Grid>
                <Grid item xs={12} md= {9}>Texto</Grid>
                <Grid item xs={12} md={3}>Pezinho</Grid>
                
            </Grid>
        </div>
    );
}