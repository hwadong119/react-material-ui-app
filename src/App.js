import Button from "@mui/material/Button";
import "./App.css";
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import { AcUnit } from "@mui/icons-material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
// import {Accessibility} from '@mui/icons-material';

function App() {
  return (
    <div>
      <Button>Hello World</Button>
      <Button variant="text">Hello World</Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="outlined">Hello World</Button>
      <Button size="large" variant="outlined">
        Hello World
      </Button>
      <Button fullWidth variant="outlined">
        Hello World
      </Button>
      <Button variant="outlined" startIcon={<AcUnit />}>
        Hello World
      </Button>
      <Button variant="outlined" endIcon={<AccessibilityIcon />}>
        Hello World
      </Button>
      <Button
        sx={{
          backgroundColor: "gray",
          color: "white",
          margin: 10,
          "&:hover": {
            backgroundColor: "black",
          },
          "&:disabled": {
            backgroundColor: "white",
            color: "black",
          },
        }}
      >
        Hello World
      </Button>
      <CustomButton>Custom Button</CustomButton>

      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>

    </div>
  );
}

const CustomButton = styled(Button)({
  backgroundColor: "gray",
  color: "white",
  margin: 10,
  "&:hover": {
    backgroundColor: "black",
  },
  "&:disabled": {
    backgroundColor: "white",
    color: "black",
  },
});

export default App;
