"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Addition from "../sections/Addition";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="flex">
      <div
        className="container mx-auto max-w-full pb-10"
        ref={containerRef}
      >
        <div className="pt-15 pb-15 md:pb-0">
          <div className="text-heading font-black text-center mb-5 sm:text-left px-5">
            Voluntary Experience
          </div>
          <p className="px-5 sm:px-5 text-neutral-400 dark:text-neutral-300 text-sm md:text-xl max-w-sm text-justify">
            Currently a Backend Developer at CommIT Society
          </p>
        </div>
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              {/* Tablet/Desktop Version */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                
                <div className="h-10 absolute left-3 md:left-5 w-10 rounded-full bg-neutral-300 dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-500 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden w-200 md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-400 dark:text-neutral-500 text-justify">
                  <p className="text-lg text-neutral-500">{item.date}</p>
                  {item.title}
                </h3>
              </div>

              {/* Mobile Version */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 font-bold text-neutral-500 dark:text-neutral-500 text-start">
                  {item.title}
                  <p className="text-sm">{item.date}</p>
                </h3>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-10 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
      <Addition />
    </section>
  );
};
