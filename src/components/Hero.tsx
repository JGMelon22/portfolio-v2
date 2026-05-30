import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { tokens as t } from "../theme";
import { Wrap, Reveal } from "./common";
import { links, profile } from "../data/projects";

function TerminalCard() {
  const line = (children: React.ReactNode) => (
    <Box component="div" sx={{ whiteSpace: "pre" }}>{children}</Box>
  );
  const k = (s: string) => <Box component="span" sx={{ color: t.accent }}>{s}</Box>;
  const str = (s: string) => <Box component="span" sx={{ color: "#9ece6a" }}>{s}</Box>;

  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, ${t.surface}, ${t.bg2})`,
        border: `1px solid ${t.border}`,
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 30px 80px -40px rgba(0,0,0,0.9)",
        maxWidth: { xs: 460, md: "none" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.9,
          px: 2,
          py: 1.5,
          borderBottom: `1px solid ${t.border}`,
          background: "rgba(255,255,255,0.02)",
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <Box key={c} sx={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
        ))}
        <Typography sx={{ fontFamily: t.fontMono, fontSize: "0.72rem", color: t.faint, ml: 1 }}>
          ~/joao-gabriel — zsh
        </Typography>
      </Box>
      <Box sx={{ fontFamily: t.fontMono, fontSize: { xs: "0.7rem", sm: "0.82rem" }, lineHeight: 1.9, p: "20px 20px 24px", color: t.text, overflowX: "auto" }}>
        {line(<Box component="span" sx={{ color: t.faint }}>// profile.json</Box>)}
        {line(<Box component="span" sx={{ color: t.muted }}>{"{"}</Box>)}
        {line(<>{"  "}{k('"role"')}: {str('"Back-end Developer"')},</>)}
        {line(<>{"  "}{k('"location"')}: {str('"Rio de Janeiro, BR"')},</>)}
        {line(<>{"  "}{k('"company"')}: {str(`"${profile.company}"`)},</>)}
        {line(<>{"  "}{k('"focus"')}: {str('["architecture", "performance"]')},</>)}
        {line(<>{"  "}{k('"daily"')}: {str('["C#", ".NET", "Docker"]')},</>)}
        {line(<>{"  "}{k('"os"')}: {str('"Arch Linux 🐧"')}</>)}
        {line(<Box component="span" sx={{ color: t.muted }}>{"}"}</Box>)}
      </Box>
    </Box>
  );
}

export default function Hero() {
  return (
    <Box component="section" sx={{ py: { xs: "70px", md: "150px" }, pb: { xs: "50px", md: "100px" } }}>
      <Wrap
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
          gap: { xs: 4, md: 9 },
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: t.fontMono, fontSize: "0.85rem", color: t.muted, mb: 3 }}>
            <Box component="span" sx={{ color: t.accent }}>$</Box> whoami
            <Box
              component="span"
              className="blink"
              sx={{
                display: "inline-block",
                width: 8,
                height: "1.05em",
                background: t.accent,
                ml: "2px",
                transform: "translateY(2px)",
              }}
            />
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontFamily: t.fontDisplay,
              fontWeight: 400,
              fontSize: "clamp(2.7rem, 7.5vw, 5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.015em",
              mb: 3,
            }}
          >
            Back-end engineer
            <br />
            building systems that{" "}
            <Box component="em" sx={{ fontStyle: "italic", color: t.accent }}>
              scale
            </Box>
            .
          </Typography>

          <Typography sx={{ color: t.muted, fontSize: "1.08rem", maxWidth: "50ch", mb: 4 }}>
            I'm João Gabriel, a back-end developer from Rio de Janeiro focused on scalable,
            maintainable and efficient systems — with a soft spot for architecture, performance
            and clean, reliable code.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.75 }}>
            <Button variant="contained" href="#work">
              View work <Box component="i" className="fa-solid fa-arrow-right-long" />
            </Button>
            <Button variant="outlined" href={links.github} target="_blank" rel="noopener">
              <Box component="i" className="fa-brands fa-github" /> GitHub
            </Button>
          </Box>
        </Box>

        <Reveal sx={{ order: { xs: -1, md: 0 } }}>
          <TerminalCard />
        </Reveal>
      </Wrap>
    </Box>
  );
}
