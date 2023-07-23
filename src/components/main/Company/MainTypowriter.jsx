import Typewriter from 'typewriter-effect';
import { TypographyHeader } from '../../common/TypographyVariants';
import { motion } from 'framer-motion';

const typeVariants = {
  initial: { x: '-100vw' },
  animate: {
    x: '0',
    transition: {
      x: { duration: 1 },
    },
  },
};

export default function MainTypowriter() {
  return (
    <TypographyHeader
      paragraph
      component={motion.div}
      variants={typeVariants}
      animate="animate"
      initial="initial"
    >
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .typeString('Компанія <strong>"Тех-Рішення"</strong>')
              .pauseFor(1000)
              .deleteAll()
            .typeString('Багаторічний практичний досвід!')
              .pauseFor(1000)
              .deleteAll()
            .typeString('<strong>RVA -</strong> Ролети. Ворота. Автоматика.')
              .pauseFor(1000)
              .deleteAll()
            .typeString("Індивідуальний підхід до кожного!")
              .pauseFor(1000)
              .deleteAll()
            .typeString('<strong>RVA.expert -</strong> Якість гарантовано!')
              .pauseFor(1000)
              .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </TypographyHeader>
  );
}
