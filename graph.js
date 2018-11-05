
function  build_graph(data, current_row) {
    
    var d = document.getElementById('plot')
    var type_a = "line"
    var line_a = {shape: "spline"}
    var x_data = data.days.slice(0, current_row)
    console.log(x_data)
    var susceptible_trace = {
        x: x_data,
        y: data.susceptible.slice(0, current_row),
        type: type_a,
        line: line_a,
        name: "susceptible"
    };
    var infected_trace = {
        x: x_data,
        y: data.infected.slice(0, current_row),
        type: type_a,
        line: line_a,
        name: "infected"
    };
    var immune_trace = {
        x: x_data,
        y: data.immune.slice(0, current_row),
        type: type_a,
        line: line_a,
        name: "immune"
    };
    var dead_trace = {
        x: x_data,
        y: data.dead.slice(0, current_row),
        type: type_a,
        line: line_a,
        name: "dead"
    };
    var population_trace = {
        x: x_data,
        y: data.population.slice(0, current_row),
        type: type_a,
        line: line_a,
        name: "population"
    };
    
    var to_plot = [susceptible_trace, infected_trace, immune_trace, dead_trace, population_trace]
    
    var layout = {
        autosize: false,
        width: 600,
        height: 400,
        margin: {
            l: 0,
            r: 0,
            b: 20,
            t: 20,
            pad: 4
          },
        xaxis: {
            range: [0, data.sim_period]
        },
        yaxis: {
            range: [0, data.initial_population*1.1]
        }
    }

    Plotly.newPlot(d, to_plot, layout)
}

function show() {
    build_full_graph(data)
}
