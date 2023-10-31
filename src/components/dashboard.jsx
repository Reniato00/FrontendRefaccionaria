import * as React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import ResponsiveAppBar from './navbar';
import DataTable from './tableGrid';
import BasicList from './filterSidebar';

import { rows, columns } from '../models/product';

const defaultTheme = createTheme();

export default function Main() {
    return(
        <ThemeProvider theme={defaultTheme}>
            
                <CssBaseline />
                    <Grid 
                        container
                        direction="column"
                        justifyContent="space-around"
                        alignItems="stretch"
                    >
                        <ResponsiveAppBar/>
                        <Container maxWidth="">
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                                
                                <Box gridColumn={"span 3"} >
                                    <BasicList/>
                                </Box>
                                <Box gridColumn="span 9" >
                                    
                                    <DataTable rows={rows} columns={columns}/>
                                    
                                </Box>
                            </Box>
                        </Container>
                        
                            
                        
                            
                        
                        
                        

                    </Grid>
            
        </ThemeProvider>
    )
}