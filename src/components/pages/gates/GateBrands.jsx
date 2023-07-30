import { Box, styled } from '@mui/material';
import SectionTitle from '../../common/SectionTitle';

const brands = [
  {
    src: '/images/p-motors/roger-tehnology-logo.png',
    alt: 'roger tehnology logo',
  },
  {
    src: '/images/p-motors/bft-spa-logo.png',
    alt: 'bft spa logo',
  },
  {
    src: '/images/p-motors/Roger-Brushless-logo.png',
    alt: 'Roger Brushless logo',
  },
  {
    src: '/images/p-motors/bft-spa-logo.png',
    alt: 'bft spa logo',
  },
  {
    src: '/images/p-motors/roger-tehnology-logo.png',
    alt: 'roger tehnology logo',
  },
]
const BrandsWrapper = styled(Box)(({ theme }) => ({
    marginBottom: '4rem', marginTop: '3rem',
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center',
    '& > img': {height: '60px'},
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        '& > img': {marginBottom: '1rem'}
    }
}))

const GateBrands = () => {
    return (
      <>
        <SectionTitle title="Перевірена часом" colored="італійська якість" />   
        <BrandsWrapper>
          {
            brands.map( (brand, i) => <img key={i} src={brand.src} alt={brand.alt} />)
          }
        </BrandsWrapper>
      </>

    );
};

export default GateBrands;