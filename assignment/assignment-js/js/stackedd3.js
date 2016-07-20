
function plotStack(){
	
var margin = {top: 10, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var color = d3.scale.ordinal()
    .range(["red", "blue"]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"));
d3.json("stacked.json",function(error,data){
var svg = d3.select("dcontent")
			.classed("svg-container", true)
			.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr("viewBox", "0 0 1000 800")
			.classed("svg-content-responsive", true)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	
	data.forEach(function(d){
		d["x"]=d["x"];
		d["Aggregate_Population"]=+d["Aggregate_Population"];
		d["Aggregate_GDP"]=+d["Aggregate_GDP"];
		//console.log(d["Country Name"]);
	});


  //var data = [{"x":"Argentina","y1":"3421.3999999999996","y2":"1.4100000000000037"},{"x":"Australia","y1":"8121.5999999999985","y2":"1.129999999999999"},{"x":"Brazil","y1":"593","y2":"5.530000000000001"},{"x":"Canada","y1":"4862.130000000005","y2":"1.1499999999999986"},{"x":"China","y1":"2470.8","y2":"19.809999999999945"},{"x":"France","y1":"1914.9300000000003","y2":"0.8799999999999955"},{"x":"Germany","y1":"4509.669999999998","y2":"-0.980000000000004"},{"x":"India","y1":"59.3900000000001","y2":"64.28999999999996"},{"x":"Indonesia","y1":"489.3199999999997","y2":"11.180000000000007"},{"x":"Italy","y1":"-180.81000000000495","y2":"0.5"},{"x":"Japan","y1":"-4309.609999999993","y2":"-0.710000000000008"},{"x":"Mexico","y1":"1460.960000000001","y2":"4.109999999999999"},{"x":"Russia","y1":"3796.5700000000015","y2":"0.799999999999983"},{"x":"Saudi Arabia","y1":"5703.240000000002","y2":"2.4299999999999997"},{"x":"South Africa","y1":"-499.34000000000015","y2":"2.3699999999999974"},{"x":"Republic of Korea","y1":"3846.670000000002","y2":"0.8100000000000023"},{"x":"Turkey","y1":"819.8100000000013","y2":"2.9200000000000017"},{"x":"United Kingdom","y1":"3128.010000000002","y2":"1.8300000000000054"},{"x":"USA","y1":"4298.470000000001","y2":"6.980000000000018"}];
  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "x"; }));

  data.forEach(function(d) {
    var y0 = 0;
    d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.ages[d.ages.length - 1].y1;
  });

  data.sort(function(a, b) { return b.total - a.total; });

  x.domain(data.map(function(d) { return d.x; }));
  y.domain([0, d3.max(data, function(d) { return d.total; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
	   .selectAll("text")
		.attr("transform","rotate(-60)")
		.attr("dx","-.8em")
 .attr("dy",".25em")
 .style("text-anchor","end")
 .style("font-size","8px");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
	  .attr("transform","rotate(-60)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("text-anchor", "end")
      
  var state = svg.selectAll(".state")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x(d.x) + ",0)"; });

  state.selectAll("rect")
      .data(function(d) { return d.ages; })
    .enter().append("rect")
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.y1); })
      .attr("height", function(d) { return y(d.y0) - y(d.y1); })
      .style("fill", function(d) { return color(d.name); });

  var legend = svg.selectAll(".legend")
      .data(color.domain().slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });



 
}
);}