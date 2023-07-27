import { Box, styled } from '@mui/material';

const brands = [
  {
    src: '/images/p-motors/bft-spa-logo.png',
    alt: 'bft spa logo',
  },
  {
    src: '/images/p-motors/roger-tehnology-logo.png',
    alt: 'roger tehnology logo',
  },
  {
    src: '/images/p-motors/Nice-Home-logo.png',
    alt: 'Nice Home logo',
  },
  {
    src: '/images/p-motors/roger-tehnology-logo.png',
    alt: 'roger tehnology logo',
  },
  {
    src: '/images/p-motors/bft-spa-logo.png',
    alt: 'bft spa logo',
  },
]


const BrandsWrapper = styled(Box)(({ theme }) => ({
    marginBottom: '4rem',
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center',
    '& > img': {
        height: '60px',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        '& > img': {
            marginBottom: '1rem',
        }
    }
}))

const Brands = () => {
    return (
        <BrandsWrapper>
            {
              brands.map( (brand, i) => <img key={i} src={brand.src} alt={brand.alt} />)
            }
        </BrandsWrapper>
    );
};

export default Brands;