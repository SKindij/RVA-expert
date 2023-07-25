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

const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function NavLinks() {
  const onClickHandler = (event, id) => {
    event.preventDefault();
    if (id) {
      scrollToElement(id);
    }
  };

  return links.map( (link) => {
    return (
      <Grid item key={link.title}>
        <Button
          variant="text" // Можна вибрати "outlined" або "contained"
          sx={{ color: 'black' }}
          href={'/'}
          onClick={(event) => onClickHandler(event, link.id)}
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
