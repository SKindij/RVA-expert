import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, IconButton, Tab, Tabs, Grid, Fade } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@mui/material';
import SectionTitleTwo from './SectionTitleTwo';
import ProductCard from './ProductCard';
import { AutomaticData } from './AutomaticData';

const MotorGoods = ({exchangeRate}) => {
    const theme = useTheme();
    const [value, setValue] = useState(0);

  // Обробник кліку на вкладку у фільтрі
     const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    // Обробник кліку на кнопку "Попередній"
    const handlePrevClick = () => {
        if (value > 0) { setValue(value - 1); }
    };
    // Обробник кліку на кнопку "Наступний"
    const handleNextClick = () => {
        if (value < 3) { setValue(value + 1); }
    };

    return (
        <Box sx={{ my: 5, mb: 10 }}>
            {/* Header Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    [theme.breakpoints.up('md')]: {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignContent: 'center'
                    },
                }}
            >
                <SectionTitleTwo
                    title="Запрошуємо ознайомитися " colored="із нашими пропозиціями"
                    sx={{ textAlign: 'left' }}
                />
                
                {/* Фільтр груп товарів */}
                <Tabs
                    value={value} centered onChange={handleTabChange}
                    sx={{
                    '& .MuiTabs-indicator': { display: 'none' },
                    '& .Mui-selected': {
                        color: theme.palette.primary.green,
                        fontWeight: 'bold'
                    },
                    '& .MuiButtonBase-root': { textTransform: 'capitalize' },
                    '& .css-drrf1x-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                        color: theme.palette.primary.green
                    }
                }}
                >
                <Tab label="Усі" value={0} />
                <Tab label="Відкатні" value={1} />
                <Tab label="Розпашні" value={2} />
                <Tab label="Шлагбауми" value={3} />
                </Tabs>
                
                {/* Кнопки "Попередній" і "Наступний" */}
                <IconButton
                    // ... (налаштування кнопки "Попередній")
                    onClick={handlePrevClick}
                    disabled={value === 0}
                >
                    <NavigateBeforeIcon />
                </IconButton>
                <IconButton
                    // ... (налаштування кнопки "Наступний")
                    onClick={handleNextClick}
                    disabled={value === 3}
                >
                    <NavigateNextIcon />
                </IconButton>
            </Box>
            
            {/* Cards Section */}
            <Grid container spacing={3} justifyContent="center">
                {/* Мапінг і відображення товарів для вибраної групи */}
                {(() => {
                let groupKey;
                switch (value) {
                    case 0:
                        groupKey = 'all';
                        break;
                    case 1:
                        groupKey = 'sliding';
                        break;
                    case 2:
                        groupKey = 'swing';
                        break;
                    case 3:
                        groupKey = 'barrier';
                        break;
                    default:
                        groupKey = 'sliding';
                }
                
                return AutomaticData[groupKey].map((item) => (
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
            })()}
            </Grid>
        </Box>
    );
};
MotorGoods.propTypes = {
  exchangeRate: PropTypes.number.isRequired
};
export default MotorGoods;