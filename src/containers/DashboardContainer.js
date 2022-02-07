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
      <Row className="ml-0 mr-0 mb-3">
        {projects.map((project) => (
            <Col className="mt-3" key={project.id} md={{ size: 3 }}>
              <ProjectItem project={project} />
            </Col>
        ))}
      </Row>
    </>
  );
};

export default DashboardContainer;
