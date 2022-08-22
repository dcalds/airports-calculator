import { Container, styled } from "@mui/material";

export const MainContainer = styled(Container)({
  alignItems: "center",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  margin: "0",
  padding: "0",
});

export const Panel = styled(Container)({
  background: "#fafafaee",
  borderRadius: "8px",
  bottom: "25px",
  boxShadow: "0px 10px 50px 0px #0000000d",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  maxHeight: "350px",
  maxWidth: "750px",
  padding: "16px 16px 24px",
  position: "absolute",
  width: "100%",
  zIndex: "999",
});

export const Map = styled(Container)({
  height: "100vh",
  width: "100%",
});