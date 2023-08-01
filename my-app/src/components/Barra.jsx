import { Stack,Typography } from "@mui/material";
import "../estilos/barra.css"
import logoImage  from "../elias/logo.png";




export const Barra = () => {
  return (
    <Stack direction='row' className="barra">
     <Stack ml={20} direction='row' alignItems='center' className="barra">
      <img style={{ width: '90px', height: '90px', margin: 0, padding: 0 }} src={logoImage} alt="Logo de las cabañas" />
      <Stack direction='column' style={{ marginLeft: '0px', padding: 0 }}>
        <Typography variant='h4' style={{ fontFamily: 'tu_tipografia_bonita', margin: 0, padding:0 }} color='#61c262'>Cabañas</Typography>
        <Typography variant='h5' style={{ fontFamily: 'tu_tipografia_bonita', margin: 0 ,  padding:0}}>Luluni</Typography>
      </Stack>
    </Stack>
      <Stack ml={3} mt={7}>
      <Typography variant='h4' style={{ fontFamily: 'tu_tipografia_bonita', margin: 0 }}>Contacto</Typography>
      </Stack>
      <Stack mt={7}>

      </Stack>
      <Stack mt={7}>

      </Stack>
      <Stack mt={7}>
   
      </Stack>
      <Stack mt={7}>
   
   </Stack>
   <Stack mt={7}>
   
   </Stack>
 
    
    </Stack>
  );
};
