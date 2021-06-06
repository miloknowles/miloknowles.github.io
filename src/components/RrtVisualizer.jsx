import React, { Component } from 'react';
import * as d3 from 'd3-scale-chromatic';

var ALPHA = 0.5;


/**
 * Retrieve the array key corresponding to the largest element in the array.
 * Source: https://gist.github.com/engelen/fbce4476c9e68c52ff7e5c2da5c24a28
 *
 * @param {Array.<number>} array Input array
 * @return {number} Index of array element with largest value
 */
function argMax(array) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}
function argMin(array) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] < r[0] ? a : r))[1];
}


// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
function mobileCheck() {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// Source: https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Linear interpolate between scalar values.
function linearInterpolate(a, b, alpha) {
  return a + alpha * (b - a);
}


// Adapted from here: http://kevinkdo.com/rrt_demo.html
class RRTAlgorithm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: [],
      edges: [],
      parents: [],
      width: 0,
      height: 0,
      distanceSoFar: []
    };
  }

  // Returns true if an XY point 'x' is in collision. False means it's valid.
  checkCollision(x) {
    return false;

    // var rect = this.rect;

    // var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    // var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(scrollLeft, scrollTop);

    // const inside_x = ((x[0] - scrollLeft) > rect.x) && ((x[0] - scrollLeft) < (rect.x + rect.width));
    // const inside_y = ((x[1] - scrollTop) > rect.y) && ((x[1] - scrollTop) < (rect.y + rect.height));

    // return (inside_x && inside_y);
  }

  sampleFreeSpace() {
    var x = [Math.random(), Math.random()];
    while (this.checkCollision(x)) {
      x = [Math.random(), Math.random()];
    }
    return x;
  }

  addNewNodeRRT() {
    // Stopping condition to prevent clutter.
    if (this.state.nodes.length > 100) {
      clearInterval(this.interval);
    }

    var sample_point = this.sampleFreeSpace();

    var euclidean_dist2 = this.state.nodes.map((x) => {
      return Math.pow((x[0] - sample_point[0]) * this.state.width, 2) +
             Math.pow((x[1] - sample_point[1]) * this.state.height, 2);
    });
    var nn_index = argMin(euclidean_dist2);
    var nn_point = this.state.nodes[nn_index];
    var nn_dist = Math.sqrt(euclidean_dist2[nn_index]);

    var clipped_point = [linearInterpolate(nn_point[0], sample_point[0], ALPHA),
                         linearInterpolate(nn_point[1], sample_point[1], ALPHA)];
    this.state.nodes.push(clipped_point);
    this.state.edges.push([nn_point, clipped_point]);
    this.state.parents.push(nn_index);
    this.state.distanceSoFar.push(this.state.distanceSoFar[nn_index] + nn_dist);

    // I think this triggers a re-render to happen.
    this.setState({
      nodes: this.state.nodes,
      edges: this.state.edges
    });
  }

  windowResizeCallback() {
    this.updateWidthAndHeight();
  }

  componentDidMount() {
    this.updateWidthAndHeight();

    // Start RRT off in the middle of the page.
    this.setState({
      nodes: [[this.state.width / 2, this.state.height / 2]],
      parents: [0],
      distanceSoFar: [0]
    });

    // Set up a periodic callback to add the next RRT node.
    this.interval = setInterval(this.addNewNodeRRT.bind(this), 30);

    // Change nodes and edges when window changes size.
    window.addEventListener("resize", debounce(this.windowResizeCallback.bind(this), 250));
  }

  updateWidthAndHeight() {
    // https://stackoverflow.com/questions/2474009/browser-size-width-and-height/2474211
    console.log(mobileCheck() ? "[RRT] Detected mobile device" : "[RRT] Detected non-mobile device");

    // On mobile, RRT takes up the entire initial viewport. On desktop, only use a section.
    const pageHeight = window.innerHeight || document.body.clientHeight;
    const rrtBoxHeight = mobileCheck() ? pageHeight : 0.5 * pageHeight;

    // Only update the height when the page loads (indicated by a zero initial value).
    // This avoids the RRT box jumping in side when you scroll down on mobile and the toolsbars
    // disappear, making the viewport height bigger.
    let container = document.getElementById("TreeVisualizationContainer");
    this.setState({
      width: container.clientWidth || document.body.clientWidth,
      height: (this.state.height <= 0) ? rrtBoxHeight : this.state.height
    });
  }

  // Draw nodes and edges as SVG art.
  render() {
    // Spectral, Turbo, Inferno all look nice.
    // https://github.com/d3/d3-scale-chromatic
    var rendered_nodes = this.state.nodes.map((node, index) => React.createElement("circle", {
      r: "5",
      fill: d3.interpolateTurbo(0.4 * this.state.distanceSoFar[index] / this.state.width),
      cx: node[0] * this.state.width,
      cy: node[1] * this.state.height,
      key: "node " + node[0].toString() + " " + node[1].toString()
    }));
    var rendered_edges = this.state.edges.map((edge, index) => React.createElement("line", {
      stroke: "black",
      x1: edge[0][0] * this.state.width,
      y1: edge[0][1] * this.state.height,
      x2: edge[1][0] * this.state.width,
      y2: edge[1][1] * this.state.height,
      key: "edge " + edge[0][0].toString() + " " + edge[0][1].toString() + " " + edge[1][0].toString() + " " + edge[1][1].toString()
    }));

    return React.createElement("svg",
      { className: "TreeVisualizationBox", width: this.state.width, height: this.state.height },
      rendered_nodes, rendered_edges
    );
  }
};

export default RRTAlgorithm;
