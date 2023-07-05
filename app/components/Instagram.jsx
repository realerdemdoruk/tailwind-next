import React from "react";
import IgImg1 from "../../public/ig-img-1.jpeg";
import IgImg2 from "../../public/ig-img-2.jpeg";
import IgImg3 from "../../public/ig-img-3.jpeg";
import IgImg4 from "../../public/ig-img-4.jpeg";
import IgImg5 from "../../public/ig-img-5.jpeg";
import IgImg6 from "../../public/ig-img-6.jpeg";
import InstagramImg from "./InstagramImg";

import { motion } from "framer-motion";

const item = {
  hidden: {
    opacity: 0,
    translateY: 50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};
const container = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@realerdemdoruk</p>
      <div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4"
      >
        <motion.span variants={item}>
          <InstagramImg socialImg={IgImg1} />
        </motion.span>
        <motion.span variants={item}>
          <InstagramImg socialImg={IgImg2} />
        </motion.span>
        <motion.span variants={item}>
          <InstagramImg socialImg={IgImg3} />
        </motion.span>
        <motion.span variants={item}>
          <InstagramImg socialImg={IgImg4} />
        </motion.span>
        <motion.span variants={item}>
          <InstagramImg socialImg={IgImg5} />
        </motion.span>
        <motion.span variants={item}>
          <InstagramImg socialImg={IgImg6} />
        </motion.span>
      </div>
    </div>
  );
};

export default Instagram;
