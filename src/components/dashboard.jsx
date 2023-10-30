import * as React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import ResponsiveAppBar from './navbar';
import EnhancedTable from './tableGrid';
import BasicList from './filterSidebar';

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
                        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                            <Box gridColumn={"span 3"} >
                                <BasicList/>
                            </Box>
                            <Box gridColumn="span 9" >
                                <EnhancedTable/>
                                
                            </Box>
                        </Box>
                            
                        
                            
                        
                        
                        

                    </Grid>
            
        </ThemeProvider>
    )
}