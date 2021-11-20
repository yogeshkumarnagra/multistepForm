import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;
  return (
    <Container maxWidth="xs">
      <TextField
        label="Email"
        name="email"
        margin="normal"
        autoComplete="off"
        value={email}
        variant="outlined"
        onChange={setForm}
        fullWidth
      />
      <TextField
        label="Phone"
        name="phone"
        value={phone}
        margin="normal"
        autoComplete="off"
        variant="outlined"
        onChange={setForm}
        fullWidth
      />
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
