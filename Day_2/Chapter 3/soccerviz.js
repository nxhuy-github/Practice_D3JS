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

  let teamG = d3.selectAll('g.overallG')

  teamG.append('circle')
    .transition()
    .delay(function(d, i) { return i*100 })
    .duration(500)
    .attr('r', 40)
    .transition()
    .duration(500)
    .attr('r', 20)

  teamG.append('text')
    .attr('y', 30)
    .style('text-anchor', 'middle')
    .text(function(d) { return d.team })

  let dataKeys = d3.keys(data[0]).filter(function(e) {
    return e !== 'team' && e !== 'region'
  })

  d3.select('#controls')
    .selectAll('button.teams')
    .data(dataKeys)
    .enter()
    .append('button')
    .on('click', buttonClick)
    .html(function(d) { return d })

  function buttonClick(datapoint) {
    let maxVal = d3.max(data, function(d) { return parseFloat(d[datapoint]) })
    let radiusScale = d3.scaleLinear().domain([0, maxVal]).range([2,20])
    let colorRamp = d3.scaleLinear().domain([0, maxVal]).range(['yellow', 'blue'])

    d3.selectAll('g.overallG')
      .select('circle')
      .transition()
      .duration(1000)
      .attr('r', function(d) { return radiusScale(d[datapoint]) })
      .style('fill', function(d) { return colorRamp(d[datapoint]) })
  }

  teamG.on('mouseover', highlightRegion2)

  function highlightRegion2(d) {
    let teamColor = d3.rgb('pink')
    d3.select(this).select('text').classed('highlight', true).attr('y', 10)
    d3.selectAll('g.overallG')
      .select('circle')
      .style('fill', function(p) {
        return p.region === d.region ?
          teamColor.darker(.75) :
          teamColor.brighter(.5)
      })
    this.parentElement.appendChild(this);
  }

  function highlightRegion(d) {
    d3.selectAll('g.overallG')
      .select('circle')
      .style('fill', function(p) {
        return p.region === d.region ? 'red' : 'gray'
      })
  }
  
  teamG.on("mouseout", unHighlight)

  function unHighlight(d) {
    d3.selectAll('g.overallG').select('circle').attr('class', '')
    d3.selectAll('g.overallG').select('text').classed('highlight', false).attr('y', 30)
  }

  teamG.select("text").style("pointer-events","none")

}

