import * as React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';



import ResponsiveAppBar from './navbar';
import FilterMarcas from './FiltersComponents/filterMarcas';
import FilterModelos from './FiltersComponents/filterModelos';


const defaultTheme = createTheme();




export default function FilterMain() {
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
                                
                                <Box mt={2} gridColumn={"span 12"} >
                                    
                                <FilterMarcas/>
                                <Divider />
                                <FilterModelos/>

                                    
                                    
                                </Box>
                            </Box>
                        </Container>
                        
                            
                        
                            
                        
                        
                        

                    </Grid>
            
        </ThemeProvider>
    )
}

