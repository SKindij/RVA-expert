import React from 'react';
import Link from '../../Link';
import { motion } from 'framer-motion';
import { TypographyHeader } from '../common/TypographyVariants';
import { Grid } from '@mui/material';

const itemData = [
  {
    category: 'Секційні ворота',
    data: [
      {
        img: '/images/sc/SC144.jpg',
        title: 'СЦ-144', href: '/sc144',
      },
      {
        img: '/images/sc/SC200.jpg',
        title: 'СЦ-200', href: '/sc200',
      },
      {
        img: '/images/sc/SCMBU.jpg',
        title: 'СЦ-МБУ', href: '/scmbu',
      },
      {
        img: '/images/sc/SCK250.jpg',
        title: 'СЦК-250', href: '/sc250',
      },
    ],
  },
  {
    category: 'Захисні ролети',
    data: [
      {
        img: '/images/svs/svs-full.jpg',
        title: 'Вибросито СВС', href: '/svs',
      },
      {
        img: '/images/bkf/bkf-full.jpg',
        title: 'Блок коагуляции БКФ', href: '/bkf',
      },
    ],
  },
  {
    category: 'Автоматика',
    data: [
      {
        img: '/images/ku/ku-02m-full.jpg',
        title: 'КУ-02М', href: '/ku02m',
      },
      {
        img: '/images/kupnsh/kupnsh-full.jpg',
        title: 'КУПШМ', href: '/kupnsh',
      },
      {
        img: '/images/umosh/umosh-full.jpg',
        title: 'Установка Шлама', href: '/umosh',
      },
    ],
  },
];

const ProductionVariants = {
  initial: { y: 150 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

const MotionProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
  variants: ProductionVariants,
};

export default function Production() {
  return (
    <>
      {itemData.map((item) => {
        return (
          <Grid
            container key={item.category}
            {...MotionProps} component={motion.div}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <TypographyHeader
                sx={{ my: 10 }}
              >
                {item.category}
              </TypographyHeader>
            </Grid>

            {item.data.map((item) => (
              <Grid
                item key={item.title}
                sx={{
                  width: '25rem',
                  mx: 0.5, my: 1,
                  border: '1px solid black',
                }}
                component={Link}
                href={item.href}
                className="blueOnHover" // CSS-клас для стилю при наведенні
              >
                {/* Для компонента Image потрібно встановити width та height через CSS */}
                <div style={{ width: 400, height: 300 }}>
                  <Image src={item.img} layout="fill" objectFit="cover" />
                </div>

                {/* Відображення назви та інформації про елемент */}
                <div>
                  <TypographyHeader variant="h6">{item.title}</TypographyHeader>
                  {/* Додайте інші елементи, якщо потрібно */}
                </div>
              </Grid>
            ))}
          </Grid>
        );
      })}
    </>
  );
}
