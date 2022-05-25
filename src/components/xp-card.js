import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({
  title,
  time,
  desc,
  link,
}) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <div className="bg-gray-100 shadow-2xl --tw-shadow-color: #10b981"> 
      <CardActionArea>  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='text-blue-500'>
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" className='text-blue-500'>
            {time}
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
  );
}