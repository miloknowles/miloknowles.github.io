import React, { Component } from 'react';

var ALPHA = 0.9;

// Adapted from here: http://kevinkdo.com/rrt_demo.html
class RRTAlgorithm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: [],
      edges: [],
      width: 0,
      height: 0
    };
  }

  // Linear interpolate between two points in R
  linInt(a, b, alpha) {
    return a + alpha * (b - a);
  }

  checkCollision(x) {
    var rect = this.rect;

    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollLeft, scrollTop);

    const inside_x = ((x[0] - scrollLeft) > rect.x) && ((x[0] - scrollLeft) < (rect.x + rect.width));
    const inside_y = ((x[1] - scrollTop) > rect.y) && ((x[1] - scrollTop) < (rect.y + rect.height));

    return (inside_x && inside_y);
  }

  sampleFreeSpace() {
    var x = [Math.random() * this.state.width, Math.random() * this.state.height];
    while (this.checkCollision(x)) {
      x = [Math.random() * this.state.width, Math.random() * this.state.height];
    }
    return x;
  }

  expandRRT() {
    if (this.state.nodes.length > 100) {
      return;
    }

    var x_rand = this.sampleFreeSpace();
    var x_near = this.state.nodes[0];
    var min_square_distance = Math.pow(x_near[0] - x_rand[0], 2) + Math.pow(x_near[1] - x_rand[1], 2);
    this.state.nodes.forEach(function (x) {
      var this_square_distance = Math.pow(x[0] - x_rand[0], 2) + Math.pow(x[1] - x_rand[1], 2);
      if (this_square_distance < min_square_distance) {
        x_near = x;
        min_square_distance = this_square_distance;
      }
    });
    var x_new = [this.linInt(x_near[0], x_rand[0], ALPHA), this.linInt(x_near[1], x_rand[1], ALPHA)];
    this.state.nodes.push(x_new);
    this.state.edges.push([x_near, x_new]);
    this.setState({
      nodes: this.state.nodes,
      edges: this.state.edges
    });
  }

  // Set up a periodic callback to add the next RRT node.
  componentDidMount() {
    this.updateWidthAndHeight();

    this.avoid_box = document.getElementById("rrt-avoid");
    this.rect = this.avoid_box.getBoundingClientRect();

    // Start RRT off in the middle of the page.
    this.state.nodes = [[this.state.width / 2, this.state.height / 2]]
    this.interval = setInterval(this.expandRRT.bind(this), 100);
  }

  updateWidthAndHeight() {
    this.state.width = document.getElementById("background-rrt-box").offsetWidth;
    this.state.height = document.getElementById("about-container-fluid").offsetHeight;
  }

  render() {
    var rendered_nodes = this.state.nodes.map(node => React.createElement("circle", { r: "5", fill: "black", cx: node[0], cy: node[1],
      key: "node " + node[0].toString() + " " + node[1].toString() }));
    var rendered_edges = this.state.edges.map(edge => React.createElement("line", { stroke: "black", x1: edge[0][0], y1: edge[0][1], x2: edge[1][0], y2: edge[1][1],
      key: "edge " + edge[0][0].toString() + " " + edge[0][1].toString() + " " + edge[1][0].toString() + " " + edge[1][1].toString() }));
    return React.createElement(
      "svg",
      { className: "rrt_svg", width: this.state.width, height: this.state.height },
      rendered_nodes,
      rendered_edges
    );
  }
};

export default RRTAlgorithm;
