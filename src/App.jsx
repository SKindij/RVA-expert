
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';



import Copyright from './components/common/Copyright';

export default function App() {
  return (
    <Container maxWidth="md" sx={{ border: '1px dashed grey' }}>

      <Typography variant="h4" component="h1" gutterBottom>
        RVA Ролети Ворота Автоматика
        Тех-Рішення
      </Typography>


      <Copyright />   
         
    </Container>
  );
}