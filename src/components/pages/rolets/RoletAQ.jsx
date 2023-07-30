import { Box } from '@mui/material';
import SectionTitle from '../../common/SectionTitle';
import CanvasAccordion from '../../common/CanvasAccordion';

const AccordionContent = [
    {
      title: 'Які переваги мають зовнішні захисні алюмінієві ролети?',
      description: 'Наші зовнішні захисні алюмінієві ролети поєднують в собі кілька переваг. Вони забезпечують надійний захист від негоди, вторгнень та небажаних поглядів. Крім того, ролети виготовлені з високоякісного алюмінієвого сплаву, що забезпечує додаткову ізоляцію та зниження рівня шуму. Ви отримуєте комфорт, ефективність та елегантний дизайн для вашого будинку.'
    },
    {
      title: 'Чи доступні ролети в різних розмірах та кольорах?',
      description: 'Так, ми пропонуємо зовнішні захисні алюмінієві ролети в різних розмірах та кольорах. У нас є великий вибір кольорів, щоб ви могли підібрати ролети, які ідеально впишуться в дизайн вашої оселі. Крім того, ми можемо виготовити ролети на замовлення, якщо вам потрібні спеціальні розміри.'
    },
    {
      title: 'Чи можна керувати ролетами за допомогою смартфона?',
      description: 'Так, ми пропонуємо зовнішні захисні алюмінієві ролети з інтегрованою системою управління за допомогою смартфона. Це дозволяє вам зручно та безпечно керувати ролетами з будь-якої точки світу, надаючи додатковий рівень безпеки для вашого дому. Ви зможете відкривати та закривати ролети навіть здалеку, що забезпечить зручність та контроль над вашим житлом.'
    },
    {
      title: 'Як доглядати за зовнішніми захисними ролетами?',
      description: 'Догляд за зовнішніми захисними алюмінієвими ролетами досить простий. Вам потрібно періодично очищати їх від пилу та бруду за допомогою легкої ганчірки або губки. Також рекомендуємо змащувати механізм ролет за допомогою спеціальних мастил, щоб забезпечити їх безперебійну роботу протягом тривалого періоду.'
    },      
    {
      title: 'Чи забезпечують зовнішні захисні ролети ізоляцію від звуків та тепла?',
      description: 'Так, наші зовнішні захисні алюмінієві ролети мають властивості шумоізоляції та теплоізоляції. Вони допоможуть знизити проникнення шуму зовні та зберегти оптимальний рівень температури у вашому будинку. Це зробить ваше проживання більш комфортним та знизить енергоспоживання.'
    },
    {
      title: 'Чи можна встановити зовнішні захисні ролети на великих вікнах та дверях?',
      description: 'Так, наші зовнішні захисні алюмінієві ролети можна встановити на великих вікнах та дверях. Вони мають міцну конструкцію та оптимальні розміри, що дозволяють забезпечити надійний захист великих віконних площин. Ви отримаєте не лише безпеку, а й стильний зовнішній вигляд для вашого будинку.'
    },
    {
      title: 'Чи мають зовнішні захисні ролети гарантію?',
      description: 'Так, всі наші зовнішні захисні алюмінієві ролети мають гарантію на якість та безперебійну роботу. Ми впевнені в якості наших продуктів, тому надаємо гарантію на період до 2 років. У разі будь-яких проблем, наша команда готова надати швидкий та професійний сервіс підтримки.'
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