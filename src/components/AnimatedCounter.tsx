"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import type { MotionStyle } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  value: string;
  className?: string;
  style?: MotionStyle;
  delay?: number;
}

export default function AnimatedCounter({ value, className = "", style = {}, delay = 0 }: Props) {
  // Parsing robusto del texto (ej. "$250M+", "180+", "8.2x")
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = value.substring(0, numericMatch ? value.indexOf(numericMatch[0]) : 0);
  const suffix = numericMatch ? value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length) : "";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  // Resorte matemático calibrado para máxima serenidad
  const spring = useSpring(0, {
    stiffness: 30,
    damping: 18,
    mass: 1.5
  });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        spring.set(numericValue);
      }, delay * 1000);
    }
  }, [isInView, numericValue, spring, delay]);

  const display = useTransform(spring, (current) => {
    const isDecimal = numericValue % 1 !== 0;
    return `${prefix}${current.toFixed(isDecimal ? 1 : 0)}${suffix}`;
  });

  return (
    <motion.div ref={ref} className={className} style={style}>
      {display}
    </motion.div>
  );
}
