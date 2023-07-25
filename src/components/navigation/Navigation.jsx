import PropTypes from 'prop-types';
import { AppBar, Toolbar, Grid } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { BreakpointsContext } from '../breakpoints-context';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavButtons from './NavButtons';
import NavDrawer from './NavDrawer';

export default function Navigation(props) {
  const { initial, animate, variants, component, show } = props;
  const ctx = useContext(BreakpointsContext);
  const [showNav, setShowNav] = useState(show);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 900) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    if (show) {
      setShowNav(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [show]);

  return (
    showNav && (
      <AppBar
        sx={{ bgcolor: 'white', height: '5rem', zIndex: 10000 }}
        position="sticky" color="primary"
        my={1}
        initial={initial}
        animate={animate}
        variants={variants}
        component={component}
      >
        <Toolbar disableGutters>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            wrap="nowrap"
            height="100%"
          >
            <NavLogo />

            {/* Mobile */}
            {ctx.isSmall && (
              <Grid
                container
                item
                justifyContent="flex-end"
                sx={{ marginRight: '2rem' }}
              >
                <NavDrawer />
              </Grid>
            )}

            {/* Non-Mobile */}
            {ctx.isMedium || ctx.isLarge ? (
              <Grid item container justifyContent="center" alignItems="center" spacing={3}>
                <NavLinks />
              </Grid>
            ) : null}

            {ctx.isMedium || ctx.isLarge ? (
              <Grid
                item
                container
                justifyContent="center"
                spacing={1}
                md={5}
                wrap="nowrap"
              >
                <NavButtons />
              </Grid>
            ) : null}
          </Grid>
        </Toolbar>
      </AppBar>
    )
  );
}

Navigation.propTypes = {
  initial: PropTypes.string,
  animate: PropTypes.string,
  variants: PropTypes.object,
  component: PropTypes.elementType,
  show: PropTypes.bool,
};