import { useEffect, useRef, useState, type ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { tokens as t } from "../theme";

/** Centered content column matching the design max-width. */
export function Wrap({ children, sx = {} }: { children: ReactNode; sx?: object }) {
  return (
    <Box sx={{ width: "100%", maxWidth: t.maxw, mx: "auto", px: 3, ...sx }}>{children}</Box>
  );
}

/** Fade + rise into view on scroll. */
export function Reveal({
  children,
  delay = 0,
  sx = {},
}: {
  children: ReactNode;
  delay?: number;
  sx?: object;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(22px)",
        transition: `opacity .7s ${t.ease}, transform .7s ${t.ease}`,
        transitionDelay: `${delay}ms`,
        "@media (prefers-reduced-motion: reduce)": {
          opacity: 1,
          transform: "none",
          transition: "none",
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

/** Monospace "// label" used above section titles. */
export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <Typography
      component="p"
      sx={{
        fontFamily: t.fontMono,
        fontSize: "0.78rem",
        letterSpacing: "0.06em",
        color: t.accent,
        textTransform: "lowercase",
        mb: "18px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: center ? "center" : "flex-start",
        gap: 1,
        "&::before": {
          content: '""',
          width: 26,
          height: "1px",
          background: t.accentLine,
        },
      }}
    >
      {children}
    </Typography>
  );
}

export function SectionTitle({ children, sx = {} }: { children: ReactNode; sx?: object }) {
  return (
    <Typography
      component="h2"
      sx={{
        fontFamily: t.fontDisplay,
        fontWeight: 400,
        fontSize: "clamp(2rem, 5vw, 3.1rem)",
        lineHeight: 1.05,
        letterSpacing: "-0.01em",
        m: 0,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
