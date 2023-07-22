import { styled } from '@mui/material/styles';

export const MainGalleryWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  marginBottom: '0.5rem',

  [theme.breakpoints.up('md')]: {
    width: '200%',
  },
  [theme.breakpoints.between(726, 900)]: {
    width: '300%',
  },
  [theme.breakpoints.between(589, 725)]: {
    width: '400%',
  },
  [theme.breakpoints.between(421, 588)]: {
    width: '500%',
  },

  [theme.breakpoints.between(320, 420)]: {
    width: '700%',
  },
  [theme.breakpoints.between(0, 319)]: {
    width: '700%',
  },
}));

export const MainGalleryWrapperBox = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '100%',
  },
  [theme.breakpoints.between(726, 900)]: {
    width: '150%',
  },
  [theme.breakpoints.between(589, 725)]: {
    width: '200%',
  },
  [theme.breakpoints.between(421, 588)]: {
    width: '250%',
  },
  [theme.breakpoints.between(320, 420)]: {
    width: '350%',
  },
  [theme.breakpoints.between(0, 319)]: {
    width: '350%',
  },
}));
