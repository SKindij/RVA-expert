import { Button, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const links = [
  {
    title: 'Компанія',
    id: 'company',
  },
  {
    title: 'Проекти',
    id: 'objects',
  },
  {
    title: 'Контакти',
    id: 'contacts',
  },
];






export default function NavLinks() {
  return links.map( (link) => {
    return (
      <Grid item key={link.title}>
        <Button
          variant="text" // Можна вибрати "outlined" або "contained"
          sx={{ color: 'black' }}
          href={link.id}
        >
          <Typography
            variant="overline" component={motion.p}
            whileHover={{ color: '#ffc45a' }}
            sx={{ fontSize: '1rem' }}
          >
            {link.title}
          </Typography>
        </Button>
      </Grid>
    );
  } );
}
