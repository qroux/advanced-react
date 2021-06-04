export const animations = {
  pageTransition: {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.5 },
    },
    exit: {
      x: -20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
};
