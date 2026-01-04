import React from 'react'
import { motion } from "framer-motion"

const Skill = ({ name, x, y }) => {
    return (
        <motion.div 
            className='flex items-center justify-center rounded-full font-semibold bg-dark
            text-light dark:bg-light dark:text-dark shadow-dark cursor-pointer absolute
            py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 lg:py-3 lg:px-6
            text-xs sm:text-sm md:text-base lg:text-base
            whitespace-nowrap'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{ 
                x: x, 
                y: y, 
                opacity: 1,
                transition: { duration: 1.5, ease: "easeOut" }
            }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    // Define skills with DIFFERENT positions for each breakpoint
    const skills = [
        // Top arc
        { name: "Next.js", x: "-15vw", y: "-12vw", xSm: "-20vw", ySm: "-15vw" },
        { name: "Vue.js", x: "0vw", y: "-15vw", xSm: "0vw", ySm: "-18vw" },
        { name: "Angular", x: "15vw", y: "-12vw", xSm: "20vw", ySm: "-15vw" },
        
        // Upper left
        { name: "JavaScript", x: "-20vw", y: "-6vw", xSm: "-25vw", ySm: "-8vw" },
        { name: "TypeScript", x: "-22vw", y: "0vw", xSm: "-27vw", ySm: "0vw" },
        { name: "React", x: "-18vw", y: "-10vw", xSm: "-22vw", ySm: "-12vw" },
        
        // Upper right
        { name: "Tailwind CSS", x: "18vw", y: "-10vw", xSm: "22vw", ySm: "-12vw" },
        { name: "PHP", x: "22vw", y: "0vw", xSm: "27vw", ySm: "0vw" },
        { name: "SEO", x: "20vw", y: "-6vw", xSm: "25vw", ySm: "-8vw" },
        
        // Middle left
        { name: "Node.js", x: "-20vw", y: "6vw", xSm: "-25vw", ySm: "8vw" },
        { name: "Express.js", x: "-17vw", y: "12vw", xSm: "-21vw", ySm: "15vw" },
        
        // Middle right
        { name: "Laravel", x: "20vw", y: "6vw", xSm: "25vw", ySm: "8vw" },
        { name: "RESTful API", x: "17vw", y: "12vw", xSm: "21vw", ySm: "15vw" },
        
        // Bottom left
        { name: "MongoDB", x: "-12vw", y: "15vw", xSm: "-15vw", ySm: "18vw" },
        { name: "MySQL", x: "-6vw", y: "17vw", xSm: "-7vw", ySm: "20vw" },
        
        // Bottom center
        // { name: "Flutter", x: "0vw", y: "18vw", xSm: "0vw", ySm: "21vw" },
        { name: "React Native", x: "6vw", y: "17vw", xSm: "7vw", ySm: "20vw" },
        
        // Bottom right
        { name: "WordPress", x: "12vw", y: "15vw", xSm: "15vw", ySm: "18vw" },
    ]

    return (
        <>
            <h2 className='font-bold mt-20 sm:mt-32 md:mt-48 lg:mt-64 
                w-full text-center mb-8 md:mb-16 
                px-4 dark:text-light
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl'>
                Skills
            </h2>

            <div 
                className='w-full h-[80vh] sm:h-[80vh] md:h-screen 
                relative flex items-center justify-center rounded-full 
                bg-circularLight dark:bg-circularDark overflow-visible lg:h-[80vh] xs:h-[50vh]
                lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                
                '
            >
                {/* Central Hub */}
                <motion.div 
                    className='flex items-center justify-center rounded-full font-semibold 
                    bg-dark text-light dark:bg-light dark:text-dark shadow-dark cursor-pointer z-10
                    p-4 sm:p-6 md:p-8
                    text-sm sm:text-base md:text-lg xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold lg:p-6 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Full Stack
                </motion.div>

                {/* Mobile/Tablet view (below md) */}
                <div className="md:hidden absolute inset-0 flex items-center justify-center">
                    {skills.map((skill, index) => (
                        <Skill 
                            key={`${skill.name}-mobile-${index}`}
                            name={skill.name}
                            x={skill.x}
                            y={skill.y}
                        />
                    ))}
                </div>

                {/* Desktop view (md and above) */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center">
                    {skills.map((skill, index) => (
                        <Skill 
                            key={`${skill.name}-desktop-${index}`}
                            name={skill.name}
                            x={skill.xSm}
                            y={skill.ySm}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills