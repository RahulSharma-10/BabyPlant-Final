import { motion, useScroll, useSpring } from "framer-motion";
import { Image } from "./Image";

export interface PhotoMetadata {
  aspectRatio: string;
}

interface Props {
  alt: string;
  category: string;
  title: string;
  titleWidth: number;
  photos: PhotoMetadata[];
}

export function Gallery({ category, alt, title, titleWidth, photos }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.h1
        style={{ "--base-width": `${titleWidth}vw`, x: "-50%" } as any}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        {title}
      </motion.h1>
      {photos.map(({ aspectRatio }, index) => (
        <Image
          category={category}
          index={index + 1}
          alt={alt}
          aspectRatio={aspectRatio}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </motion.article>
  );
}
