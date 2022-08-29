import { useState } from "react";
import { Typography, Autocomplete, TextField, Box, Alert, Toolbar, IconButton, Button, Grid, Modal, Collapse } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { IPanel } from "../../interfaces";
import { Flight, PinDrop, Close } from '@mui/icons-material';
import * as S from "./styles";

export const Panel: React.FC<IPanel> = ({
  loading,
  airports,
  error,
  setAirportOrigin,
  setAirportDestination,
  setFinalDistance,
  calculateFinalDistance,
  finalDistance,
}) => {

  const [open, setOpen] = useState(false);
  const callModal = () => setOpen(!open);

  return (
    <S.Panel position="static" >
      <S.Center>

        {/* {
          !loading && (
            <Box sx={alertStyle}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Close me!
              </Alert>
            </Box>
          )
        } */}

        {/* NAME */}
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
          sx={{ width: '30%' }}
        >
          <Flight />
          <Typography variant="h6" m={1}
            sx={{ width: '70%', display: { lg: 'flex', xs: 'none' } }}>
            Air Calculator
          </Typography>
        </Grid>

        {/* WEB SELECTOR */}
        <Grid
          sx={{ width: '70%', display: { lg: 'flex', xs: 'none' } }}
          container
          direction="row"
          justifyContent="end"
          alignItems="center"
        >
          {finalDistance && (
            <>
              <PinDrop sx={{ ml: 4 }} />
              <Typography variant="body1" textAlign="center" sx={{ mx: 1 }}>
                {finalDistance} Nautical Miles
              </Typography>
            </>
          )}
          {error !== null && (
            <Typography sx={{ pb: 3 }} variant="body1" textAlign="start">
              Unable to calculate distance
            </Typography>
          )}
          <Autocomplete
            sx={{ width: 200, ml: 4 }}
            disablePortal
            onChange={(event, value) => {
              setAirportOrigin(value), setFinalDistance(null);
            }}
            id="combo-box-demo"
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
            id="combo-box-demo"
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
          sx={{ display: { lg: 'none', xs: 'flex' } }}
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
          <Box sx={style}>
            <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
              Select Origin and Destionation Airports
            </Typography>
            <Autocomplete
              sx={{ width: 200, mb: 2 }}
              disablePortal
              onChange={(event, value) => {
                setAirportOrigin(value), setFinalDistance(null);
              }}
              id="combo-box-demo"
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
              id="combo-box-demo"
              options={airports}
              renderInput={(params) => (
                <TextField {...params} label="Airport Destination" />
              )}
            />
            <LoadingButton
              onClick={() => { calculateFinalDistance(), callModal() }}
              loading={loading}
              loadingIndicator="Loading…"
              variant="contained"
              size="large"
            >
              Calculate
            </LoadingButton>
          </Box>
        </Modal>

      </S.Center>
    </S.Panel>
  );
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: 4,
};

const alertStyle = {
  position: 'absolute' as 'absolute',
  width: '100%',
  top: '-80px',
  left: '0',
  padding: '0 25px'
}