
// var susceptible_cb = document.getElementById("susceptible_cb")
// var infected_cb = document.getElementById("infected_cb")
// var immune_cb = document.getElementById("immune_cb")
// var dead_cb = document.getElementById("dead_cb")
// var population_cb = document.getElementById("population_cb")
var data

function  build_graph(data) {
    console.log("built")
    var d = document.getElementById('tester')
    var type_a = "line"
    var line_a = {shape: "spline"}

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
            range: [0, 100]
        },
        yaxis: {
            range: [0, 120000]
        }
    }

    Plotly.newPlot(d, to_plot, layout)
}

function show() {
    build_graph(data)
}

function run() {
    data = new model(0, 5, 2, 1)
    build_graph(data)
}
