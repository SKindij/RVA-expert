
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '} 
      {'rva.expert "Tech Solutions" '}
      {'v.0.1.8 by SKindij '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
