import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import classes from './WelcomeLinks.module.css';

const links = [
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
  {
    title: 'Продукція',
    href: '#',
  },
];

const WelcomeLinks = () => {
  const linksVariants = {
    initial: { x: '100vw' },
    animate: { x: 0, transition: { duration: 2, delay: 1 } },
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Grid
      xs={4} sm={3}
      item container
      justifyContent="center" alignItems="center"
      className={classes.welcomeLinks}
      mt={{ xs: 8, md: 0 }}
    >
      {links.map( (link) => {
        const onClickHandler = () => {
          if (link.id) {
            scrollToElement(link.id);
          }
        };
        return (
          <Grid
            item color="white" key={link.title}
            component={motion.div} variants={linksVariants}
            sx={ { width: 'fit-content' }} marginX={{ xs: 15, sm: 1.5 } }           
          >
            <div onClick={onClickHandler} >
              <Typography fontSize={{ xs: '1.3rem', sm: '1.5rem' }}>
                {link.title}
              </Typography>
            </div>
          </Grid>
        );
      } )}
    </Grid>
  );
}

export default WelcomeLinks;