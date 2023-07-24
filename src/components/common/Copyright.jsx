import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © Tech Solutions'}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {'rva.expert v.0.2.1 by SKindij'}
        {new Date().getFullYear()}.
      </Typography>
    </>
  );
}