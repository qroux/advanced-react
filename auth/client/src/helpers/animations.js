export const animations = {
  pageTransition: {
    hidden: {
      y: -5,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.5 },
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
  cardTransition: {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: { type: 'spring', bounce: 0.2, duration: 1 },
    },
  },
};
