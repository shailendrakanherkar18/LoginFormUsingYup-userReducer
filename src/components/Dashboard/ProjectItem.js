import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import PropTypes from 'prop-types';

const ProjectItem = ({ project }) => (
  <Card>
    <CardHeader>
      <h3>{project.name}</h3>
    </CardHeader>
    <CardBody>
      <CardText>{project.description}</CardText>
    </CardBody>
  </Card>
);

ProjectItem.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  })
}

export default ProjectItem;
