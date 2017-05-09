function makeCircle() {

  circleRadii = [30, 70, 110]

 var svgContainer = d3.select("body").append("svg")
  .attr("width", 200)
  .attr("height", 200)
  .style("border", "2px solid black")

 var circles = svgContainer.selectAll("circle")
  .data(circleRadii)
  .enter()
  .append("circle")

  var circleAtts = circles
  .attr("cx", function (d) { return d })
  .attr("cy", function (d) { return d })
  .attr("r", 20)
}
