

function sirmodel(initial_population, infection_duration, trans_rate, percent_die, percent_immune, initial_infected) {

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
            s_prime = s[n-1] - (trans_rate * s[n-1] * i[n-1]/initial_population)
            i_prime = i[n-1] + (trans_rate * s[n-1] * i[n-1]/initial_population - i[n-1]/infection_duration - i[n-1] * percent_die/(100*infection_duration))
            r_prime = r[n-1] + (i[n-1]/infection_duration)
            dead_prime = percent_die * i[n-1]/(100 * infection_duration) + dead[n-1]
            N_prime = s_prime + i_prime + r_prime

            
            days.push(n)
            s.push(round(s_prime, 2)) 
            i.push(round(i_prime, 2))
            r.push(round(r_prime, 2))
            dead.push(round(dead_prime, 2))
            N.push(round(N_prime, 2))
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
function model(percent_immune, virulence, infection_duration, trans_rate){
    // default/fixed values
    var initial_population = 100000
    var initial_infected = 1

    var model = new sirmodel(initial_population, infection_duration, trans_rate, virulence*100, percent_immune, initial_infected)
    this.days = model.days
    this.susceptible = model.Susceptible
    this.sick = model.infected
    this.immune = model.immune
    this.population = model.population
}

// helper functions
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
<<<<<<< HEAD
  }
=======
  }
>>>>>>> c996df579060416f53a2540aa3d2218663709eed
