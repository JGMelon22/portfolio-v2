import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { tokens as t } from "../theme";
import { Wrap, Reveal, Eyebrow } from "./common";
import { links } from "../data/projects";

export default function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: "64px", md: "130px" } }}>
      <Wrap>
        <Reveal>
          <Box
            sx={{
              textAlign: "center",
              border: `1px solid ${t.border}`,
              borderRadius: "20px",
              background: `radial-gradient(circle at 50% 0%, ${t.accentSoft}, transparent 60%), ${t.bg2}`,
              px: 3,
              py: { xs: "48px", md: "88px" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Eyebrow center>contact</Eyebrow>
            </Box>

            <Typography
              component="h2"
              sx={{
                fontFamily: t.fontDisplay,
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
                lineHeight: 1.05,
                mx: "auto",
                mb: 2.25,
                maxWidth: "18ch",
              }}
            >
              Let's build something{" "}
              <Box component="em" sx={{ fontStyle: "italic", color: t.accent }}>
                solid
              </Box>
              .
            </Typography>

            <Typography sx={{ color: t.muted, maxWidth: "46ch", mx: "auto", mb: 4.25 }}>
              Got an idea, a role, or a system that needs a steady back-end hand? I'm always happy
              to talk shop.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.75, justifyContent: "center" }}>
              <Button variant="contained" href={links.linkedin} target="_blank" rel="noopener">
                <Box component="i" className="fa-brands fa-linkedin-in" /> LinkedIn
              </Button>
              <Button variant="outlined" href={links.github} target="_blank" rel="noopener">
                <Box component="i" className="fa-brands fa-github" /> GitHub
              </Button>
              {links.email && (
                <Button variant="outlined" href={`mailto:${links.email}`}>
                  <Box component="i" className="fa-solid fa-envelope" /> {links.email}
                </Button>
              )}
            </Box>
          </Box>
        </Reveal>
      </Wrap>
    </Box>
  );
}
