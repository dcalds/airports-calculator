import { AppBar, Box, styled } from "@mui/material";

export const Panel = styled(AppBar)({
  background: "#000",
  height: "10%",
  bottom: "0",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  position: "absolute",
  zIndex: "999",
});

export const Center = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 25px",
});