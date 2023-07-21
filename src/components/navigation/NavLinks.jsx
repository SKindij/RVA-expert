import { Button, Grid, Typography } from '@mui/material';
import Link from '../common/Link';
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
          variant="text"  component={Link}
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
