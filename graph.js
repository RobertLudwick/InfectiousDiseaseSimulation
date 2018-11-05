
function  build_full_graph(data) {
    var d = document.getElementById('plot')
    var type_a = "line"
    var line_a = {shape: "spline"}

    // document.getElementById("susceptible_cb").hidden = false
    // document.getElementById("infected_cb").hidden = false
    // document.getElementById("immune_cb").hidden = false
    // document.getElementById("dead_cb").hidden = false
    // document.getElementById("population_cb").hidden = false

    var susceptible_trace = {
        x: data.days,
        y: data.susceptible,
        type: type_a,
        line: line_a,
        name: "susceptible"
    };
    var infected_trace = {
        x: data.days,
        y: data.infected,
        type: type_a,
        line: line_a,
        name: "infected"
    };
    var immune_trace = {
        x: data.days,
        y: data.immune,
        type: type_a,
        line: line_a,
        name: "immune"
    };
    var dead_trace = {
        x: data.days,
        y: data.dead,
        type: type_a,
        line: line_a,
        name: "dead"
    };
    var population_trace = {
        x: data.days,
        y: data.population,
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

function build_part_graph() {

    build_full_graph(part_data)
}

function show() {
    build_full_graph(data)
}

