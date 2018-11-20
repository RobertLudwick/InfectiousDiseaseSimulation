class Table {
    constructor(data, table_id) {
        this.data = data;
        this.table = document.getElementById(table_id);
    }

    getTableID() {
        return this.table.id
    }

    write_to_table(row_number) {
        var table_body  = this.table.getElementsByTagName('tbody')[0];
        var row = table_body.insertRow(-1);

        var day_cell = row.insertCell(0)
        var susceptible_cell = row.insertCell(1)
        var infected_cell = row.insertCell(2)
        var immune_cell = row.insertCell(3)
        var dead_cell = row.insertCell(4)
        var population_cell = row.insertCell(5)

        day_cell.innerHTML = this.data.days[row_number]
        susceptible_cell.innerHTML = round(this.data.susceptible[row_number], 0)
        infected_cell.innerHTML = round(this.data.infected[row_number], 0)
        immune_cell.innerHTML = round(this.data.immune[row_number], 0)
        dead_cell.innerHTML = round(this.data.dead[row_number], 0)
        population_cell.innerHTML = round(this.data.population[row_number], 0)
        
    }

    clear_table() {
    while (this.table.rows.length > 1) {
        this.table.deleteRow(-1);
    }
}
}

// helper functions
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    } 