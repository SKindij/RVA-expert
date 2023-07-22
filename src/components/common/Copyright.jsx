
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '} 
      {'Tech Solutions '}
      {'v.0.1.5 by SKindij '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
