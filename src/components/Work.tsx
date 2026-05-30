import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { tokens as t } from "../theme";
import { Wrap, Reveal, Eyebrow, SectionTitle } from "./common";
import { projects, links, type Project } from "../data/projects";

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const num = String(i + 1).padStart(2, "0");
  return (
    <Reveal delay={(i % 3) * 80} sx={{ height: "100%" }}>
      <Link
        href={p.repo}
        target="_blank"
        rel="noopener"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: t.surface,
          border: `1px solid ${t.border}`,
          borderRadius: "14px",
          p: "26px 24px 22px",
          position: "relative",
          overflow: "hidden",
          transition: `transform .3s ${t.ease}, border-color .25s, background .25s`,
          "&::after": {
            content: '""',
            position: "absolute",
            inset: "0 0 auto 0",
            height: "2px",
            background: t.accent,
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: `transform .35s ${t.ease}`,
          },
          "&:hover": { transform: "translateY(-6px)", borderColor: t.borderStrong, background: t.surface2 },
          "&:hover::after": { transform: "scaleX(1)" },
          "&:hover .arrow": { color: t.accent, transform: "translate(3px,-3px)" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Box component="span" sx={{ fontFamily: t.fontMono, fontSize: "0.75rem", color: t.faint }}>
            {num}
          </Box>
          <Box
            component="i"
            className="arrow fa-solid fa-arrow-up-right-from-square"
            sx={{ color: t.faint, fontSize: 14, transition: `color .25s, transform .25s ${t.ease}` }}
          />
        </Box>
        <Typography component="h3" sx={{ fontFamily: t.fontMono, fontSize: "1.05rem", fontWeight: 600, mb: 1.25, letterSpacing: "-0.01em", color: t.text }}>
          {p.name}
        </Typography>
        <Typography sx={{ color: t.muted, fontSize: "0.95rem", mb: 2.5, flexGrow: 1 }}>
          {p.description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.9 }}>
          {p.tags.map((tag) => (
            <Box
              key={tag}
              component="span"
              sx={{
                fontFamily: t.fontMono,
                fontSize: "0.72rem",
                color: t.muted,
                px: 1.1,
                py: 0.4,
                border: `1px solid ${t.border}`,
                borderRadius: "6px",
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Link>
    </Reveal>
  );
}

export default function Work() {
  return (
    <Box component="section" id="work" sx={{ py: { xs: "64px", md: "130px" } }}>
      <Wrap>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 3,
            flexWrap: "wrap",
            mb: "44px",
          }}
        >
          <Box>
            <Eyebrow>work</Eyebrow>
            <Reveal>
              <SectionTitle>Selected projects</SectionTitle>
            </Reveal>
          </Box>
          <Reveal>
            <Button variant="outlined" href={links.github} target="_blank" rel="noopener">
              All repositories <Box component="i" className="fa-solid fa-arrow-up-right-from-square" />
            </Button>
          </Reveal>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" },
            gap: 2.5,
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i} />
          ))}
        </Box>
      </Wrap>
    </Box>
  );
}
