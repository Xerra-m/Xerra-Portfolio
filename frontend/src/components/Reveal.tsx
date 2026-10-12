import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right";

interface RevealProps {
    children: ReactNode;
    direction?: RevealDirection;
    duration?: number;
    distance?: number;
    delay?: number;
    className?: string;
}

const directions: Record<RevealDirection, { x: number; y: number }> = {
    up: { x: 0, y: 24 },
    down: { x: 0, y: -24 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 }
};

function Reveal({
    children,
    direction = "up",
    duration = 0.6,
    distance = 24,
    delay = 0,
    className
}: RevealProps) {
    const offset = directions[direction];
    const variants: Variants = {
        hidden: {
            opacity: 0,
            x: offset.x ? Math.sign(offset.x) * distance : 0,
            y: offset.y ? Math.sign(offset.y) * distance : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default Reveal;
