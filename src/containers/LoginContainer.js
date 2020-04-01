import React, { useReducer } from "react";
import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
import * as yup from "yup";

import loginDetailsReducer from "../reducers/loginDetailsReducer";

const LoginContainer = () => {
  const initialState = {
    email: "",
    password: "",
    emailErrorText: "",
    passwordErrorText: ""
  };

  let schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup.string().min(6).required()
  });

  const [loginDetails, dispatch] = useReducer(
    loginDetailsReducer,
    initialState
  );

  const { email, password, passwordErrorText, emailErrorText } = loginDetails;

  const onEmailChange = event => {
    dispatch({ type: "email", value: event.target.value });
  };

  const onPasswordChange = event => {
    dispatch({ type: "password", value: event.target.value });
  };

  const onSubmit = () => {
    schema.isValid(loginDetails).then(function(valid) {
      if (!valid) {
        schema.validate(loginDetails, { abortEarly: false }).catch(err => {
          err.inner.forEach(ele => {
            dispatch({ type: `${ele.path}Error`, value: ele.message });
          })
        });
      }else {
        //Initiate Login Api call
        console.log('valid input');
      }
    });
  };

  return (
    <div className="row h-100-vh">
      <div className="col-sm-12 my-auto">
        <div className="card card-block w-50 mx-auto">
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="example@domain.com"
                    onChange={onEmailChange}
                    value={email}
                    onFocus={() => {
                      dispatch({ type: `emailError`, value: '' });
                    }}
                    invalid={emailErrorText !== ""}
                  />
                  <FormFeedback>
                    {emailErrorText}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password"
                    onChange={onPasswordChange}
                    value={password}
                    onFocus={() => {
                      dispatch({ type: `passwordError`, value: '' });
                    }}
                    invalid={passwordErrorText !== ""}
                  />
                  <FormFeedback>{passwordErrorText}</FormFeedback>
                </FormGroup>
                <FormGroup row className="ml-0">
                  <Label col={4}>Not registered ?</Label>
                  <a className="ml-2" href="/">
                    Create an account{" "}
                  </a>
                </FormGroup>
              </Form>
              <Button onClick={onSubmit}>Submit</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
