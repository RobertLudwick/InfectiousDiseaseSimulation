
function  build_full_graph(data) {
    var d = document.getElementById('plot')
    var type_a = "line"
    var line_a = {shape: "spline"}

    document.getElementById("susceptible_cb").hidden = false
    document.getElementById("infected_cb").hidden = false
    document.getElementById("immune_cb").hidden = false
    document.getElementById("dead_cb").hidden = false
    document.getElementById("population_cb").hidden = false

    var susceptible_trace = {
        x: data.days,
        y: data.susceptible,
        type: type_a,
        line: line_a,
        visible: document.getElementById("susceptible_cb").checked,
        name: "susceptible"
    };
    var infected_trace = {
        x: data.days,
        y: data.infected,
        type: type_a,
        line: line_a,
        visible: document.getElementById("infected_cb").checked,
        name: "infected"
    };
    var immune_trace = {
        x: data.days,
        y: data.immune,
        type: type_a,
        line: line_a,
        visible: document.getElementById("immune_cb").checked,
        name: "immune"
    };
    var dead_trace = {
        x: data.days,
        y: data.dead,
        type: type_a,
        line: line_a,
        visible: document.getElementById("dead_cb").checked,
        name: "dead"
    };
    var population_trace = {
        x: data.days,
        y: data.population,
        type: type_a,
        line: line_a,
        visible: document.getElementById("population_cb").checked,
        name: "population"
    };
    
    var to_plot = [susceptible_trace, infected_trace, immune_trace, dead_trace, population_trace]
    
    var layout = {
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

