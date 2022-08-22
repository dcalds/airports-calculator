import * as S from "./styles";
import { Typography, Stack, Autocomplete, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { IPanel } from "../../interfaces";

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
  return (
    <S.Panel>
      <Stack
        gap="20px"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6" textAlign="center">
          Calculate Distance in Straight Line Between Two USA Airports
        </Typography>
        {finalDistance && (
          <Typography variant="body1" textAlign="center">
            The distance between is {finalDistance} Nautical Miles
          </Typography>
        )}
        {error !== null && (
          <Typography variant="body1" textAlign="center">
            Unable to calculate distance
          </Typography>
        )}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap="20px"
        >
          <Autocomplete
            sx={{ width: 250 }}
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
            sx={{ width: 250 }}
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
        </Stack>

        <LoadingButton
          onClick={calculateFinalDistance}
          loading={loading}
          loadingIndicator="Loading…"
          variant="contained"
          size="large"
        >
          Calculate Distance
        </LoadingButton>
      </Stack>
    </S.Panel>
  );
};
