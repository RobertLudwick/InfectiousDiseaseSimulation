// This page manages the graph displayed on the page

class Graph {
    constructor(data, div_id) {
        this.graph_div = document.getElementById(div_id)
        this.graph_type = "line"
        this.graph_line = {shape: "spline"}
        this.data = data
        this.range = data.sim_period * 1.1
        this.domain = data.initial_population * 1.1
        this.layout = {
            autosize: false,
            width: 500,
            height: 400,
            margin: {
                l: 5,
                r: 0,
                b: 20,
                t: 20,
                pad: 1
              },
            
            xaxis: {
                range: [0, this.range]
            },
            yaxis: {
                range: [0, this.domain]
            }
        }
        this.has_started = false
    }

    autorun() {
        var type_a = this.graph_type
        var line_a = this.graph_line
        var x_data = data.days[current_row]

            var susceptible_trace = {
                x: x_data,
                y: data.susceptible,
                type: type_a,
                line: line_a,
                name: "susceptible"
            };
            var infected_trace = {
                x: x_data,
                y: data.infected,
                type: type_a,
                line: line_a,
                name: "infected"
            };
            var immune_trace = {
                x: x_data,
                y: data.immune,
                type: type_a,
                line: line_a,
                name: "immune"
            };
            var dead_trace = {
                x: x_data,
                y: data.dead,
                type: type_a,
                line: line_a,
                name: "dead"
            };
            var population_trace = {
                x: x_data,
                y: data.population,
                type: type_a,
                line: line_a,
                name: "population"
            };

            var to_plot = [susceptible_trace, infected_trace, immune_trace, dead_trace, population_trace]
            Plotly.newPlot(this.graph_div, to_plot, this.layout)
            this.has_started = true
        
    }

    write_to_graph(current_row) {
        var type_a = this.graph_type
        var line_a = this.graph_line
        var x_data = data.days[current_row]
    
        if (!this.has_started) {
            var susceptible_trace = {
                x: x_data,
                y: [data.susceptible[current_row]],
                type: type_a,
                line: line_a,
                name: "susceptible"
            };
            var infected_trace = {
                x: x_data,
                y: [data.infected[current_row]],
                type: type_a,
                line: line_a,
                name: "infected"
            };
            var immune_trace = {
                x: x_data,
                y: [data.immune[current_row]],
                type: type_a,
                line: line_a,
                name: "immune"
            };
            var dead_trace = {
                x: x_data,
                y: [data.dead[current_row]],
                type: type_a,
                line: line_a,
                name: "dead"
            };
            var population_trace = {
                x: x_data,
                y: [data.population[current_row]],
                type: type_a,
                line: line_a,
                name: "population"
            };

            var to_plot = [susceptible_trace, infected_trace, immune_trace, dead_trace, population_trace]
            Plotly.newPlot(this.graph_div, to_plot, this.layout)
            this.has_started = true
        
        }
        else{

            Plotly.extendTraces(this.graph_div, {
                y: [[data.susceptible[current_row]], [data.infected[current_row]], [data.immune[current_row]], [data.dead[current_row]], [data.population[current_row]]]},
                [0, 1, 2, 3, 4])
        }
    }
}