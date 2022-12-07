/* Bar chart for COVID country cases */

d3.csv("fox_data.csv").then(data => {
    

    for (let d of data) {
        d.Amount = +d.Amount/d.Pop;
    };

    const height = 400,
        width = 800,
        margin = ({top: 25, right: 30, bottom: 35, left: 50});
    
    

    let svg = d3.select("#chart3")
        .append("svg")
        .attr("viewBox", [0,0, width, height ]);

    let x = d3.scaleBand()
        .domain(data.map(d => d.City))          // returns an array
        .range([margin.left, width - margin.right])
        .padding(0.1);

    let y = d3.scaleLinear()
        .domain([0,d3.max(data, d => d.Amount)]).nice()
        .range([height - margin.bottom, margin.top]);  // svg's are built from the top down i.e 0 is the top of screen

    const xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom+ 5})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    const yAxis = g => g
        .attr("transform", `translate(${margin.left -5}, 0)`)
        .call(d3.axisLeft(y).tickSizeOuter(0));


    svg.append("g")
        .call(xAxis);

    svg.append("g")
        .call(yAxis);

    let bar = svg.selectAll(".bar")
        .append("g")
        .data(data)
        .join("g")
        .attr("class", "bar");  

    bar.append("rect")
        .attr("fill", "steelblue")
        .attr("x", d => x(d.City))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.Amount))
        .attr("height", d => y(0)-y(d.Amount));

    
});

