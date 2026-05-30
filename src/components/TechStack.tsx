import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { tokens as t } from "../theme";
import { Wrap, Reveal, Eyebrow, SectionTitle } from "./common";

const GROUPS: { idx: string; title: string; items: string[] }[] = [
  { idx: "01", title: "Back-end", items: ["C#", ".NET", "ASP.NET Core", "Java", "Kotlin", "Spring"] },
  { idx: "02", title: "Front-end", items: ["TypeScript", "JavaScript", "React", "HTML", "CSS", "Bootstrap"] },
  { idx: "03", title: "Data", items: ["SQL Server", "MySQL", "MongoDB"] },
  { idx: "04", title: "Infra & DevOps", items: ["Docker", "AWS", "Apache Kafka", "Prometheus", "Grafana", "Linux"] },
];

export default function TechStack() {
  return (
    <Box component="section" id="stack" sx={{ py: { xs: "64px", md: "130px" } }}>
      <Wrap>
        <Eyebrow>stack</Eyebrow>
        <Reveal>
          <SectionTitle sx={{ mb: 1.75 }}>Tools of the trade</SectionTitle>
        </Reveal>
        <Reveal>
          <Typography sx={{ color: t.muted, maxWidth: "56ch", mb: "46px" }}>
            The technologies I reach for when building and shipping back-end services.
          </Typography>
        </Reveal>

        <Reveal>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: "1px",
              background: t.border,
              border: `1px solid ${t.border}`,
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            {GROUPS.map((g) => (
              <Box
                key={g.idx}
                sx={{
                  background: t.bg,
                  p: { xs: "26px 20px", md: "26px 32px" },
                  transition: "background .25s",
                  "&:hover": { background: t.surface },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: t.fontMono,
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    color: t.muted,
                    textTransform: "uppercase",
                    mb: 2.25,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box component="span" sx={{ color: t.accent }}>{g.idx}</Box> {g.title}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {g.items.map((item) => (
                    <Chip key={item} label={item} />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Reveal>
      </Wrap>
    </Box>
  );
}
