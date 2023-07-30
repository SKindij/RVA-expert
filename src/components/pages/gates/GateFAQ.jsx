import { Box } from '@mui/material';
import SectionTitle from '../../common/SectionTitle';
import CanvasAccordion from '../../common/CanvasAccordion';

const AccordionContent = [
    {
      title: 'Яка перевага секційних гаражних воріт порівняно з іншими типами воріт?',
      description: 'Секційні ворота забезпечують високий рівень ізоляції та енергоефективності, мають естетичний вигляд і зручне автоматичне керування.'
    },
    {
      title: 'Які матеріали використовуються для виготовлення промислових воріт?',
      description: 'Промислові ворота можуть бути зроблені з різних матеріалів, таких як сталь, алюміній та склопакети, що дозволяє вибрати оптимальний варіант для потреб вашого бізнесу.'
    },
    {
      title: 'Чи можна інтегрувати автоматичну систему управління для секційних гаражних воріт?',
      description: 'Так, секційні гаражні ворота можна оснастити автоматичною системою управління, що дозволить зручно керувати воротами з дистанції.'
    },
    {
      title: 'Яка тривалість експлуатації промислових воріт?',
      description: 'Залежно від якості матеріалів і рівня обслуговування, промислові ворота можуть прослужити від 15 до 25 років і більше.'
    },      
    {
      title: 'Чи можливо встановити промислові ворота на проємі з обмеженим простором?',
      description: 'Так, промислові ворота можуть бути виготовлені зі спеціальним механізмом, що дозволяє ефективно використовувати обмежений простір при відкриванні та закриванні воріт.'
    },
    {
      title: 'Чи можна замовити індивідуальний дизайн секційних гаражних воріт?',
      description: 'Так, ми пропонуємо можливість замовити секційні гаражні ворота з індивідуальним дизайном, що відповідатиме вашим потребам та вподобанням.'
    },
    {
      title: 'Які заходи безпеки передбачені для промислових воріт?',
      description: 'Наші промислові ворота оснащені різними заходами безпеки, такими як датчики руху, автоматичний зупинник, аварійне відкривання, що забезпечує високий рівень безпеки при експлуатації.'
    }
]
const GateFAQ = () => {
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
export default GateFAQ;