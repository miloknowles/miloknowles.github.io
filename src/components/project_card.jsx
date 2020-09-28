import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';


class ProjectCard_Thesis extends Component {
  render() {
    return (
      <Card className="mt-5" bg="light">
        <Card.Img variant="top" src="/images/thesis/epistemic_example.png" bg="primary" fluid/>
        <Card.Body>
          <Card.Title>Master's Thesis (Graduated September, 2020)</Card.Title>
          <Card.Text>
            tl;dr: End-to-end deep stereo networks have achieved state-of-the-art accuracy for
            depth estimation, but we need to augment these systems with an understanding of uncertainty
            to make them safe for real-world deployment. In the context of deep learning, there are
            two types of uncertainty we need to deal with. Aleatoric uncertainty, which comes from
            image noise, occlusion, lack of texture, and other characteristics that lead to ambiguity in the estimated depth,
            can be learned from the training data using a likelihood loss. We train our deep stereo network to predict aleatoric
            uncertainty so that it can "tell" us what parts of the image it's unsure about.
            Epistemic uncertainty, which occurs in environments that differ from the training set,
            can be detected via "novelty detection", and mitigating through online adaptation.
            The picture above gives an example of epistemic uncertainty: a network trained in a driving environment (left)
            does a good job predicting disparity (inverse depth) there. However, when it's tested in an
            unfamiliar environment (right) it has a lot of trouble, and hallucinates some geometry
            that looks suspiciously like the training set.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://drive.google.com/file/d/1aTZ8UCyJggxRbLbAdVz8h3bwSzLOCb74/view?usp=sharing">Google Drive Link (big file, sorry)</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

class ProjectCard_LDL extends Component {
  render() {
    return (
      <Card className="mt-5" bg="light">
        <Card.Img variant="top" src="/images/ldl.png" bg="primary" fluid/>
        <Card.Body>
          <Card.Title>6.881 Project (Spring 2020): A Lagrange Dual Learning Framework For Solving Constrained Inverse Kinematics Tasks</Card.Title>
          <Card.Text>
            "Inverse-kinematics" (IK) is the task of finding a set of joint angles for a robotic arm that would place its "end-effector" (hand)
            at a desired pose. This is a difficult nonlinear and nonconvex optimization problem, especially when there are constraints such as
            joint limits or obstacles that must be avoided. I wanted to see if a neural network can learn approximate solutions to constrained IK
            problems. I was able to get good results for my toy examples (2D world, 3-link arm, circular obstacles). In the image above,
            the NN learns to put its end-effector in the green goal position without colliding with obstacles or bending its joints past the
            limit I imposed. You might wonder about the bottom-left picture - in my idealized world, only joints can collide with things, and the
            links between joints can pass through whatever they want.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://github.com/miloknowles/lagrange-dual-learning">Code</Card.Link>
          <Card.Link href="https://github.com/miloknowles/lagrange-dual-learning/blob/master/report.pdf">Report</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export { ProjectCard_Thesis, ProjectCard_LDL };
