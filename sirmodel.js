

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
            s.push(s_prime)
            i.push(i_prime)
            r.push(r_prime)
            dead.push(dead_prime)
            N.push(N_prime)
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