import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, IconButton, Tab, Tabs, Grid, Fade } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@mui/material';
import SectionTitleTwo from '../../common/SectionTitleTwo';
import ProductCard from '../../common/ProductCard';
import { MotorsData } from './MotorsData';

const MotorGoods = ({ exchangeRate }) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleTabChange = (_, newValue) => {
    setValue(newValue);
  };

  const handlePrevClick = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleNextClick = () => {
    if (value < MotorsData.length - 1) {
      setValue(value + 1);
    }
  };

  const renderProductCards = () => {
    const groupKeys = ['sliding', 'swing', 'barrier'];  
    if (value === 0) {
      return groupKeys.flatMap((groupKey) =>
        MotorsData[groupKey].map((item) => (
          <Grid item key={item.id}>
            <Fade in={true} timeout={500}>
              <div>
                <ProductCard
                  image={item.image}
                  title={item.title}
                  product={item.product}
                  description={item.description}
                  kit={item.kit}
                  price={item.price}
                  exchangeRate={exchangeRate}
                />
              </div>
            </Fade>
          </Grid>
        ))
      );
    }
  
    const groupKey = groupKeys[value - 1];  
    return MotorsData[groupKey].map((item) => (
      <Grid item key={item.id}>
        <Fade in={true} timeout={500}>
          <div>
            <ProductCard
              image={item.image}
              title={item.title}
              product={item.product}
              description={item.description}
              kit={item.kit}
              price={item.price}
              exchangeRate={exchangeRate}
            />
          </div>
        </Fade>
      </Grid>
    ));
  };

  return (
    <Box sx={{ my: 5, mb: 10 }}>
      <Box
        sx={{
          display: 'flex', flexDirection: 'column', gap: 2,
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center',
          },
        }}
      >
        <SectionTitleTwo title="Запрошуємо ознайомитися " colored="із нашими пропозиціями" />

        <Tabs value={value} centered onChange={handleTabChange}
          sx={{
            '& .MuiTabs-indicator': { display: 'none' },
            '& .Mui-selected': {
              color: theme.palette.primary.green,
              fontWeight: 'bold',
            },
            '& .MuiButtonBase-root': { textTransform: 'capitalize' },
            '& .css-drrf1x-MuiButtonBase-root-MuiTab-root.Mui-selected': {
              color: theme.palette.primary.green,
            },
          }}
        >
          <Tab label="Усі" value={0} />
          <Tab label="Відкатні" value={1} />
          <Tab label="Розпашні" value={2} />
          <Tab label="Шлагбауми" value={3} />
        </Tabs>

        <IconButton
          onClick={handlePrevClick}
          disabled={value === 0}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          onClick={handleNextClick}
          disabled={value === MotorsData.length - 1}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {renderProductCards()}
      </Grid>
    </Box>
  );
};

MotorGoods.propTypes = {
  exchangeRate: PropTypes.number.isRequired,
};

export default MotorGoods;