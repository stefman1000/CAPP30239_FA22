/* Bar chart for library visits */

d3.csv("library_visits_jan22.csv").then(data => {
    

    for (let d of data) {
        d.num = +d.num;
    };

    const height = 400,                         // defines size of chart
        width = 800,
        margin = ({top: 25, right: 30, bottom: 35, left: 50});
    
    

    let svg = d3.select("#chart")           // uses d3 element chart 
        .append("svg")
        .attr("viewBox", [0,0, width, height ]);

    let x = d3.scaleBand()
        .domain(data.map(d => d.branch))          // returns an array
        .range([margin.left, width - margin.right])
        .padding(0.1);

    let y = d3.scaleLinear()
        .domain([0,d3.max(data, d => d.num)]).nice()
        .range([height - margin.bottom, margin.top]);  // svg's are built from the top down i.e 0 is the top of screen

    const xAxis = g => g                    // creates x axis line 
        .attr("transform", `translate(0,${height - margin.bottom+ 5})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    const yAxis = g => g                    // creates y axis line
        .attr("transform", `translate(${margin.left -5}, 0)`)
        .call(d3.axisLeft(y).tickSizeOuter(0));


    svg.append("g")
        .call(xAxis);

    svg.append("g")
        .call(yAxis);

    let bar = svg.selectAll(".bar")     /* defines charaacteristics of bars to add to chart*/
        .append("g")
        .data(data)
        .join("g")
        .attr("class", "bar");  

    bar.append("rect")                      /* adds bars to chart */
        .attr("fill", "steelblue")
        .attr("x", d => x(d.branch))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.num))
        .attr("height", d => y(0)-y(d.num));

    
});

