import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { tokens as t } from "../theme";
import { Wrap } from "./common";
import { useActiveSection } from "../hooks";
import { links } from "../data/projects";

const NAV = [
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "work", label: "work" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV.map((n) => n.id));

  const linkSx = (id: string) => ({
    fontFamily: t.fontMono,
    fontSize: "0.82rem",
    color: active === id ? t.accent : t.muted,
    px: 1.5,
    py: 1,
    borderRadius: "8px",
    transition: "color .2s",
    "&:hover": { color: t.text },
    "& .hash": { color: t.faint },
  });

  const navLinks = NAV.map((n) => (
    <Link key={n.id} href={`#${n.id}`} sx={linkSx(n.id)} onClick={() => setOpen(false)}>
      <span className="hash">#</span>
      {n.label}
    </Link>
  ));

  const ghBtn = (
    <Link
      href={links.github}
      target="_blank"
      rel="noopener"
      sx={{
        fontFamily: t.fontMono,
        fontSize: "0.8rem",
        color: t.text,
        border: `1px solid ${t.borderStrong}`,
        borderRadius: 999,
        px: 2,
        py: 0.9,
        transition: "border-color .2s, color .2s",
        "&:hover": { borderColor: t.accent, color: t.accent },
      }}
    >
      GitHub ↗
    </Link>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(11,11,13,0.72)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${t.border}`,
      }}
    >
      <Wrap>
        <Toolbar disableGutters sx={{ minHeight: "68px !important", justifyContent: "space-between" }}>
          <Link
            href="#top"
            sx={{
              fontFamily: t.fontMono,
              fontWeight: 600,
              fontSize: "0.95rem",
              letterSpacing: "-0.02em",
              color: t.text,
            }}
          >
            jg<Box component="span" sx={{ color: t.accent }}>.</Box>dev
            <Box component="span" className="blink" sx={{ color: t.accent }}>_</Box>
          </Link>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {navLinks}
              {ghBtn}
            </Box>
          )}

          {isMobile && (
            <IconButton
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              sx={{
                border: `1px solid ${t.borderStrong}`,
                borderRadius: "8px",
                width: 42,
                height: 38,
                color: t.text,
              }}
            >
              <Box component="i" className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} sx={{ fontSize: 16 }} />
            </IconButton>
          )}
        </Toolbar>
      </Wrap>

      {isMobile && (
        <Collapse in={open}>
          <Box
            sx={{
              background: "rgba(11,11,13,0.97)",
              backdropFilter: "blur(12px)",
              borderBottom: `1px solid ${t.border}`,
              px: 3,
              pb: 2,
              display: "flex",
              flexDirection: "column",
              "& a": { py: 1.5 },
            }}
          >
            {navLinks}
            <Box sx={{ mt: 1 }}>{ghBtn}</Box>
          </Box>
        </Collapse>
      )}
    </AppBar>
  );
}
