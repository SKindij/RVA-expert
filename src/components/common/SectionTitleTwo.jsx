import React from 'react';
import { Typography } from '@mui/material';

const SectionTitleTwo = ({ title, colored }) => {
    return (
        <div>
            <Typography sx={{
                fontSize: '34px',
                fontWeight: 'bold',
                textAlign: 'left'
            }}>
                {title}{' '}
                {colored && <span style={{ color: '#7AB259' }}>{colored}</span>}
            </Typography>

        </div>
    );
};

export default SectionTitleTwo;