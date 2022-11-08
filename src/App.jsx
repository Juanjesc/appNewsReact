import { useState } from 'react'
import { Alert, AlertTitle, Button, Collapse } from '@mui/material'
import { Typography, Container, Grid } from '@mui/material';
import { fontFamily, fontWeight } from '@mui/system';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './context/NoticiasProvider';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component="h1" variant='h3' fontFamily={'montserrat'}>
            Buscador de noticias
          </Typography>
        </header>
        <Grid 
          container 
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} lg={4} xs={12}>

            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  )
}

export default App
