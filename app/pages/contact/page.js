"use client";
import React from "react";
import Contact from "@/app/components/Contact";
import Hero from "@/app/components/Hero";
import { motion } from "framer-motion";
const contact = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <Hero
        heading="Contact"
        message="Submit the form below for more work and quotes."
      />
      <Contact />
    </motion.div>
  );
};

export default contact;
