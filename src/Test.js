import React from 'react'
import Button from "@mui/material/Button";
import "./App.css";
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import { AcUnit } from "@mui/icons-material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
// import {Accessibility} from '@mui/icons-material';

const Test = () => {
  return (
    <div>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Box sx={{ 
          width: 300, 
          height: 300,
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'secondary.main',
            opacity: [.9, .8, .7]
          }
        }}/>
        <Box sx={{ 
          width: 300, 
          height: 300,
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'secondary.main',
            opacity: [.9, .8, .7]
          }
        }}/>
        <Box sx={{ 
          width: 300, 
          height: 300,
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'secondary.main',
            opacity: [.9, .8, .7]
          }
        }}/>
      </Stack>
      
      <br/>

      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Box 
          flex={1} p={2}
          sx={{ 
            width: 300, 
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [.9, .8, .7]
            }
          }}
        />
        <Box 
          flex={2} p={2}
          sx={{ 
            width: 300, 
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [.9, .8, .7]
            }
          }}
        />
        <Box 
          flex={3} p={2}
          sx={{ 
            width: 300, 
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [.9, .8, .7]
            }
          }}
        />
      </Stack>

      <br/>

      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Box 
          flex={1} p={2}
          sx={{ 
            width: 300, 
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [.9, .8, .7]
            }
          }}
        />
        <Box 
          flex={2} p={2}
          sx={{ 
            width: 300, 
            height: 300,
            backgroundColor: 'primary.main',
            display: {xs: 'none', sm: 'block'},
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [.9, .8, .7]
            }
          }}
        />
        <Box 
          flex={3} p={2}
          sx={{ 
            width: 300, 
            height: 300,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [.9, .8, .7]
            }
          }}
        />
      </Stack>

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

      <Button color="secondary">
        Theme Button
      </Button>

      <CustomThemeButton>Custom Theme Button</CustomThemeButton>

      <Root>
        <Typography>down(md): red</Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Root>
    </div>
  )
}


const Root = styled("div")(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    backgroundColor: red[500]
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: blue[500]
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500]
  }
}))

const CustomThemeButton = styled(Button) (({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  margin: 10,
  "&:hover": {
    backgroundColor: "black",
  },
  "&:disabled": {
    backgroundColor: "white",
    color: "black",
  },
}))

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


export default Test

