import { styled } from '@mui/material/styles';

export const Image300 = styled('img')(({ theme }) => ({
  boxSizing: 'border-box',

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

export const Image450 = styled('img')(({ theme }) => ({
  boxSizing: 'border-box',

  [theme.breakpoints.up('md')]: {
    height: '450px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    height: '350px',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    height: '300px',
  },
}));

export const ImageFullWidth = styled('img')(({ theme }) => ({
  boxSizing: 'border-box',

  [theme.breakpoints.up('md')]: {
    width: '1000px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '100%',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '100%',
  },
}));

export const ImageSmall = styled('img')(({ theme }) => ({
  boxSizing: 'border-box',

  // [theme.breakpoints.up('lg')]: {
  //   height: '250px',
  // },

  // [theme.breakpoints.between('md', 'lg')]: {
  //   height: '200px',
  // },
  // [theme.breakpoints.between('sm', 'md')]: {
  //   height: '150px',
  // },
  // [theme.breakpoints.between('xs', 'sm')]: {
  //   height: '100px',
  // },
}));
