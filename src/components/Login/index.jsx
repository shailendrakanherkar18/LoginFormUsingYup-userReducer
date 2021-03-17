import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Row,
  Col,
  Container,
} from 'reactstrap';

const LoginComponent = (props) => {
  const {
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onSubmit,
  } = props;

  return (
    <Container>
      <Row className="h-100-vh">
        <Col sm={4} className="m-auto">
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
                  />
                  <FormFeedback>Invalid Email</FormFeedback>
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
                  />
                  <FormFeedback>Invalid Password</FormFeedback>
                </FormGroup>
                <FormGroup row className="ml-0">
                  <Label col={4}>Not registered ?</Label>
                  <a className="ml-2" href="/">
                    Create an account{' '}
                  </a>
                </FormGroup>
              </Form>
              <Button onClick={onSubmit}>Submit</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

LoginComponent.propTypes = {
  email: PropTypes.string.isRequired,
  emailErrorText: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordErrorText: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginComponent;
