import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Stack,
  Grid
} from "@mui/material";
import "../estilos/styleCabaña.css";

export const Cabaña = () => {
  return (
<Box  m={5} ml={5} width='300px'>
    <Card width='300px' elevation={6} className="fondo">
      <CardContent style={{padding:'0px'}} width='300px'>
       <Stack textAlign='center' direction='row' className="uno">
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
       </Stack>
       <Stack textAlign='center' direction='row' className="dos">
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
       </Stack>
       <Stack textAlign='center' direction='row' className="tres">
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
       </Stack>
       <Stack textAlign='center' direction='row' className="cuatro">
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
        <Stack>Dale</Stack>
       </Stack>
      </CardContent>
    </Card>

  </Box>
  );
};
