function create_csv(data) {
    console.log("done")
    var line_end = "\n"
    var delimiter = ','
    var csv = ""

    var simulation_parameters = ["Initial % Immune", "Virulence", "Infection Duration", "Rate of Transmission", "Population Size", "Initially Infected", "Simulation Duration"]
    var simulation_parameter_values = [data.percent_immune, data.percent_die, data.infection_duration, data.trans_rate, data.initial_population, data.initial_infected, data.sim_period]
    var first_row = ["Day","Susceptible","Infected","Immune","Dead","Population"]

    csv += simulation_parameters.join(delimiter) + line_end
    csv += simulation_parameter_values.join(delimiter) + line_end
    csv += line_end + line_end
    csv += first_row.join(delimiter) + line_end

    for(day = 0; day<= data.sim_period; day++) {
        var row = [round(data.days[day], 0), round(data.susceptible[day], 0), round(data.infected[day], 0), round(data.immune[day], 0), round(data.dead[day], 0), round(data.population[day], 0)]
        csv += row.join(delimiter) + line_end
    }

    return csv
}

function download_csv(data) {
    var filename = "data.csv"

    var new_csv = create_csv(data)
    new_csv = 'data:text/csv;charset=utf-8,' + new_csv
    var csv_file = encodeURI(new_csv)

    //link = document.getElementById(button_id)
    link = document.createElement('a');
    link.hidden = true;
    link.setAttribute('href', csv_file);
    link.setAttribute('download', filename);
    link.click();
}

// helper functions
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    } 