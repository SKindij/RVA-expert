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

export default function () {
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
            .typeString('Компания Нефтегазмаш')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Сотни')
            .deleteChars(5)
            .typeString('<strong>Сотни</strong> проектов')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Более 20 лет на рынке')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Индивидуальный подход')
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
