import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedWrapperProps {
    children: React.ReactNode
}

export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({children}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    
    const animationVariants = {
        hidden: { opacity: 0, translateY: 30 },
        visible: { opacity: 1, translateY: 0 },
    };
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5 }}
            variants={animationVariants}
        >
        {children}
        </motion.div>
    )
}