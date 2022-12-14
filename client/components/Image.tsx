import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Img from 'next/image';

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
const getLink = [
    "",
    "https://i.postimg.cc/pdCF1SsF/BTP-01.jpg",
    "https://i.postimg.cc/c4dvtW0G/BTP-02.jpg",
    "https://i.postimg.cc/TYQprs3L/BTP-03.jpg",
    "https://i.postimg.cc/Cx1dJ4Rv/BTP-04.jpg",
    "https://i.postimg.cc/wxXtBMKk/BTP-05.jpg",
    "https://i.postimg.cc/ZnVX57WG/Copy-of-BTP-Presentation-Mid-Sem-7th-Semester-page-0006.jpg",
    "https://i.postimg.cc/DfjCmbj3/Copy-of-BTP-Presentation-Mid-Sem-7th-Semester-page-0007.jpg",
    "https://i.postimg.cc/LX0z4jHy/Copy-of-BTP-Presentation-Mid-Sem-7th-Semester-page-0008.jpg",
    "https://i.postimg.cc/TP3QJV39/Copy-of-BTP-Presentation-Mid-Sem-7th-Semester-page-0009.jpg",
    "https://i.postimg.cc/X7n55VJK/Copy-of-BTP-Presentation-Mid-Sem-7th-Semester-page-0010.jpg",
    "https://i.postimg.cc/brmwkfCL/Copy-of-BTP-Presentation-Mid-Sem-7th-Semester-page-0011.jpg",
    "https://i.postimg.cc/440C73wq/Copy-of-BTP-Presentation-Mid-Sem-7th-Semester-page-0012.jpg"
]

export function Image({ alt, category, index, aspectRatio }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, "50vh");
  let link = getLink[index];

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
        <Img src={`${getLink[index]}`} alt={alt} width={500} height={500}/>
      </div>
      <motion.h2
        style={{ y }}
        initial={{ x: 100 }}
        animate={{ x: 0, transition: { delay: 0.5, duration: 1, ease } }}
      >{`#0${index}`}</motion.h2>
    </motion.section>
  );
}
