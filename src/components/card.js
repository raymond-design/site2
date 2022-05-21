import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { CloudCircleOutlined, CloudSharp, Code } from '@mui/icons-material';
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
      contrastText: '#fff',
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
    <ThemeProvider theme={theme}>
    <div className="mt-10"> 
      <Stack direction="row" spacing={1}>
        {langs.map(lang => (<Chip icon={<Code/>} label={lang} color="primary" variant="outlined" />))
        }
      </Stack>
    </div>
    <div className="mt-10">
      <Stack direction="row" spacing={1}>
        {frame.map(fms => (<Chip icon={<CloudCircleOutlined />} color="secondary" label={fms} variant="outlined" />))
        }
      </Stack>
    </div>
    <div className="mt-10">
      <Stack direction="row" spacing={1}>
        {cloud.map(clouds => (<Chip icon={<CloudCircleOutlined />} color="neutral" label={clouds} variant="outlined" />))
        }
      </Stack>
    </div>
    
    </ThemeProvider>
  );
}