import React from 'react';
import {IoChevronForward, IoPieChart} from "react-icons/io5";
import {IconContext} from "react-icons";
import {motion} from 'framer-motion';

const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};

const item = {
    hidden:{opacity:0,y:100},
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration:.2
        }
    }
}

const hoverEffect = {
    whileHover:{
        scale:1.5,rotate:360,borderRadius:"100%"
    },
    whileTap:{
        scale:.8,rotate:360,borderRadius:"100%"
    },
}



function Card() {
  return (
    <motion.div className="service_container">
        <div className="title_wrapper">
            <motion.span className="service_title"
                initial={{y:20, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1.8}}
            >My Work</motion.span>
            <motion.h2
                initial={{y:200, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1}}
            >Academic, Creative, and <br/>Work Projects.</motion.h2>
        </div>


        <motion.div className="service_card" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>

            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ddfbf9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#14da8f", size:"22px"}}>
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="line" className="line" width="65%"/> 
                    </IconContext.Provider>
                </motion.span>
                <h3>Taga<br/>Equity Marketplace</h3>
                <a href="https://www.taga.finance" target="_blank" rel="noopener noreferrer">
                    <span style={{color:'#000'}}>See more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>

            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#e7daf8"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#5700cf", size:"22px"}}>
                        <img src={process.env.PUBLIC_URL + '/images/chearn.png'} alt="line" className="line" width="75%"/> 
                    </IconContext.Provider>
                </motion.span>
                <h3>Chearn<br/>Credit Optimizer</h3>
                <a href="https://github.com/reicaro/chearner" target="_blank" rel="noopener noreferrer">
                    <span style={{color:'#000'}}>See more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffede6"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#ff8559", size:"22px"}}>
                        <img src={process.env.PUBLIC_URL + '/images/unsch.png'} alt="line" className="line" width="75%"/> 
                    </IconContext.Provider>
                </motion.span>
                <h3>Unschedule<br/>Full-Stack Engineer</h3>
                <a href="https://unschedule.io" target="_blank" rel="noopener noreferrer">
                    <span style={{color:'#000'}}>See more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffe1e9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#fa3970", size:"22px"}}>
                        <img src={process.env.PUBLIC_URL + '/images/reachcap.png'} alt="line" className="line" width="85%"/> 
                    </IconContext.Provider>
                </motion.span>
                <h3>Reach<br/>Data Analyst</h3>
                <a href="https://reachcapital.com" target="_blank" rel="noopener noreferrer">
                    <span style={{color:'#000'}}>See more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#fffada"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#f1df11", size:"22px"}}>
                        <img src={process.env.PUBLIC_URL + '/images/alpha.png'} alt="line" className="line" width="95%"/> 
                    </IconContext.Provider>
                </motion.span>
                <h3>Alphag3n<br/>Coinbase & Stanford</h3>
                <a href="https://alphag3n.com" target="_blank" rel="noopener noreferrer">
                    <span style={{color:'#000'}}>See more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#dcedff"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#56a8f4", size:"22px"}}>
                        <img src={process.env.PUBLIC_URL + '/images/fig.png'} alt="line" className="line" width="75%"/> 
                    </IconContext.Provider>
                </motion.span>
                <h3>Designs<br/>UI/UX in Figma</h3>
                <a href="https://figma.com/@moron" target="_blank" rel="noopener noreferrer">
                    <span style={{color:'#000'}}>See more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#dbf9ed"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#06d786", size:"22px"}}>
                        <IoPieChart/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Research<br/>(In Progress)</h3>
                <a href="">
                    <span style={{color:'#000'}}>See more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card dark" variants={item}>    
                <h2>& more...</h2>
                <a href="">
                    <span style={{color:'#fff'}}>I'll update this as I make/do more stuff</span>
                </a>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Card