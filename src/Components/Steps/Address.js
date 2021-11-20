import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Address = ({ formData, setForm, navigation }) => {
  const { address, city, pincode } = formData;
  console.log(address);
  return (
    <Container maxWidth="xs">
      <TextField
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Pin Code"
        name="pincode"
        value={pincode}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />{" "}
      <Button variant="contained" onClick={() => navigation.previous()}>
        Back
      </Button>{" "}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};
