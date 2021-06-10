import { Typography, Paper } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { animations } from '../helpers/animations';

const ItemsContainer = styled.div(() => {
  return {
    padding: '10vh 0',
  };
});

const CardContainer = styled.div(() => {
  return {
    minHeight: '10vh',

    boxSizing: 'border-box',

    display: 'flex',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
});

const CardContent = styled.div(() => {
  return {
    padding: '1vh',
  };
});

const items = [
  {
    title: 'test 1',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus optio ab pariatur qui a fugit, neque quaerat quo magni repellat alias aperiam cupiditate asperiores, tempora dolor, similique cum ex.',
  },
  {
    title: 'test 2',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus optio ab pariatur qui a fugit, neque quaerat quo magni repellat alias aperiam cupiditate asperiores, tempora dolor, similique cum ex.',
  },
  {
    title: 'test 3',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus optio ab pariatur qui a fugit, neque quaerat quo magni repellat alias aperiam cupiditate asperiores, tempora dolor, similique cum ex.',
  },
  {
    title: 'test 4',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus optio ab pariatur qui a fugit, neque quaerat quo magni repellat alias aperiam cupiditate asperiores, tempora dolor, similique cum ex.',
  },
  {
    title: 'test 5',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus optio ab pariatur qui a fugit, neque quaerat quo magni repellat alias aperiam cupiditate asperiores, tempora dolor, similique cum ex.',
  },
  {
    title: 'test 1',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus optio ab pariatur qui a fugit, neque quaerat quo magni repellat alias aperiam cupiditate asperiores, tempora dolor, similique cum ex.',
  },
  {
    title: 'test 2',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus optio ab pariatur qui a fugit, neque quaerat quo magni repellat alias aperiam cupiditate asperiores, tempora dolor, similique cum ex.',
  },
  {
    title: 'test 3',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus optio ab pariatur qui a fugit, neque quaerat quo magni repellat alias aperiam cupiditate asperiores, tempora dolor, similique cum ex.',
  },
  {
    title: 'test 4',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus optio ab pariatur qui a fugit, neque quaerat quo magni repellat alias aperiam cupiditate asperiores, tempora dolor, similique cum ex.',
  },
  {
    title: 'test 5',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus optio ab pariatur qui a fugit, neque quaerat quo magni repellat alias aperiam cupiditate asperiores, tempora dolor, similique cum ex.',
  },
];

const Feature = () => {
  const animation = useAnimation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  useEffect(() => {
    console.log('inview =', inView);
    if (inView) {
      animation.start(animations.cardTransition.visible);
    } else {
      animation.start(animations.cardTransition.hidden);
    }
  }, [inView]);

  const renderItems = items.map((item, index) => {
    return (
      <div key={index}>
        <Paper
          style={{ width: '100%', marginBottom: '2vh', maxWidth: '1000px' }}>
          <CardContainer>
            <img
              src='https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80'
              alt=''
              style={{ width: '10rem', height: '10rem' }}
            />
            <CardContent>
              <Typography variant='h4' gutterBottom color='textPrimary'>
                {item.title}
              </Typography>
              <Typography color='textPrimary'>{item.content}</Typography>
            </CardContent>
          </CardContainer>
        </Paper>
      </div>
    );
  });

  return (
    <div>
      <Typography variant='h4' gutterBottom color='textPrimary'>
        Feature Page
      </Typography>
      <div
        id='palceholder'
        style={{
          height: '100vh',
          width: '60%',
          backgroundColor: 'green',
          marginBottom: '2vh',
        }}
      />

      <div ref={ref} id='ici'>
        <Typography variant='h4' gutterBottom color='textPrimary'>
          les items
        </Typography>
        <motion.div animate={animation}>
          <ItemsContainer>{renderItems}</ItemsContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
