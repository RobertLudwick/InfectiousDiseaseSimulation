

function sirmodel(initial_population, infection_duration, Rzero, percent_die, percent_immune, initial_infected) {

    // fixed parameters
    var sim_period = 30

    // data
    days = new Array()
    s = new Array()
    i = new Array()
    r = new Array()
    dead = new Array()
    N = new Array()
    
    // this method generates the data
    function generate_data() {
        
        // initial values
        days.push(0)
        N.push(initial_population)
        r.push(N[0]*(percent_immune/100))
        i.push(initial_infected)
        s.push(N[0] - r[0] - i[0])
        dead.push(0)

        for(n=1; n <= sim_period; n++) {
            s_prime = s[n-1] - (Rzero * s[n-1] * i[n-1]/initial_population)
            i_prime = i[n-1] + (Rzero * s[n-1] * i[n-1]/initial_population - i[n-1]/infection_duration - i[n-1] * percent_die/(100*infection_duration))
            r_prime = r[n-1] + (i[n-1]/infection_duration)
            dead_prime = percent_die * i[n-1]/(100 * infection_duration) + dead[n-1]
            N_prime = s_prime + i_prime + r_prime

            
            days.push(n)
            s.push(Math.round(s_prime)) 
            i.push(Math.round(i_prime))
            r.push(Math.round(r_prime))
            dead.push(Math.round(dead_prime))
            N.push(Math.round(N_prime))
        }

    }
    
    generate_data()

    // renaming data
    this.days = days
    this.susceptible = s
    this.infected = i
    this.immune = r
    this.dead = dead
    this.population = N

}

// use this to get your number, it's like temporary interface to get numbers
// it can return the list of number we see on the website. all values in percent
function model(percent_immune, virulence, infection_duration, transmission_rate){
    // default values
    var initial_population = 100000
    var Rzero = 1
    var initial_infected = 1

    var model = new sirmodel(initial_population, infection_duration, Rzero, virulence, percent_immune, initial_infected)
    this.days = model.days
    this.susceptible = model.Susceptible
    this.sick = model.infected
    this.immune = model.immune + model.dead
    this.population = model.population
}

function Autorun() {
    var imunity = document.getElementById("initialImmunity").value;
    var virulence = document.getElementById("Virulence").value;
    var duration = document.getElementById("infectionDuration").value;
    var transmission = document.getElementById("TransRate").value;
   	var data = new model(imunity, virulence, duration, transmission)
   	//document.getElementById("demo").innerHTML = transmission;
   	Table(data)
	//document.getElementById("demo").innerHTML = transmission;
	}
	
function Table(data) {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.getElementById("tableOut").appendChild(x);
	for (i = 0; i < 30; i++) {
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
    }
}

function Clear(data) {
	document.getElementById("initialImmunity").value = "";
	document.getElementById("Virulence").value = "";
	document.getElementById("infectionDuration").value = "";
	document.getElementById("TransRate").value = "";
}

 function generateData() {
                var imunity = document.getElementById("initialImmunity").value;
    			var virulence = document.getElementById("Virulence").value;
    			var duration = document.getElementById("infectionDuration").value;
    			var transmission = document.getElementById("TransRate").value;
                var data = new model(imunity, virulence, duration, transmission)
                var table  = document.getElementById("myTable")
                for (day in data.days) {
                    var row = table.insertRow(-1);

                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(1)
                    var cell3 = row.insertCell(2)
                    var cell4 = row.insertCell(3)

                    cell1.innerHTML = data.days[day]
                    cell2.innerHTML = data.sick[day]
                    cell3.innerHTML = data.immune[day]
                    cell4.innerHTML = data.population[day]
                }
            }
