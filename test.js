Plotly.plot('plot', [{
    y: [1],
    mode: 'lines+markers', 
    marker: {color: 'pink', size: 8},
    line: {width: 4}
  }, {
    y: [7],
    mode: 'lines+markers',
    marker: {color: 'gray', size:8},
    line: {width: 4}
  }]);
  arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  arr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18]

  var cnt = 0;

function plot() {
      
      
        Plotly.extendTraces('plot', {
          y: [[arr1[cnt]], [arr2[cnt]]]
        }, [0, 1])
      cnt++;
        
}

function rand() {
    return Math.random();
  }