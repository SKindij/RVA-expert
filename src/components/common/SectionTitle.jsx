import { Typography } from '@mui/material';

const SectionTitle = ({ title, colored }) => {
    return (
        <div>
            <Typography sx={{
                fontSize: '34px',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                {title}{' '}
                {colored && <span style={{ color: '#7AB259' }}>{colored}</span>}
            </Typography>

        </div>
    );
};

export default SectionTitle;