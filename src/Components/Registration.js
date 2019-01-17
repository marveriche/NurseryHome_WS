import React, { Component, optionsState } from "react";
import firebase from "firebase";

import {
  Grid,
  Row,
  Col,
  FormControl,
  Dropdown,
  DropdownButton,
  MenuItem,
  Button
} from "react-bootstrap";

class Registration extends Component {
  render() {
    const email = document.querySelector("#emailTxt");
    const password = document.querySelector("#passwordTxt");
    const name = document.querySelector("#nameTxt");
    const role = document.querySelector("#role");
    const registerBtn = document.querySelector("#registerBtn");
    registerBtn.addEventListener("click", e => {
      e.preventDefault();

      this.props.auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(cred => {
          console.log("Name: ", name.value);
          console.log("Role: ", role.value);
          console.log(cred.user.uid);
          this.props.db.doc("users/" + cred.user.uid).set({
            name: name.value,
            role: role.value
          });
        });
    });

    return (
      <Grid>
        <Row className="show-grid">
          <Col md={4} mdOffset={4}>
            <div className="account-wall">
              <form className="form-registration">
                <Row>
                  <Col md={12}>
                    <p className="inputText">Role</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <select
                      className="form-control inputTextField"
                      value={optionsState}
                      id="role"
                    >
                      <option value="Admin">Admin Role</option>
                      <option value="Nursery Home">Nursery Home Role</option>
                      <option value="Relative">Relative Role</option>
                    </select>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <p className="inputText">First Name</p>
                  </Col>
                  <Col md={6}>
                    <p className="inputText">Last Name</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormControl
                      className="inputTextField"
                      id="nameTxt"
                      type="text"
                      placeholder="Juan"
                    />
                  </Col>
                  <Col md={6}>
                    <FormControl
                      className="inputTextField"
                      type="text"
                      placeholder="Dela Cruz"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <p className="inputText">Email Address: </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormControl
                      className="inputTextField"
                      id="emailTxt"
                      type="text"
                      placeholder="Enter text"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <p className="inputText">Password: </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormControl
                      className="inputTextField"
                      id="passwordTxt"
                      type="text"
                      placeholder="Enter text"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Button
                      bsStyle="primary"
                      type="submit"
                      id="registerBtn"
                      className="btn-block"
                    >
                      Register
                    </Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Registration;
