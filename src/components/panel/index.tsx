import { useState } from "react";
import { Typography, Autocomplete, TextField, Box, Button, Grid, Modal } from "@mui/material";
import { Flight, PinDrop } from '@mui/icons-material';
import { LoadingButton } from "@mui/lab";
import { IPanel } from "../../interfaces";
import * as S from "./styles";

export const Panel: React.FC<IPanel> = ({
  loading,
  airports,
  setAirportOrigin,
  setAirportDestination,
  setFinalDistance,
  calculateFinalDistance,
  finalDistance,
}) => {

  const [open, setOpen] = useState(false);
  const callModal = () => setOpen(!open);

  const calculateDistanceOnMobile = async () => {
    try {
      await calculateFinalDistance();
    }
    catch (e) {
      console.log(e);
    }
    finally {
      callModal();
    }
  }

  return (
    <S.Panel position="static" >
      <S.Center>

        {/* NAME */}
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
          sx={{ width: 250, display: { lg: 'none', xs: 'flex' } }}
        >
          {
            finalDistance ?
              <>
                <PinDrop />
                <Typography variant="body1" textAlign="center" sx={{ mx: 1 }}>
                  {finalDistance} Nautical Miles
                </Typography>
              </> :
              <>
                <Flight />
                <Typography variant="h6" m={1}>
                  Air Calculator
                </Typography>
              </>
          }
        </Grid>

        {/* WEB SELECTOR */}
        <Grid
          sx={{ width: '100%', display: { lg: 'flex', xs: 'none' } }}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {
            finalDistance ?
              <>
                <PinDrop />
                <Typography variant="body1" textAlign="center" sx={{ mx: 1 }}>
                  {finalDistance} Nautical Miles
                </Typography>
              </> :
              <>
                <Flight />
                <Typography variant="h6" m={1}>
                  Air Calculator
                </Typography>
              </>
          }
          <Autocomplete
            sx={{ width: 200, ml: 4 }}
            disablePortal
            onChange={(event, value) => {
              setAirportOrigin(value), setFinalDistance(null);
            }}
            options={airports}
            renderInput={(params) => (
              <TextField {...params} label="Airport Origin" />
            )}
          />
          <Autocomplete
            sx={{ width: 200, ml: 4 }}
            disablePortal
            onChange={(event, value) => {
              setAirportDestination(value), setFinalDistance(null);
            }}
            options={airports}
            renderInput={(params) => (
              <TextField {...params} label="Airport Destination" />
            )}
          />
          <LoadingButton
            sx={{ ml: 4 }}
            onClick={calculateFinalDistance}
            loading={loading}
            loadingIndicator="Loading…"
            variant="contained"
            size="large"
          >
            Calculate
          </LoadingButton>
        </Grid>

        {/* MOBILE BUTTON */}
        <Grid
          sx={{ width: '30%', display: { lg: 'none', xs: 'flex' } }}
          container
          direction="row"
          justifyContent="end"
          alignItems="center"
        >
          <Button
            onClick={callModal}
            variant="contained"
          >
            Start
          </Button>
        </Grid>

        {/* MOBILE MODAL */}
        <Modal
          open={open}
          onClose={callModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <S.ModalBody>
            <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
              Select an Origin and Destination
            </Typography>
            <Autocomplete
              sx={{ width: 200, mb: 2 }}
              disablePortal
              onChange={(event, value) => {
                setAirportOrigin(value), setFinalDistance(null);
              }}
              options={airports}
              renderInput={(params) => (
                <TextField {...params} label="Airport Origin" />
              )}
            />
            <Autocomplete
              sx={{ width: 200, mb: 2 }}
              disablePortal
              onChange={(event, value) => {
                setAirportDestination(value), setFinalDistance(null);
              }}
              options={airports}
              renderInput={(params) => (
                <TextField {...params} label="Airport Destination" />
              )}
            />
            <LoadingButton
              onClick={calculateDistanceOnMobile}
              loading={loading}
              loadingIndicator="Loading…"
              variant="contained"
              size="large"
            >
              Calculate
            </LoadingButton>
          </S.ModalBody>
        </Modal>

      </S.Center>
    </S.Panel>
  );
};