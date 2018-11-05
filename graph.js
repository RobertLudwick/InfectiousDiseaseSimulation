
susceptible_cb = document.getElementById("susceptible_cb")
infected_cb = document.getElementById("infected_cb")
immune_cb = document.getElementById("immune_cb")
dead_cb = document.getElementById("dead_cb")
population_cb = document.getElementById("population_cb")

function  run() {
 

    var d = document.getElementById('tester')
    var data = new model(0, 5, 2, 1)
    var type_a = "line"
    var line_a = {shape: "spline"}

    var susceptible_trace = {
        x: data.days,
        y: data.susceptible,
        type: type_a,
        line: line_a,
        name: "susceptible",
        visible: susceptible_cb.checked
        
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
        xaxis: {
            range: [0, 100]
        },
        yaxis: {
            range: [0, 120000]
        }
    }

    Plotly.newPlot(d, to_plot, layout)
}