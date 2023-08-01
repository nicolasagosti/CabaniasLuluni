import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Stack,
} from "@mui/material";
import "../estilos/card.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Contador({ numClics }) {
  return <div className="contador">{numClics}</div>;
}

export function BotonB({ esBotonDeClic, manejarClic }) {
  return (
    <Button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
      style={{color:'white'}}
    >
      <Box m={0}>
        <ArrowBackIosNewIcon />
      </Box>
      <Stack className="botonIzquierdo" />
    </Button>
  );
}

export function BotonF({ esBotonDeClic, manejarClic }) {
  return (
    <Button
      style={{color:'white'}}
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
 
      <Box m={0}>
        <ArrowForwardIosIcon />
      </Box>
    </Button>
  );
}

export const Card1 = () => {
  const [numClics, setNumClics] = useState(1);
  const manejarClic = () => {
    if (numClics < 9) {
      setNumClics(numClics + 1);
    }
  };

  const reiniciarClic = () => {
    if (numClics > 1) {
      setNumClics(numClics - 1);
    }
  };

  const fondoClassName = `fondoo${numClics}`;

  return (
    <Box display="flex" justifyContent="center" m={0}>
      <Box mt={6} mb={6} width="380px">
        <Stack mb={5}>
         
        </Stack>
        <Card elevation={8}  className={fondoClassName} sx={{ borderRadius: "20px" }}>
        <Typography textAlign='center' variant="h5" className="nombre" >Cabaña 1</Typography>
          <Stack className="alto"></Stack>
          <CardMedia alt="Pacman" alignItems="center" justifyContent="center" />
          <CardContent style={{padding:'0px'}}>
            <Typography
              color="white"
              className="epacioDeArriba"
              gutterBottom
              variant="h5"
              component="div"
            >
              <CardActions className='clic' sx={{ padding: 0 }}>
                <Box className='clic' flexGrow={1}>
                  <BotonB
                    texto="Reiniciar"
                    esBotonDeClic={false}
                    manejarClic={reiniciarClic}
                    className='clic'
                  />
                </Box>
                <Box  textAlign="center">
                  
                </Box>
                <Box className='clic2' flexGrow={1}>
                
                </Box>
                <BotonF
                    texto="Clic"
                    esBotonDeClic={true}
                    manejarClic={manejarClic}
                    className='clic2'
                    style={{color:'white'}}
                  />
              </CardActions>
            </Typography>
            <Stack ml={1}>
              <Typography className="precio"> <span style={{ marginLeft: '10px' }}>$8000</span> <span style={{ marginLeft: '160px' }}></span></Typography>
              <Typography className="personas">Hasta 4 Personas</Typography>
            </Stack>
          </CardContent>
          <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Button id="boton">Reservar</Button>
</Stack>
          
        </Card>
      </Box>
    </Box>
  );
};
{
  /*
    import Cabaña1Image from '../imagenes/Cabaña1.jpg';
    <Box mt={12} display="flex" justifyContent="center">
    <Box m={6} className='cabaña1'>
      <Card>
        <CardMedia
          component='img'
          style={{ objectFit: 'cover', height:'300px' }} // Ajusta el tamaño deseado aquí
          image={Cabaña1Image }
          alt='Cabaña 1'
        />
      </Card>
    </Box>
    <Box m={6} className='cabaña1'>
      <Card >
        <CardMedia
          component='img'
          style={{ objectFit: 'cover', height:'300px' }} // Ajusta el tamaño deseado aquí
          image={Cabaña1Image }
          alt='Cabaña 1'
        />
      </Card>
    </Box>
    <Box m={6} className='cabaña1'>
      <Card>
        <CardMedia
          component='img'
          style={{ objectFit: 'cover', height:'300px' }} // Ajusta el tamaño deseado aquí
          image={Cabaña1Image }
          alt='Cabaña 1'
        />
      </Card>
    </Box>
    </Box>
  */
}
