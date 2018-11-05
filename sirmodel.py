# Author: Kibugi Kamau Mbugua
# Description: This program is written to implement to SIR model for the mathematical modeling of diseases.
# Version1 began: 10/15/2018

import sys


class SIRModel:

    initial_population = 0
    infection_duration = 0
    trans_rate = 0
    percent_die = 0
    percent_immune = 0
    initial_infected = 0
    sim_period = 0

    days = []
    s = []
    i = []
    r = []
    dead = []
    N = []

    def __init__(self, initial_population, infection_duration, trans_rate, percent_die, percent_immune, initial_infected, sim_period):
        self.initial_population = initial_population
        self.infection_duration = infection_duration
        self.trans_rate = trans_rate
        self.percent_die = percent_die
        self.percent_immune = percent_immune
        self.initial_infected = initial_infected
        self.sim_period = sim_period

        self.populate_data()

    def populate_data(self):
        # arrays
        days = []
        s = []
        i = []
        r = []
        dead = []
        N = []

        # initial values
        days.append(0)
        N.append(self.initial_population)
        r.append(N[0]*(self.percent_immune/100))
        i.append(self.initial_infected)
        s.append(N[0] - r[0] - i[0])
        dead.append(0)

        for n in range(1, self.sim_period+1):
            s_prime = s[n-1] - (self.trans_rate * s[n-1] * i[n-1] / self.initial_population)
            i_prime = i[n-1] + (self.trans_rate * s[n-1] * i[n-1] / self.initial_population - i[n-1] / self.infection_duration - i[n-1] * self.percent_die / (100 * self.infection_duration))
            r_prime = r[n-1] + (i[n-1] / self.infection_duration)
            dead_prime = dead[n-1] = self.percent_die * i[n-1] / (100 * self.infection_duration)
            N_prime = s_prime + i_prime + r_prime


            days.append(n)
            s.append(s_prime)
            i.append(i_prime)
            r.append(r_prime)
            dead.append(dead_prime)
            N.append(N_prime)

        self.days = days
        self.s = s
        self.i = i
        self.r = r
        self.dead = dead
        self.N = N

        return


def run_model(percent_immune, virulence, infection_duration, trans_rate):
    # default/fixed values
    initial_population = 100000
    initial_infected = 7
    sim_period = 30
    percent_die = virulence
    model = SIRModel(initial_population, infection_duration, trans_rate, percent_die, percent_immune, initial_infected, sim_period)

    days = model.days
    susceptible = model.s
    infected = model.i
    immune = model.r
    dead = model.dead
    population = model.N

    return [days, susceptible, infected, immune, dead, population]


def main():
    data = run_model(5.00, 5.00, 4.00, 3.00)
    print(data)

    for i in data[0]:
        print(i, data[1][i], data[2][i], data[3][i], data[4][i], data[5][i])


