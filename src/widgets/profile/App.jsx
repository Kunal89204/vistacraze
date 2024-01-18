import React, { useState } from 'react';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Carousel } from 'antd';
import { Button, Drawer } from 'antd';
import data from './data';
import styles from './styles.module.css';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


export default function App() {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  
  const [BoxesOpen, SetBoxesOpen] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: BoxesOpen ? '100%' : '20%',
      background: BoxesOpen ? 'white' : 'hotpink',
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(BoxesOpen ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(BoxesOpen ? [springApi, transApi] : [transApi, springApi], [
    0,
    BoxesOpen ? 0.1 : 0.6,
  ]);

  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

      <div className={styles.wrapper}>

        <animated.div
          style={{ ...rest, width: size, height: size }}
          className={styles.container}
          onClick={() => SetBoxesOpen((BoxesOpen) => !BoxesOpen)}
        >
          {transition((style, item, _, index) => (
            <Link key={index}  onClick={showDrawer} className={styles.item}>
              <animated.div style={{ ...style, background: item.css }}>
                {BoxesOpen && (
                  <div className={styles.details}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                )}
              </animated.div>
            </Link>
          ))}

          
        </animated.div>
        
      </div>

     
      <Drawer title="Multi-level drawer" width={520} closable={false} onClose={onClose} open={open}>
        <Button type="primary" onClick={showChildrenDrawer}> Two-level drawer
        
         </Button>
        <Drawer
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </>
  );
}
