import { motion } from "framer-motion";


import { styles } from "../styles";
import { cn } from "../utils/lib";
import image from '../assets/rdpic-removebg-preview.png';


// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5",
        )}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi, I'm <span className="text-[#915eff]">Reuben Palabasan</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            I am a software developer <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      {/* Computer Model */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <img src={image} alt="Preview" style={{ maxWidth: '100%', height: 'auto', marginTop: '31rem' }} />
</div>



      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
