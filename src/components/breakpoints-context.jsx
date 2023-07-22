import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Створюємо контекст за допомогою React.createContext
export const BreakpointsContext = React.createContext({
  isSmall: null,
  isMedium: null,
  isLarge: null,
});

// Компонент провайдера, який визначає розміри екрану за допомогою MUI хуків
export const BreakpointsContextProvider = (props) => {
  const theme = useTheme();

  // Використовуємо MUI хуки useMediaQuery для визначення розмірів екрану
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const isMedium = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  // Провайдер передає значення розмірів екрану через контекст дочірнім компонентам
  return (
    <BreakpointsContext.Provider value={{ isSmall, isMedium, isLarge }}>
      {props.children}
    </BreakpointsContext.Provider>
  );
};

// Валідація пропсів
BreakpointsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};