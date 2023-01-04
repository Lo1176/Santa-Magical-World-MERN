import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BtnText(text) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">{text}</Button>
      {/* <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}