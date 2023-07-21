import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled('a')({});

export const NextLinkComposed = React.forwardRef(function NextLinkComposed(props, ref) {
  const { to, linkAs, replace, ...other } = props;
  return (
    <RouterLink to={to} replace={replace} ref={ref} {...other} />
  );
});

NextLinkComposed.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  linkAs: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  replace: PropTypes.bool,
};

// A styled version of the React Router Link component:
const Link = React.forwardRef(function Link(props, ref) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    to,
    noLinkStyle,
    ...other
  } = props;
  const history = useHistory();
  const location = history.location;
  const pathname = typeof to === 'string' ? to : to.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: location.pathname === pathname && activeClassName,
  });
  const isExternal =
    typeof to === 'string' && (to.indexOf('http') === 0 || to.indexOf('mailto:') === 0);

  if (isExternal) {
    if (noLinkStyle) {
      return <Anchor className={className} href={to} ref={ref} {...other} />;
    }
    return <MuiLink className={className} href={to} ref={ref} {...other} />;
  }
  if (noLinkStyle) {
    return <NextLinkComposed className={className} ref={ref} to={to} {...other} />;
  }
  return (
    <MuiLink
      component={NextLinkComposed}
      linkAs={to} className={className}
      ref={ref} to={to}
      {...other}
    />
  );
});

Link.propTypes = {
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  noLinkStyle: PropTypes.bool,
};

export default Link;
