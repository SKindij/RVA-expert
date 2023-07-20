import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const TypographyHeader = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: '#ff9327',
  margin: 0,

  [theme.breakpoints.up('xl')]: {
    fontSize: '2.6rem',
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    fontSize: '2.1rem',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.between(0, 'sm')]: {
    fontSize: '1.4rem',
  },
}));

export const TypographyParagraph = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.2rem',
    marginLeft: 240,
    marginRight: 240,
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    fontSize: '1.1rem',
    marginLeft: 200,
    marginRight: 200,
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: '1rem',
    marginLeft: 160,
    marginRight: 160,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1rem',
    marginLeft: 80,
    marginRight: 80,
  },
  [theme.breakpoints.between(0, 'sm')]: {
    fontSize: '1rem',
    marginLeft: 40,
    marginRight: 40,
  },
}));

export const TypographyParagraphNoMargin = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.between(0, 'sm')]: {
    fontSize: '1rem',
  },
}));

export const TypographyParagraphNoMarginAlign = styled(Typography)(
  ({ theme }) => ({
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.between(0, 'sm')]: {
      fontSize: '1rem',
    },
  })
);
