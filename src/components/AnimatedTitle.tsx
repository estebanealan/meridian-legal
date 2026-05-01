import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

interface Props {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export default function AnimatedTitle({
  children,
  as: Tag = "h2",
  className = "",
  style = {},
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    // El wrapper solo controla overflow — NO tiene dimensiones que alteren el layout
    <div ref={ref} style={{ overflow: "hidden", display: "block" }}>
      <motion.div
        initial={{ y: "105%", opacity: 0 }}
        animate={
          isInView
            ? { y: 0, opacity: 1 }
            : { y: "105%", opacity: 0 }
        }
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {/* El Tag (h1/h2/h3…) conserva TODOS sus estilos originales intactos */}
        <Tag className={className} style={style}>
          {children}
        </Tag>
      </motion.div>
    </div>
  );
}
