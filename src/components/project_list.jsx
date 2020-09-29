import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ProjectCard, CardLink } from './project_card';


class ProjectList extends Component {
  render() {
    return (
      <Container className="LightBackground" fluid>
        <Container className="pt-5" id="projects"></Container>
        <Container className="pt-5 pb-5">
          <Row>
            <Col xs={12} className="my-auto">
              <h4 className="FontColorDarkBlue">PROJECTS</h4>
              <ProjectCard
                image={'/images/thesis/epistemic_example.png'}
                title={"Master's Thesis"}
                description={<p>End-to-end <i>deep stereo networks</i> have achieved state-of-the-art accuracy for
                            depth estimation, but we need to augment these systems with an understanding of uncertainty
                            to make them safe for real-world deployment. In the context of deep learning, there are
                            two types of uncertainty we need to deal with. <i>Aleatoric</i> uncertainty, which comes from
                            image noise, occlusion, lack of texture, and other characteristics that lead to ambiguity in the estimated depth,
                            can be learned from the training data using a likelihood loss. We train our deep stereo network to predict aleatoric
                            uncertainty so that it can "tell" us what parts of the image it's unsure about. <i>Epistemic</i> uncertainty,
                            which occurs in environments that differ from the training set,
                            can be detected via "novelty detection", and mitigating through online adaptation.
                            The picture above gives an example of epistemic uncertainty: a network trained in a driving environment (left)
                            does a good job predicting disparity (inverse depth) there. However, when it's tested in an
                            unfamiliar environment (right) it has a lot of trouble, and hallucinates some geometry
                            that looks suspiciously like the training set.</p>}
                date={'September, 2020'}
                links={[<CardLink href="https://drive.google.com/file/d/1aTZ8UCyJggxRbLbAdVz8h3bwSzLOCb74/view?usp=sharing" text="Google Drive"></CardLink>]}>
              </ProjectCard>
              <ProjectCard
                image={'/images/ldl.png'}
                title={'6.881 Project: Solving Constrained Inverse Kinematics Tasks with NNs'}
                description={<p><i>Inverse-kinematics</i> (IK) is the task of finding a set of joint angles for a robotic arm that would place its "end-effector" (hand)
                            at a desired pose. This is a difficult nonlinear and nonconvex optimization problem, especially when there are constraints such as
                            joint limits or obstacles that must be avoided. I wanted to see if a neural network can learn approximate solutions to constrained IK
                            problems. I implemented constraints in the NN training procedure through <i>Lagrangian dual learning</i>. We relax the constraints into "soft"
                            penalties in the training objective, and iterate between training the NN on a Lagrangian relaxation, and updating the Lagrange multipliers
                            to obtain a stronger (more difficult) relaxation. I was able to get good results for my toy examples (2D world, 3-link arm, circular obstacles).
                            In the image above, the NN learns to put its end-effector in the green goal position without colliding with obstacles or bending its joints past the
                            limit I imposed. You might wonder about the bottom-left picture - in my idealized world, only joints can collide with things, and the
                            links between joints can pass through whatever they want.</p>}
                date={'Spring, 2020'}
                links={[<CardLink href="https://github.com/miloknowles/lagrange-dual-learning" text="Code"></CardLink>,
                        <CardLink href="https://github.com/miloknowles/lagrange-dual-learning/blob/master/report.pdf" text="Report"></CardLink>]}>
              </ProjectCard>
              <ProjectCard
                image={'/images/skydio_3d_scan.png'}
                title={'Summer Internship at Skydio'}
                description={<p>I was part of a team that worked on Skydio's House/Structure scan capabilities. I spent most of my time working on mapping code
                            that estimates the structure of a building from overhead images, and a frontend for overlaying aerial images
                            on top of the structure.</p>}
                date={'Summer, 2019'}
                links={[<CardLink href="https://www.youtube.com/watch?v=MSy_06aOBzg" text="House Scan Video"></CardLink>,
                        <CardLink href="https://www.youtube.com/watch?v=VxLXTeycyeE" text="Structure Scan Video"></CardLink>]}>
              </ProjectCard>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default ProjectList;
