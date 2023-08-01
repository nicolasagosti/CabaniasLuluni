import "./App.css";
import { Stack,Typography } from "@mui/material";
import { Barra } from "./components/Barra";
import { TextoPrincipal } from "./components/TextoPrincipal";
import { Cabaña } from "./components/Cabaña";
import { Card1 } from "./components/Card1";
import { Card2 } from "./components/Card2";
import { Card3 } from "./components/Card3";
import { Contactanos } from "./components/Contactanos";
function App() {
  return (
    <Stack>
      <Stack className="App">
        <Barra />
        <TextoPrincipal />
      </Stack>
      <Stack className="Center">
      <Typography  mt={10}ml={7} variant="h4" color='black'>Reservá Tu Cabaña</Typography>
      <Stack  direction='row'>
        <Card1/>
        <Card2/>
        <Card3/>
      </Stack>
      </Stack>
      <Stack className="Footer">
      <Contactanos/>
      </Stack>
    </Stack>
  );
}

export default App;