// Author: Kibugi Kamau Mbugua
// Description: This program is written to implement to SIR model for the mathematical modeling of diseases.
// Version2 began: 10/30/2018


function sirmodel(initial_population, infection_duration, trans_rate, percent_die, percent_immune, initial_infected, sim_period) {
    
    this.initial_population = initial_population
    this.sim_period = sim_period
    this.infection_duration = infection_duration
    this.trans_rate = trans_rate
    this.percent_die = percent_die
    this.percent_immune = percent_immune
    this.initial_infected = initial_infected

    console.log(initial_population)
    console.log(sim_period)
    console.log(infection_duration)
    console.log(trans_rate)
    console.log(percent_die)
    console.log(percent_immune)
    console.log(initial_infected)

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
            dead_prime = dead[n-1] + percent_die * i[n-1]/(100 * infection_duration)
            N_prime = s_prime + i_prime + r_prime

            days.push(n)
            s.push(s_prime)
            i.push(i_prime)
            r.push(r_prime)
            dead.push(dead_prime)
            N.push(N_prime)

            console.log(i_prime)
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
