import React from "react";
import projects from "../projects";
import ProjectItem from '../components/Dashboard/ProjectItem';

import { Row, Col } from 'reactstrap';

const DashboardContainer = () => {
  return projects.map(project =>  <Row key={project.id} className="mb-3">
      <Col md={{size: 4, offset: 4}} >
        <ProjectItem project={project}/>
      </Col>
    </Row>)
}

export default DashboardContainer;