import { motion } from "framer-motion";


import { styles } from "../styles";
import { cn } from "../utils/lib";


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
    </section>
  );
};
