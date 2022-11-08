d3.json('budget-2022.json').then((data) => {
  const height = 400,
    width = 600,
    innerRadius = 100,
    outerRadius = 175,
    labelRadius = 200;

  const arcs = d3.pie().value(d => d.amount)(data);
  const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  const arcLabel = d3.arc().innerRadius(labelRadius).outerRadius(labelRadius);
  console.log(arcs);

  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg.append("g")     // makes white seperators between arcs
    .attr("stroke", "white")
    .attr("stroke-width", 2)
    .attr("stroke-linejoin", "round")
    .selectAll("path")        // begin data join, put data into buckets
    .data(arcs)
    .join("path")
    .attr("fill", (d, i) => d3.schemeCategory10[i])
    .attr("d", arc);

  svg.append("g")
    .attr("font-size", 10)
    .attr("text-anchor", "middle")
    .selectAll("text")
    .data(arcs)
    .join("text")
    .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
    .selectAll("tspan")     // creates a break in the line
    .data(d => {
      return [d.data.category, d.data.amount];
    })
    .join("tspan")
    .attr("x", 0)
    .attr("y", (d, i) => `${i * 1.1}em`)
    .attr("font-weight", (d, i) => i ? null : "bold")
    .text(d => d);

  svg.append("text")
    .attr("font-size", 30)
    .attr("font-weight", "bold")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("2022")
    .style("font-size", 20);
});