import { createTheme } from "@mui/material/styles";

/** Design tokens — single source of truth for the whole UI. */
export const tokens = {
  bg: "#0b0b0d",
  bg2: "#0e0e11",
  surface: "#141418",
  surface2: "#1a1a20",
  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.16)",
  text: "#ededeb",
  muted: "#9a9aa3",
  faint: "#66666f",
  accent: "#4d9fff",
  accentSoft: "rgba(77,159,255,0.14)",
  accentLine: "rgba(77,159,255,0.35)",
  fontDisplay: '"Instrument Serif", Georgia, serif',
  fontBody: '"IBM Plex Sans", system-ui, sans-serif',
  fontMono: '"JetBrains Mono", ui-monospace, monospace',
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
  maxw: 1140,
} as const;

const t = tokens;

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: t.accent, contrastText: "#0b0b0d" },
    background: { default: t.bg, paper: t.surface },
    text: { primary: t.text, secondary: t.muted },
    divider: t.border,
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: t.fontBody,
    button: { textTransform: "none", fontFamily: t.fontMono, fontWeight: 500 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth", scrollPaddingTop: "90px" },
        body: {
          backgroundColor: t.bg,
          color: t.text,
          backgroundImage: `radial-gradient(circle at 50% -10%, rgba(77,159,255,0.06), transparent 55%),
                            radial-gradient(${t.border} 1px, transparent 1px)`,
          backgroundSize: "auto, 28px 28px",
          backgroundAttachment: "fixed",
          WebkitFontSmoothing: "antialiased",
        },
        "::selection": { background: t.accent, color: "#0b0b0d" },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontSize: "0.85rem",
          padding: "10px 22px",
          gap: 9,
          transition: `transform .2s ${t.ease}, border-color .2s, background .2s, color .2s`,
          "&:hover": { transform: "translateY(-2px)" },
        },
        outlined: {
          borderColor: t.borderStrong,
          color: t.text,
          "&:hover": { borderColor: t.accent, color: t.accent, background: "transparent" },
        },
        contained: {
          fontWeight: 600,
          "&:hover": { boxShadow: `0 8px 30px -8px ${t.accentLine}` },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: t.fontMono,
          fontSize: "0.8rem",
          height: "auto",
          padding: "5px 4px",
          borderRadius: 8,
          border: `1px solid ${t.borderStrong}`,
          background: "rgba(255,255,255,0.015)",
          color: t.text,
          transition: `border-color .2s, color .2s, transform .2s ${t.ease}`,
          "&:hover": { borderColor: t.accent, color: t.accent, transform: "translateY(-2px)" },
        },
        label: { padding: "0 8px" },
      },
    },
    MuiLink: { defaultProps: { underline: "none" } },
  },
});
