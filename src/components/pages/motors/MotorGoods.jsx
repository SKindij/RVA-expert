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
  const groupKeys = ['sliding', 'swing', 'barrier'];
  const groupKey = groupKeys[value - 1];

  const handleTabChange = (_, newValue) => {
    setValue(newValue);
  };

  const handlePrevClick = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const handleNextClick = () => {
    if (value < groupKeys.length) {
      setValue(value + 1);
    }
  };

  const renderProductCards = () => {      
    if (value === 0) {
      return groupKeys.flatMap((groupKey) =>
        MotorsData[groupKey].map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
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
    return MotorsData[groupKey].map((item) => (
      <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}> 
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
      <SectionTitleTwo title="Запрошуємо ознайомитися " colored="із нашими пропозиціями" />
      <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', // Центруємо вертикально на екранах з md і вище
    },
  }}
>
  <Tabs
    value={value}
    onChange={handleTabChange}
    centered
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
      [theme.breakpoints.up('md')]: {
        marginBottom: 0, // Знищуємо простір під Tabs на екранах з md і вище
      },
    }}
  >
    <Tab label="Усі" value={0} />
    <Tab label="Відкатні" value={1} />
    <Tab label="Розпашні" value={2} />
    <Tab label="Шлагбауми" value={3} />
  </Tabs>
  {/* Кнопки "Попередній" і "Наступний" */}
  <Box
    sx={{
      display: 'flex',
      gap: theme.spacing(1),
      marginLeft: 'auto', // Права відстань між кнопками і правим краєм контейнера
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(2), // Збільшуємо відстань на екранах з md і вище
      },
    }}
  >
    <IconButton onClick={handlePrevClick} disabled={value === 0}>
      <NavigateBeforeIcon />
    </IconButton>
    <IconButton onClick={handleNextClick} disabled={value === groupKeys.length}>
      <NavigateNextIcon />
    </IconButton>
  </Box>
</Box>

      <Grid container spacing={2} justifyContent="center">
        {renderProductCards()}
      </Grid>
    </Box>
  );
};

MotorGoods.propTypes = {
  exchangeRate: PropTypes.number.isRequired,
};

export default MotorGoods;