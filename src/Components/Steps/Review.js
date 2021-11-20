import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";

export const Review = ({ formData, setForm, navigation }) => {
  const { review } = formData;
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    phone,
    email,
    address,
    city,
    pincode,
  } = formData;

  return (
    <Container maxWidth="xs">
      <div id="name">
        <h2>Review</h2>
        <table>
          <tr id="box">
            <tr>
              <th>Name</th>
            </tr>
            <tr>
              <td>First Name: </td>
              <td>{firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{lastName}</td>
            </tr>
            <tr>
              <td>Nick Name</td>
              <td>{nickName}</td>
              <td></td>
              <td>
                <button id="edit" onClick={() => go("name")}>
                  edit
                </button>
              </td>
            </tr>
          </tr>
          <tr id="box">
            <tr>
              <th>Address</th>
            </tr>
            <tr>
              <td>Full Address: </td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{city}</td>
              <td></td>
              <td>
                <button id="edit" onClick={() => go("address")}>
                  edit
                </button>
              </td>
            </tr>
            <tr>
              <td>Pin Code</td>
              <td>{pincode}</td>
            </tr>
          </tr>
          <tr id="box">
            <tr>
              <th>Contact</th>
            </tr>
            <tr>
              <td>Email Address: </td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{phone}</td>
              <td></td>
              <td>
                <button id="edit" onClick={() => go("contact")}>
                  edit
                </button>
              </td>
            </tr>
          </tr>
        </table>
      </div>
      <Button
        variant="contained"
        onClick={() => navigation.previous()}
        style={{ marginTop: "15px" }}
      >
        Back
      </Button>{" "}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigation.next()}
        style={{ marginTop: "15px" }}
      >
        Submit
      </Button>
    </Container>
  );
};
