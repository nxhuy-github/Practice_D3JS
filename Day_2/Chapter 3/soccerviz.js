function createSoccerViz() {
  d3.csv('worldcup.csv', function(data) {
    overallTeamViz(data)
  })
}

function overallTeamViz(data) {
  d3.select('svg')
    .append('g')
    .attr('id', 'teamsG')
    .attr('transform', "translate(50,300)")
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'overallG')
    .attr('transform', function(d, i) {
      return 'translate(' + (i*50) + ', 0)'
    })

  var teamG = d3.selectAll('g.overallG')

  teamG.append('circle')
    .attr('r', 20)
    .style('fill', 'pink')
    .style('stroke', 'black')
    .style('stroke-width', '1px')

  teamG.append('text')
    .attr('y', 30)
    .style('text-anchor', 'middle')
    .style('font-size', '10px')
    .text(function(d) { return d.team })
}