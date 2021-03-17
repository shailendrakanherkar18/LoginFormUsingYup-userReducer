import React from "react";
// import {Redirect} from 'react-router-dom'

import projects from "../projects";
import ProjectItem from "../components/Dashboard/ProjectItem";
// import { useSelector } from 'react-redux';

import { Row, Col } from "reactstrap";
import TopNav from "../components/Layout/Topnav";

const DashboardContainer = () => {
  // const { userDetails } = useSelector(state => state.loginDetailsReducer)
  
  // if(!userDetails.auth_token) {
  //   return <Redirect to="/"/>
  // }

  return (
    <>
      {/* <TopNav userDetails={userDetails}/> */}
      <TopNav />
      <Row className="pt-3 ml-0 mr-0">
        {projects.map((project) => (
            <Col className="mb-3" sm={4}>
              <ProjectItem project={project} />
            </Col>
        ))}
      </Row>
    </>
  );
};

export default DashboardContainer;
