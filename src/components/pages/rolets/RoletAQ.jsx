import { Box } from '@mui/material';
import SectionTitle from '../../common/SectionTitle';
import CanvasAccordion from '../../common/CanvasAccordion';

const AccordionContent = [
    {
      title: '',
      description: ''
    },
    {
      title: '',
      description: ''
    },
    {
      title: '',
      description: ''
    },
    {
      title: '',
      description: ''
    },      
    {
      title: '',
      description: ''
    },
    {
      title: '',
      description: ''
    },
    {
      title: '',
      description: ''
    }
]
const RoletFAQ = () => {
    return (
        <Box>
            <SectionTitle title='Frequently Asked' colored='Questions'></SectionTitle>
            <Box sx={{
                mt: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>
                {
                  AccordionContent.map(
                    (Content, index) => <CanvasAccordion key={index} Content={Content} />
                    )
                }
            </Box>
        </Box>
    );
};
export default RoletFAQ;