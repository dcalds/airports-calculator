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

export const ModalBody = styled(Box)({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  background: '#111',
  borderRadius: '8px',
  boxShadow: '24',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '32px',
});