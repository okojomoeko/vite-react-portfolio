import React from "react";
import { motion } from "framer-motion";
import { useWindowHeight } from "@react-hook/window-size";

export default function HeroSection() {
  const height = useWindowHeight();

  return (
    <>
      <motion.h1
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        style={{
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Hi, I&apos;m okojomoeko!!!!
      </motion.h1>
    </>
  );
}
