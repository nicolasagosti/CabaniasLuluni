import React from "react";
import { Stack, Typography,Button } from "@mui/material";
import  "../estilos/contactanos.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Contactanos = () => {
  return (
    <Stack
      style={{
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      mt={30}
    >
      <Typography className="contactanos" variant="h3">Contactanos!</Typography>
      <Stack
      style={{
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
      direction='row'
      mt={10}
    >
      <Button id="logo"><WhatsAppIcon/></Button>
      <Button id="logo"><InstagramIcon/></Button>
      <Button id="logo"><EmailIcon/></Button>
      </Stack>
    </Stack>
  );
};

