import './App.scss';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {IoMailOutline, IoStar} from 'react-icons/io5';
import {IconContext} from "react-icons";
import Card from './component/Card';
import {motion, useAnimation, SVGMotionProps} from 'framer-motion';
import React, {useState, useEffect} from 'react';

let easeing = [0.6,-0.05,0.01,0.99];

const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const fadeInUp = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.6, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easeing
    }
  }
};

const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};

const firstName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}

const lastName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}

const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:1, ...transition}
  }
};

const btnGroup={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.6, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};
const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};
const star={
  initial:{
    y:60,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};
const starVariants = {
  initial:{
    y:60,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
  },
  animate: i => ({
    y:0,
    opacity:1,
    transition: {
      delay: i * .04,
      duration: .25,
      type: 'spring',
      stiffness: 175
    }
  }),
  hovered: {
    scale: .8,
    transition: {
      duration: .2
    }
  }
}

const Star = ({ i, isHoveringWrapper, isClicked }) => {
  const [isHovering, setIsHovering] = useState(false);
  const starControls = useAnimation();
  const backgroundControls = useAnimation();
  useEffect(() => {
    if (isClicked && isHovering) starControls.start('hovered');
    else if (isClicked) starControls.start('animate');
    else starControls.start('exit');
  }, [isClicked, isHovering]);
  useEffect(() => {
    if (isHoveringWrapper) backgroundControls.start({ background: '#4651bb'});
    else backgroundControls.start({ background: '#aaaaaa' });
  }, [isHoveringWrapper]);
  return (
    <>
      <motion.div 
        className="star-background" 
        initial={{ background: '#aaaaaa' }}
        animate={backgroundControls}>
          <IoStar></IoStar>
        </motion.div>
      <motion.i 
        className="fas fa-star" 
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        variants={starVariants}
        initial="initial"
        animate={starControls}
        custom={i}
      />
    </>
  )
}




function App() {
  const [isClicked, setIsClicked] = useState(0);
  const [isHovering, setIsHovering] = useState(4);

  return (
    <motion.div initial='initial' animate='animate'>
      <motion.header variants={stagger}>
          <motion.div className="logo_wrapper" variants={header}>Reid <span> Carolan</span></motion.div>
          <motion.div className="menu_container" variants={stagger}>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px", className:"icons_container"}}>
                <div className="icon">
                  <a href='https://github.com/reicaro' target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                  </a>
                  </div>
                <div className="icon">
                  <a href='https://www.linkedin.com/in/reid-carolan-b1b005226/' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                  </a>
                </div>
              </IconContext.Provider>
            </motion.span>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px"}}>
                <div className="icon"><IoMailOutline/></div>
                reid@taga.finance
              </IconContext.Provider>
            </motion.span>
            <motion.span className="menu" variants={header}>
              <motion.img src={process.env.PUBLIC_URL + '/images/tempportlogo.png'} alt="line" className="line" width="100%" whileHover={{y: -10}}/> 
            </motion.span>
          </motion.div>
      </motion.header>

      <motion.div className="content_wrapper" initial={{opacity:0,scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.3, ease:easeing}}>
        <div className="left_content_wrapper">

          <motion.h2>

            <motion.span variants={firstName} initial="initial" animate="animate" className='first'>
                <motion.span variants={letter}>D</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>g</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>,</motion.span>
                <motion.span variants={letter} className="second">s</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>f</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>w</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>,</motion.span>
            </motion.span>
            <motion.span variants={lastName} initial="initial" animate="animate" className='last'>
            <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter} className="second">b</motion.span>
                <motion.span variants={letter}>u</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>s.</motion.span>
            </motion.span>
          </motion.h2>

          <motion.p variants={fadeInUp}>Connect if you have questions, or check out my current project, Taga!</motion.p>

          <motion.div className="btn_group" variants={stagger}>
            <motion.div className="btn btn_primary" variants={btnGroup} whileHover={{scale:1.05}} href='https://www.taga.finance' whileTap={{scale:0.95}}>
                <a href="mailto:reid@taga.finance" target="_blank" rel="noopener noreferrer">
                    <span style={{color:'#fff'}}>Reach Out</span>
                </a>
            </motion.div>
            <motion.div className="btn btn_secondary" variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>
              <a href="https://www.taga.finance" target="_blank" rel="noopener noreferrer">
                    <span style={{color:'#fff'}}>Taga</span>
                </a>
            </motion.div>
          </motion.div>


          <motion.div className="review_container" variants={stagger}>
            <motion.p className="total_review" variants={star}>Product Hunt</motion.p>
            <IconContext.Provider value={{color:"#fff", size:"18px"}}>
                  <div className="star-rating">
                    <div className="stars-container">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <a href="https://producthunt.com/posts/taga" target="_blank" rel="noopener noreferrer">
                        <motion.div 
                          variants={star}
                          className="star-wrapper"
                          onMouseOver={() => [setIsHovering(i)]}
                          onClick={() => setIsClicked(i)}
                          whileHover={{scale:1.2, borderRadius:'100%',cursor:'pointer'}}
                          key={i}
                        >
                          <Star 
                            i={i} 
                            isHoveringWrapper={isHovering >= i} 
                            isClicked={isClicked >= i}
                          />
                        </motion.div>
                        </a>
                      ))}
                    </div>
                  </div>
            </IconContext.Provider>
            <motion.p className="more_review" variants={star}>Upvote Taga on Product Hunt! (Coming soon)</motion.p>
          </motion.div>
        </div>

        <motion.div className="right_content_wrapper"> 
          <motion.img src={process.env.PUBLIC_URL + '/images/bg.png'} alt="bg" initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}}/>
        </motion.div>
      </motion.div>
      <Card/>
    </motion.div>
  );
}

export default App;