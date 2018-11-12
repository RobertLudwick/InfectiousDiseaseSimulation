// global variables
var has_run = false
var data
var immunity, virulence, duration, transmission
var immunity_value = 0
var virulence_value = 0
var duration_value = 0
var transmission_value = 0


//functions
function showGraph() {
	var graph = document.getElementById("plot")
	graph.hidden = false
	var table = document.getElementById("tableOut")
	table.hidden = true
}

function showTable() {
var graph = document.getElementById("plot")
	graph.hidden = true
	var table = document.getElementById("tableOut")
	table.hidden = false
}

function run_model() {
    immunity = document.getElementById("initialImmunity")
    virulence = document.getElementById("Virulence")
    duration = document.getElementById("infectionDuration")
    transmission = document.getElementById("TransRate")
    immunity_value = immunity.value
    virulence_value = virulence.value
    duration_value = duration.value
    transmission_value = transmission.value

    var should_run = validation()
    if (!should_run){
        return 
    }
    has_run = true
    var initial_population = 100000
    var sim_period = 100
    var inital_infected = 1
    return new sirmodel(initial_population, duration_value ,transmission_value, virulence_value, immunity_value, inital_infected, sim_period)
}

function validation() {
    should_run = true
    document.getElementById("initialImmunityError").hidden = true
    document.getElementById("VirulenceError").hidden = true
    document.getElementById("infectionDurationError").hidden = true
    document.getElementById("TransRateError").hidden = true
    document.getElementById("rangeError").hidden = true

    if(immunity.value == "" || immunity.value < 0 || immunity.value > 100) {
        should_run = false
        document.getElementById("initialImmunityError").hidden = false
    }
    if(virulence.value == "" || virulence.value < 0 || virulence.value > 75) {
        should_run = false
        document.getElementById("VirulenceError").hidden = false
    }
    if(duration.value == "" || duration.value < 1 || duration.value > 20) {
        should_run = false
        document.getElementById("infectionDurationError").hidden = false
    }
    if(transmission.value == "" || transmission.value < 0.1 || transmission.value > 10) {
        should_run = false
        document.getElementById("TransRateError").hidden = false
    }

if (should_run == false) {
    document.getElementById("rangeError").hidden = false
}

return should_run
}

function clear_values() {
    document.getElementById("initialImmunity").value = "";
	document.getElementById("Virulence").value = "";
	document.getElementById("infectionDuration").value = "";
    document.getElementById("TransRate").value = "";
    clear_table()
}

function clear_table() {
    var table = document.getElementById("data_table")
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}

function has_changed() {
    has_run = false
}

function run (method) {
if (!has_run) {
    clear_table()
    current_row = 0
    data = run_model()
    graph = new Graph(data, "graph_div")
}

if (has_run && (immunity_value != immunity.value || virulence_value != virulence.value || duration_value != duration.value || transmission_value != transmission.value)) {
}
if (method == "autorun") {
    graph.autorun()
    for(day = current_row; day<= data.sim_period; day++) {
        write_to_table(data.days[day], data.susceptible[day], data.infected[day], data.immune[day], data.dead[day], data.population[day])
        //graph.write_to_graph(day)
        current_row ++;
    }
}
if (method == "day_by_day") {

    if(current_row <= data.sim_period) {
        write_to_table(data.days[current_row], data.susceptible[current_row], data.infected[current_row], data.immune[current_row], data.dead[current_row], data.population[current_row])
        graph.write_to_graph(current_row)
        current_row ++;
    }
}
}


// helper functions
function round(value, decimals) {
return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
} 