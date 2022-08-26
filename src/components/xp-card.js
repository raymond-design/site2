import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({
  title,
  time,
  desc,
  link,
  cmpn
}) {
  return (
    <div class="px-8 py-32">
      <div class="grid gap-8 items-start justify-center">
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
          <Card sx={{ maxWidth: 500 }}>
      <div className="bg-black shadow-2xl --tw-shadow-color: #10b981"> 
      <CardActionArea>  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='text-blue-300'>
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" className='text-emerald-300'>
            {cmpn}
          </Typography>
          <Typography gutterBottom variant="h8" component="div" className='text-emerald-200'>
            {time}
          </Typography>
          <Typography variant="body2" className='text-blue-500'>
            {desc}
          </Typography>
          <Typography variant="body2" className='text-blue-500'>
            {desc}
          </Typography>
          <Typography variant="body2" className='text-blue-500'>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className='text-white'>
          Site Link
        </Button>
      </CardActions>
      </div>
    </Card>
          </button>
        </div>
      </div>
    </div>

     
  );
}