import React from 'react'
import { Typography,Stack  } from "@mui/material";

export const TextoPrincipal = () => {
  return (
<Stack m='auto' mt={4} width='1000px' alignItems='center' justifyContent='center'>
    <Typography color='white' variant='h1' style={{ textAlign: 'center' }}>Alquilá en Mercedes</Typography>
    <Typography color='white' variant='h5' style={{ textAlign: 'center' }}>En Cabañas Luluni Tenemos todo lo que necesitas para disfrutar en familia o con tus amigos. Nuestras instalaciones cuentan con piscina, horno de barro, parrilla, aire acondicinado, cancha de futbol y mucho más.</Typography>
</Stack>
  )
}
