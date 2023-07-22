import { Button, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const links = [
  {
    href: '/#company',
    text: 'Компанія',
  },
  {
    href: '/#objects',
    text: 'Об\'єкти',
  },
  {
    href: '/#contacts',
    text: 'Контакти',
  },
];

export default function NavLinks() {
  return links.map((link) => {
    return (
      <Grid item key={link.text}>
        <Button
          variant="text"
          noLinkStyle sx={{ color: 'black' }}
          href={link.href}
        >
          <Typography
            variant="overline" component={motion.p}
            whileHover={{ color: '#ffc45a' }}
            sx={{ fontSize: '1rem' }}
          >
            {link.text}
          </Typography>
        </Button>
      </Grid>
    );
  });
}
