import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import classes from './WelcomeLinks.module.css';

const links = [
  {
    title: 'Компанія',
    href: '/#company',
  },
  {
    title: 'Об\'єкти',
    href: '/#objects',
  },
  {
    title: 'Контакти',
    href: '/#contacts',
  },
  {
    title: 'Продукція',
    href: '/production',
  },
];

export default function WelcomeLinks () {
  const linksVariants = {
    initial: { x: '100vw' },
    animate: { x: 0, transition: { duration: 2, delay: 1 } },
  };

  return (
    <Grid
      xs={4} sm={3}
      item container
      justifyContent="center" alignItems="center"
      className={classes.welcomeLinks}
      mt={{ xs: 8, md: 0 }}
    >
      {links.map((link) => {
        return (
          <Grid
            item color="white"
            component={motion.div} variants={linksVariants}
            sx={{ width: 'fit-content' }} marginX={{ xs: 15, sm: 1.5 }}
            key={link.title}
          >
            <Link href={link.href} sx={{ textDecoration: 'none' }} color="#FFF">
              <Typography fontSize={{ xs: '1.3rem', sm: '1.5rem' }}>
                {link.title}
              </Typography>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
