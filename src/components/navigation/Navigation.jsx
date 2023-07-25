import PropTypes from 'prop-types';
import { AppBar, Toolbar, Grid } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { BreakpointsContext } from '../breakpoints-context';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavButtons from './NavButtons';
import NavDrawer from './NavDrawer';

export default function Navigation(props) {
  const { initial, animate, variants, component } = props;
  const ctx = useContext(BreakpointsContext);

  const [showNav, setShowNav] = useState(false);

  if (typeof window !== 'undefined') {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    useEffect(() => {
      if (props.show === true) {
        setShowNav(true);
      }
      window.addEventListener('scroll', handleScroll);
      if (scrollPosition > 900) {
        setShowNav(true);
      }
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollPosition, props.show, setShowNav]);
  }

  return (
    showNav && (
      <AppBar
        sx={{ bgcolor: 'white', height: '5rem', zIndex: 10000 }}
        position="sticky" color="primary" my={1}
        initial={initial ? initial : null}
        animate={animate ? animate : null}
        variants={variants ? variants : null}
        component={component ? component : null}
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
                container item
                justifyContent="flex-end"
                sx={{ marginRight: '2rem' }}
              >
                <NavDrawer />
              </Grid>
            )}

            {/* Non-Mobile */}
            {(ctx.isMedium || ctx.isLarge) && (
              <Grid
                item container
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <NavLinks />
              </Grid>
            )}

            {(ctx.isMedium || ctx.isLarge) && (
              <Grid
                item container
                justifyContent="center"
                spacing={1}
                md={5}
                wrap="nowrap"
              >
                <NavButtons />
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    )
  );
}

Navigation.propTypes = {
  initial: PropTypes.string, // initial буде строкою
  animate: PropTypes.string, // animate буде строкою
  variants: PropTypes.object, // variants буде об'єктом
  component: PropTypes.elementType, // component приймає значення типу React компоненту
  show: PropTypes.bool
};