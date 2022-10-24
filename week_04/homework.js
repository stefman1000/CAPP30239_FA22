/* Week 4 Homework */

const height = 500,
    width = 800,
    margin = ({ top: 15, right: 30, bottom: 35, left: 40 });
    
const svg = d3.select("#chart")
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);         // defines size of chart

d3.csv('long-term-interest-canada.csv').then(data => {

    let timeParse = d3.timeParse("%Y-%m");

    for (let d of data) {
        d.Num = +d.Num;
        d.Month = timeParse(d.Month);       // Converts Month to date format and Num to number format
    };
    
    let x = d3.scaleTime()              // creates x axis as timescale
        .domain(d3.extent(data, d => d.Month))
        .range([margin.left, width - margin.right]);

    let y = d3.scaleLinear()            // creates y axis as linear scale
        .domain([0, d3.max(data, d => d.Num)])          // returns an array
        .range([height - margin.bottom, margin.top]);

    svg.append("g")             // places the lines/ticks of y-axis
        .attr("transform", `translate(${margin.left},0)`)
        .attr("class", "y-axis")
        .call(d3.axisLeft(y).tickFormat(d => d + "%").tickSizeOuter(0).tickSize(-width));
        //.call(d3.axisLeft(y).tickSizeOuter(0).tickFormat(d => d + "%"));

    svg.append("g")             // places the lines/ticks of x-axis
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));
    
    

    svg.append("text")                  // places x axis labels
      .attr("class", "x-label")
      .attr("text-anchor", "end")
      .attr("x", width - margin.right)
      .attr("y", height)
      .attr("dx", "0.5em")
      .attr("dy", "-0.5em") 
      .text("Month");
    
    svg.append("text")                  // places y axis labels
      .attr("class", "y-label")
      .attr("text-anchor", "end")
      .attr("x", -margin.top/2)
      .attr("dx", "-0.5em")
      .attr("y", 10)
      .attr("transform", "rotate(-90)")
      .text("Interest rate");

    let line = d3.line()            // creates line object from data
        .x(d => x(d.Month))
        .y(d => y(d.Num))
        .curve(d3.curveNatural);


    svg.append("path")              // displays line on page
        .datum(data)
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "steelblue");
    
    
  });