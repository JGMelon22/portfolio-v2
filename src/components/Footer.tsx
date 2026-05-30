import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { tokens as t } from "../theme";
import { Wrap } from "./common";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: `1px solid ${t.border}`, py: "34px" }}>
      <Wrap
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ fontFamily: t.fontMono, fontSize: "0.78rem", color: t.faint }}>
          built with{" "}
          <Box component="b" sx={{ color: t.accent, fontWeight: 500 }}>React</Box> +{" "}
          <Box component="b" sx={{ color: t.accent, fontWeight: 500 }}>MUI</Box> · ©{" "}
          {new Date().getFullYear()} João Gabriel
        </Typography>
        <Link
          href="#top"
          sx={{ fontFamily: t.fontMono, fontSize: "0.78rem", color: t.muted, "&:hover": { color: t.accent } }}
        >
          back to top ↑
        </Link>
      </Wrap>
    </Box>
  );
}
