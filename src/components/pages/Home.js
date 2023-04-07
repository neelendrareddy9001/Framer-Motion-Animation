import React from 'react';
import {motion} from 'framer-motion';
const routerVariants = {
    initial : {
      y : '100vh'
    },
    final : {
      y : '0vh',
      transition : {
        type : 'spring',
        mass : 0.4
      },
    }
  }
const childVariants = {
    initial : {
        opacity : 0,
        y : "50px",
    },
    final : {
        opacity : 1,
        y : "0px",
        transition : {
            duration : 0.5,
            delay : 0.5
        }
    }
}
const Home = () => {
  return (
    <motion.div 
        className='home component'
        variants = {routerVariants}
        initial="initial"
        animate = "final"
    >
        <motion.h1 variants={childVariants} initial="initial" animate="final">
            Home component
        </motion.h1>
    </motion.div>
  )
}

export default Home