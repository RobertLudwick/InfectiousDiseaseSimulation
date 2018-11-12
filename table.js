// This file manages the table displayed on the page
function write_to_table(day, susceptible, infected, immune, dead, population) {
    console.log("table")
    var table  = document.getElementById("data_table").getElementsByTagName('tbody')[0];
    
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
    
    build_graph(data, current_row)
    }


class Table {
    constructor(data, table_id) {
        this.data = data;
        this.table = document.getElementById(table_id);
    }

    getTableID() {
        return this.table.id
    }

    add_row(row_number) {
        var row = this.table.insertRow(-1);

        var day_cell = row.insertCell(0)
        var susceptible_cell = row.insertCell(1)
        var infected_cell = row.insertCell(2)
        var immune_cell = row.insertCell(3)
        var dead_cell = row.insertCell(4)
        var population_cell = row.insertCell(5)

        day_cell.innerHTML = data.day[row_number]
        susceptible_cell.innerHTML = round(data.susceptible[row_number], 0)
        infected_cell.innerHTML = round(data.infected[row_number], 0)
        immune_cell.innerHTML = round(data.immune[row_number], 0)
        dead_cell.innerHTML = round(data.dead[row_number], 0)
        population_cell.innerHTML = round(data.population[row_number], 0)
        write_to_graph(data, row_number)
    }
}

// helper functions
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    } 