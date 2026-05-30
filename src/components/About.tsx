import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { tokens as t } from "../theme";
import { Wrap, Reveal, Eyebrow, SectionTitle } from "./common";
import { availabilityMeta, profile } from "../data/projects";

const status = availabilityMeta[profile.status];

const FACTS: { label: string; value: React.ReactNode }[] = [
  { label: "based in", value: "Rio de Janeiro, Brazil" },
  { label: "role", value: "Back-end Developer" },
  {
    label: "core stack",
    value: (
      <>
        <Box component="span" sx={{ color: t.accent }}>C#</Box> · .NET · Docker
      </>
    ),
  },
  {
    label: "status",
    value: (
      <Box component="span" sx={{ color: status.highlight ? t.accent : t.text }}>
        {status.label}
      </Box>
    ),
  },
];

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: "64px", md: "130px" } }}>
      <Wrap
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
          gap: { xs: 4, md: 10 },
          alignItems: "start",
        }}
      >
        <Box>
          <Eyebrow>about</Eyebrow>
          <Reveal>
            <SectionTitle>
              A bit
              <br />
              about me
            </SectionTitle>
          </Reveal>
        </Box>

        <Reveal>
          <Box sx={{ "& p": { color: t.muted, mb: 2.25 }, "& strong": { color: t.text, fontWeight: 600 } }}>
            <Typography component="p">
              I build the parts of software that users never see but always feel —{" "}
              <strong>APIs, services and data pipelines</strong> that stay fast and predictable
              under load.
            </Typography>
            <Typography component="p">
              My work centres on <strong>scalable, maintainable and efficient systems</strong>:
              clean architecture, sensible abstractions and code that the next engineer can read
              without a map. I enjoy the less glamorous wins — observability, messaging, storage —
              where good decisions quietly pay off for years.
            </Typography>
            <Typography component="p">
              Always learning, always refining. Mostly from a terminal, on Arch.
            </Typography>

            <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, mt: 1 }}>
              {FACTS.map((f, i) => (
                <Box
                  component="li"
                  key={f.label}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                    py: 1.75,
                    borderTop: `1px solid ${t.border}`,
                    borderBottom: i === FACTS.length - 1 ? `1px solid ${t.border}` : "none",
                    fontFamily: t.fontMono,
                    fontSize: "0.85rem",
                  }}
                >
                  <Box component="span" sx={{ color: t.faint }}>{f.label}</Box>
                  <Box component="span" sx={{ color: t.text, textAlign: "right" }}>{f.value}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </Wrap>
    </Box>
  );
}
