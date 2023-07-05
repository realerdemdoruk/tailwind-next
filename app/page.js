"use client";
import Image from "next/image";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";
import Instagram from "./components/Instagram";
import { motion } from "framer-motion";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Home() {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Hero
        heading="Virtue Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Slider slides={SliderData} />
      <Instagram />
    </motion.div>
  );
}
