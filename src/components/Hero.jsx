import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { PlanetsData } from '../data/MockData'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { SlideRight } from '../utility/animation'


const Hero = () => {

    const [activeData, setActiveData] = useState(PlanetsData[1])
    const [currIndex, setCurrIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrIndex((prev) => (prev + 1) % PlanetsData.length)
        }, 5000) //Change the hro every 2.5 sec

        return () => clearInterval(interval)
    }, [currIndex])

    useEffect(() => {
        setActiveData(PlanetsData[currIndex])
    }, [currIndex])

    return (
        <motion.section
            initial={{backgroundImage: `radial-gradient(circle, ${activeData.bgColor} 0%, ${activeData.bgColor} 0%)`}}
            
            animate={{backgroundImage: `radial-gradient(circle, ${activeData.bgColor} 0%, ${activeData.bgColor} 100%)`}}
            transition={{ duration: 0.8}}

            className='hero bg-gradient-to-br from-zinc-900 to-black text-white h-screen'>
            <Navbar />
            <div className="container grid grid-cols-1 md:grid-cols-2 h-screen md:h-[700px] relative">

                {/* Info Section */}
                <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1 '>
                    <div className='space-y-5 md:space-y-7 text-center md:text-left'>
                        <AnimatePresence mode='wait'>
                            <motion.h1
                                key={activeData.id}
                                variants={SlideRight(0.2)}
                                initial="hidden"
                                animate="show"
                                exit='exit'
                                className='text-3xl lg:text-4xl xl:text-7xl font-bold'>
                                    {activeData.title}
                            </motion.h1>
                        </AnimatePresence>
                        <AnimatePresence mode='wait'>
                            <motion.p
                                key={activeData.id}
                                variants={SlideRight(0.4)}
                                initial="hidden"
                                animate="show"
                                exit='exit'
                                className='text-lg leading-loose text-white/80'
                            >
                                {activeData.subTitle}
                            </motion.p>
                        </AnimatePresence>

                        <AnimatePresence mode='wait'>
                            <motion.p
                                className='text-3xl lg:text-3xl xl:text-3xl font-bold'
                                key={activeData.id}
                                variants={SlideRight(0.6)}
                                initial="hidden"
                                animate="show"
                                exit='exit'
                            >
                                    {activeData.fact}
                            </motion.p>
                        </AnimatePresence>
                        {/* Social Icons Section */}
                        <div className='flex items-center justify-center md:justify-start gap-4 text-3xl'>
                            <FaInstagram className='cursor-pointer border rounded-full p-[6px]' />
                            <FaFacebook className='cursor-pointer border rounded-full p-[6px]' />
                            <FaTwitter className='cursor-pointer border rounded-full p-[6px]' />
                        </div>

                    </div>
                </div>

                {/* Image Section */}
                <div className='flex flex-col items-center justify-center order-1 md:order-2 relative'>
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={activeData.id}
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{ duration: 0.4, ease: easeInOut, delay: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        src={activeData.image} 
                        alt={activeData.title}
                        className='w-[300px] md:w-[400px] xl:w-[500px] h-[300px] md:h-[400px] xl:h-[500px] relative z-10 rounded-3xl object-cover'
                    />
                </AnimatePresence>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeData.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.4, ease: easeInOut, delay: 0 }}
                        exit={{ opacity: 0}}
                        className='text-[300px] absolute top-20 left-24 -translate-x-1/2 -translate-y-1/2 z-0 text-white/10 font-extrabold'
                    >
                        {activeData.modal}
                    </motion.div>
                </AnimatePresence>
                </div>

                {/* ChatBot icon */}
                <div className='absolute bottom-10 right-10 z-[999]'>
                    <FaMessage className='text-3xl cursor-pointer' />
                </div>
            </div>
        </motion.section>
    )
}

export default Hero