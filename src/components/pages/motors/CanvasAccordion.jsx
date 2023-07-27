import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const CustomIcon = () => {
    return <div>
        <div className='expandIcon'>
            <AddIcon></AddIcon>
        </div>
        <div className='compressIcon'>
            <RemoveIcon></RemoveIcon>
        </div>
    </div>
}

const CanvasAccordion = ({ Content }) => {
    const { title, description } = Content;
    return (
        <Accordion sx={{
            boxShadow: 'none', border: `1px solid #E5EAF4`,
            p: 2,
            '& .MuiAccordionSummary-content': {
                color: 'primary.main'
            },
            '& .Mui-expanded': {
                '& p': {color: 'primary.green'},
                '& .expandIcon': {display: 'none'},
                '& .compressIcon': {
                    display: 'block',
                    '& svg': {color: 'primary.green'}
                }
            }
        }}>
            <AccordionSummary
                sx={{
                    '& .compressIcon': {display: 'none'}
                }}
                expandIcon={<CustomIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{fontWeight: 'bold'}}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{color: '#5A7184'}}>
                    {description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};
export default CanvasAccordion;