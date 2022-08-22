import { Container, styled } from "@mui/material";

export const MainContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
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
  width: "100%",
  height: "100vh",
});