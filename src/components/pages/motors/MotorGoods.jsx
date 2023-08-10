import { Box, IconButton, Tab, Tabs, Grid } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@mui/material';
import SectionTitleTwo from './SectionTitleTwo';
import { AutomaticData } from './AutomaticData';
import ProductCard from '../../common/ProductCard';
const MotorGoods = ({ exchangeRate }) => {
	const theme = useTheme();
    const [value, setValue] = useState(0);
	const [animateTabs, setAnimateTabs] = useState(true);
    const handleChange = (event, newValue) => {
		setAnimateTabs(true);
        setValue(newValue);
    };
    return (
      <Box sx={{ my: 5, mb: 10 }}>
        {/* Header Section */}
          <Box sx={{
            display: 'flex', flexDirection: 'column', gap: 2,
              [theme.breakpoints.up('md')]: {
                 flexDirection: 'row', justifyContent: 'space-between',
                 alignContent: 'center'
               },
           }}>
            <SectionTitleTwo title="Запрошуємо ознайомитися" 
              colored="із нашими пропозиціями" sx={{textAlign: 'left'}} 
			/>
            <Box sx={{
              display: 'flex', justifyContent: 'space-between',
              lignItems: 'center', gap: 2
            }}>
                <Tabs value={value} onChange={handleChange} centered 
                  sx={{
                  '& .MuiTabs-indicator': {display: 'none'},
                  '& .Mui-selected': {color: 'theme.palette.primary.green', fontWeight: 'bold'},
                  '& .MuiButtonBase-root': {textTransform: 'capitalize'},
                  '& .css-drrf1x-MuiButtonBase-root-MuiTab-root.Mui-selected': {color: 'theme.palette.primary.green'}
                }}>
                    <Tab label="Усі" 
                      className={animateTabs ? 'fade-in-animation' : ''}
                      onAnimationEnd={() => setAnimateTabs(false)}
					/>
                    <Tab label="Відкатні" />
                    <Tab label="Розпашні" />
					<Tab label="Шлагбауми" />
                </Tabs>
                <Box>
                    <IconButton sx={{
                        border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`,
                        mr: 2, color: 'primary.main'
                      }}
                      onClick={() => setValue(value - 1)}
                      disabled={value === 0}
                    >
                        <ArrowBackIcon></ArrowBackIcon>
                    </IconButton>
                    <IconButton sx={{
                        border: theme => `1px solid ${value === 2 ? '#959EAD' : theme.palette.primary.main}`,
                        color: 'primary.main'
                      }}
                        onClick={() => setValue(value + 1)}
                        disabled={value === 3}
                    >
                        <ArrowBackIcon sx={{transform: 'rotate(180deg)'}}></ArrowBackIcon>
                    </IconButton>
                </Box>
            </Box>
        </Box>
        {/* Cards Section */}
        <Grid container spacing={3} justifyContent='center'>
          {AutomaticData[value].map(item => (
            <Grid item key={item.id}>
              <ProductCard
                image={item.image}
                title={item.title}
                product={item.product}
                description={item.description}
                kit={item.kit}
                price={item.price}
                exchangeRate={exchangeRate}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};
MotorGoods.propTypes = {
  exchangeRate: PropTypes.number.isRequired
};
export default MotorGoods;