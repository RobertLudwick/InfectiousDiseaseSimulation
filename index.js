// global variables
var has_run = false
var data
function run_model() {
var imunity = document.getElementById("initialImmunity").value;
var virulence = document.getElementById("Virulence").value;
var duration = document.getElementById("infectionDuration").value;
var transmission = document.getElementById("TransRate").value;

var should_run = validation(imunity, virulence, duration, transmission)
if (!should_run){
    return 
}

return new model(imunity, virulence, duration, transmission)
}

function validation() {
return true
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
}



function run (method) {
if (!has_run) {
    data = run_model()
    has_run = true
}
if (method == "autorun") {
    while (data.days.length!= 0) {
        write_to_table(data.days.shift(), data.susceptible.shift(), data.infected.shift(), data.immune.shift(), data.dead.shift(), data.population.shift())
    }
}
if (method == "day_by_day") {
    if(data.days.length != 0) {
        write_to_table(data.days.shift(), data.susceptible.shift(), data.infected.shift(), data.immune.shift(), data.dead.shift(), data.population.shift())
    }
}
}


// helper functions

function round(value, decimals) {
return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
} 