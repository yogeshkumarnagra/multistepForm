import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Name = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName } = formData;
  const [err, seterr] = useState("");
  console.log(firstName);

  function nexthandler() {
    if (firstName && lastName && nickName) navigation.next();
    else {
      seterr("enter valid data");
    }
  }
  return (
    <div className="name">
      {err && <div>{err}</div>}
      <Container maxWidth="xs">
        <TextField
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          onKeyPress={() => seterr("")}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Nick Name"
          name="nickName"
          value={nickName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => nexthandler()}
        >
          Next
        </Button>
      </Container>
    </div>
  );
};
