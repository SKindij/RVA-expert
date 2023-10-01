import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <section style={{ marginTop: '20px' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © Tech Solutions (Тех-Рішення)'}{' '}{new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {'rva.expert by SKindij'}
      </Typography>
    </section>
  );
}