import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { CloudCircleSharp, Code, TerminalRounded } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#38b4fc',
      darker: '#053e85',
    },
    neutral: {
      main: '#28fc96',
      contrastText: '#212121',
    },
    secondary: {
      main: "#38fce9",
    }
  },
});

const langs = ["Golang", "Typescript", "Python", "Java", "C++", "C", "Javascript"]
const frame = ["Express", "React", "NextJS", "Spring Boot", "Flask", "Gin Gonic"]
const cloud = ["Docker", "Heroku", "Terraform", "AWS/Azure", "Linux Shell", "Git", "Jira"]

export default function ColorChips() {
  return (
    <div className="z-0 max-w-6xl mx-auto md:pl-16">
    <ThemeProvider theme={theme}>
    <div className="items-center mt-10 text-center"> 
      <Stack direction="row" spacing={1}>
        {langs.map(lang => (<Chip icon={<Code/>} label={lang} color="primary" variant="filled" />))
        }
      </Stack>
    </div>
    <div className="mt-10">
      <Stack direction="row" spacing={1}>
        {frame.map(fms => (<Chip icon={<TerminalRounded />} color="secondary" label={fms} variant="filled" />))
        }
      </Stack>
    </div>
    <div className="mt-10">
      <Stack direction="row" spacing={1}>
        {cloud.map(clouds => (<Chip icon={<CloudCircleSharp />} color="neutral" label={clouds} variant="filled" />))
        }
      </Stack>
    </div>
    
    </ThemeProvider>
    </div>
  );
}