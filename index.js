// global variables
var has_run = false
var data
var graph
var table

// functions linked to buttons
// for form
function run (method) {
    if (!has_run) {
        current_row = 0
        data = run_model()     
        graph = new Graph(data, "graph_div")
        table = new Table(data, "data_table")
        table.clear_table()
    }

    if (method == "autorun") {
        graph.autorun()
        for(day = current_row; day<= data.sim_period; day++) {
            table.write_to_table(data.days[day], data.susceptible[day], data.infected[day], data.immune[day], data.dead[day], data.population[day])
            graph.autorun()
            current_row ++;
        }
    }
    if (method == "day_by_day") {

        if(current_row <= data.sim_period) {
            table.write_to_table(data.days[current_row], data.susceptible[current_row], data.infected[current_row], data.immune[current_row], data.dead[current_row], data.population[current_row])
            graph.write_to_graph(current_row)
            current_row ++;
        }
    }
}

function export_csv(){
    if(has_run) {
        download_csv(data)
    }
}

function clear() {
    document.getElementById("initial_immunity").value = ""
    document.getElementById("virulence").value = ""
    document.getElementById("infection_duration").value = ""
    document.getElementById("trans_rate").value = ""
    document.getElementById("initial_population").value = ""
    document.getElementById("sim_period").value = ""
    document.getElementById("initial_infected").value = ""
    clear_table()
    graph.clear_graph()
}

// for display
function showGraph() {
	var graph = document.getElementById("graph_div")
	graph.hidden = false
	var table = document.getElementById("tableOut")
	table.hidden = true
}

function showTable() {
var graph = document.getElementById("graph_div")
	graph.hidden = true
	var table = document.getElementById("tableOut")
	table.hidden = false
}

function showBoth() {
var graph = document.getElementById("graph_div")
	graph.hidden = false
	var table = document.getElementById("tableOut")
	table.hidden = false
}


// functions to call features
// this function gets the data needed to populate the table and build the graph
function run_model() {
    immunity = document.getElementById("initial_immunity")
    virulence = document.getElementById("virulence")
    duration = document.getElementById("infection_duration")
    transmission = document.getElementById("trans_rate")
    initial_population = document.getElementById("initial_population")
    sim_period = document.getElementById("sim_period")
    initial_infected = document.getElementById("initial_infected")

    var should_run = validation()
    if (!should_run){
        
        return 
    }

    has_run = true
    return new sirmodel(initial_population.value, duration.value, transmission.value, virulence.value, immunity.value, parseInt(initial_infected.value, 10), sim_period.value)
               
}

function has_changed() {
    has_run = false
}

// this function dynamically resizes the the graph when the screen changes sizes
function resize() {
    graph.resize()
}

// this function validates the data input by the user and advises the user on their error
function validation() {
    should_run = true
    document.getElementById("initial_immunity_error").hidden = true
    document.getElementById("virulence_error").hidden = true
    document.getElementById("infection_duration_error").hidden = true
    document.getElementById("trans_rate_error").hidden = true
    document.getElementById("range_error").hidden = true
    document.getElementById("initial_population_error").hidden = true
    document.getElementById("initial_infected_error").hidden = true
    document.getElementById("sim_period_error").hidden = true

    if(immunity.value < 0 || immunity.value > 100) {
        should_run = false
        document.getElementById("initial_immunity_error").hidden = false
    }
    if(virulence.value < 0 || virulence.value > 75) {
        should_run = false
        document.getElementById("virulence_error").hidden = false
    }
    if(duration.value < 1 || duration.value > 20) {
        should_run = false
        document.getElementById("infection_duration_error").hidden = false
    }
    if(transmission.value < 0.1 || transmission.value > 10) {
        should_run = false
        document.getElementById("trans_rate_error").hidden = false
    }

    if(initial_population.value < 1000 || initial_population.value > 1000000) {
        should_run = false
        document.getElementById("initial_population_error").hidden = false
    }

    if(sim_period.value < 30 || sim_period.value > 1000 ) {
        should_run = false
        document.getElementById("sim_period_error").hidden = false
    }

    if(initial_infected.value < 1|| initial_infected.value > 10000){
        should_run = false
        document.getElementById("initial_infected_error").hidden = false
    }

    if (should_run == false) {
        document.getElementById("range_error").hidden = false
    }

    return should_run
}
