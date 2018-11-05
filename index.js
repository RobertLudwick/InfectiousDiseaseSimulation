// global variables
var has_run = false
var data
var immunity, virulence, duration, transmission 
var immunity_value = 0
var virulence_value = 0
var duration_value = 0
var transmission_value = 0
var current_row = 0

//functions
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
    return new model(immunity_value, virulence_value, duration_value, transmission_value)
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

function write_to_table(day, susceptible, infected, immune, dead, population) {
var table  = document.getElementById("myTable")

var row = table.insertRow(-1);

var day_cell = row.insertCell(0)
var susceptible_cell = row.insertCell(1)
var infected_cell = row.insertCell(2)
var immune_cell = row.insertCell(3)
var dead_cell = row.insertCell(4)
var population_cell = row.insertCell(5)

day_cell.innerHTML = day
susceptible_cell.innerHTML = round(susceptible, 0)
infected_cell.innerHTML = round(infected, 0)
immune_cell.innerHTML = round(immune, 0)
dead_cell.innerHTML = round(dead, 0)
population_cell.innerHTML = round(population, 0)

//build_part_graph(day, susceptible, infected, immune, deae, population)
}

function clear_values() {
    document.getElementById("initialImmunity").value = "";
	document.getElementById("Virulence").value = "";
	document.getElementById("infectionDuration").value = "";
	document.getElementById("TransRate").value = "";
}

function clear_table() {
    var table = document.getElementById("myTable")
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}


function run (method) {
if (!has_run) {
    data = run_model()
}
var data_length = data.sim_period

if (has_run && (immunity_value != immunity.value || virulence_value != virulence.value || duration_value != duration.value || transmission_value != transmission.value)) {
    clear_table()
}
if (method == "autorun") {
    build_full_graph(data)
    for(day = current_row; day<= data_length; day++) {
        write_to_table(data.days[day], data.susceptible[day], data.infected[day], data.immune[day], data.dead[day], data.population[day])
    }
}
if (method == "day_by_day") {
    if(current_row <= data_length) {
        write_to_table(data.days[current_row], data.susceptible[current_row], data.infected[current_row], data.immune[current_row], data.dead[current_row], data.population[current_row])
        current_row ++;
    }
}
}


// helper functions
function round(value, decimals) {
return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
} 