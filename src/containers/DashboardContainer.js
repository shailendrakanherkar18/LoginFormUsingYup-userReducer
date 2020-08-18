import React from "react";
import projects from "../projects";
import ProjectItem from "../components/Dashboard/ProjectItem";
import { useSelector } from 'react-redux';

import { Row, Col } from "reactstrap";
import TopNav from "../components/Layout/Topnav";

const DashboardContainer = () => {
  const { userDetails } = useSelector(state => state.loginDetailsReducer)
  return (
    <>
      <TopNav userDetails={userDetails}/>
      {projects.map((project) => (
        <Row key={project.id} className="mb-3">
          <Col md={{ size: 4, offset: 4 }}>
            <ProjectItem project={project} />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default DashboardContainer;
