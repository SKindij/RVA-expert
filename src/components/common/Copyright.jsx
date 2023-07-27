import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © Tech Solutions'}{' '}{new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {'rva.expert v.0.3.5 by SKindij'}
      </Typography>
    </>
  );
}