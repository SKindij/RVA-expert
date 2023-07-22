import { styled } from '@mui/material/styles';

export default styled('img')(({ theme }) => ({
  boxSizing: 'border-box',
  borderRadius: '15px',

  [theme.breakpoints.up('md')]: {
    height: '300px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    height: '250px',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    height: '160px',
  },
}));