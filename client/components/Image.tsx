import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: string) {
  return useTransform(value, [0, 1], ["-" + distance, distance]);
}

interface Props {
  alt: string;
  category: string;
  index: number;
  aspectRatio: string;
}

const ease = [0.08, 0.37, 0.45, 0.89];

export function Image({ alt, category, index, aspectRatio }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, "50vh");

  return (
    <motion.section
      variants={
        index === 1
          ? {
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 1, ease }
              }
            }
          : undefined
      }
    >
      <div ref={ref} style={{ aspectRatio }}>
        <img src={`https://i.postimg.cc/pdCF1SsF/${category}-${index}.jpg`} alt={alt} />
      </div>
      <motion.h2
        style={{ y }}
        initial={{ x: 100 }}
        animate={{ x: 0, transition: { delay: 0.5, duration: 1, ease } }}
      >{`#00${index}`}</motion.h2>
    </motion.section>
  );
}
