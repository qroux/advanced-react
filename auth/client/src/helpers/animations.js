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
  inViewTransition: {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.2, duration: 1, delay: 0.5 },
    },
  },
  cardStaggerTransition: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  cardTransition: {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  },
};
