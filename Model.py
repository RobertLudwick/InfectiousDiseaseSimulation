# Author: Kibugi Kamau Mbugua
# Description: This program is written to implement to SIR model for the mathematical modeling of diseases.
# Version1 began: 10/15/2018


class SIRModel:

    N = 0  # Total population: N = S(t) + I(t) + R(t)
    days_to_simulate = 30

    initial_immunity = 0    # 0-100%
    virulence = 0.00    # 0.00-0.075
    duration_of_infection = 1   # 1-20
    rate_of_transmission = 0.1  # 0.1-10.0

    k = 1.0/10   # greater than or equal to 0
    alpha = 0   # probability: 0-1
    gamma = 0   # virulence i think????
    beta = 0.2    # greater than or equal to 0

    t = []
    S = []
    I = []
    R = []

    def __init__(self, initial_imunity, virulence, duration_of_infection, rate_of_infection, N):
        self.initial_immunity = initial_imunity
        self.virulence = virulence
        self.duration_of_infection = duration_of_infection
        self.rate_of_transmission = rate_of_infection
        self.N = N

        self.populate_data()

    def get_day(self, t):
        return filter(lambda day: day[t] == t, data)

    def populate_data(self):
        #initial values
        R0 = self.N * (self.initial_immunity/100)
        I0 = 1
        S0 = self.N - R0 - I0

        self.t.append(0)
        self.S.append(S0)
        self.I.append(I0)
        self.R.append(R0)

        for day in range(1, self.days_to_simulate+1):
            s_prime = self.S[day-1] - self.beta * self.S[day-1] * self.I[day-1]
            dead_prime = self.virulence * (self.I[day-1]/self.duration_of_infection)
            i_prime = (self.beta * self.S[day-1] - self.k) * self.I[day-1] + dead_prime
            r_prime = self.k * self.I[day-1]

            self.t.append(day)
            self.S.append(round(s_prime, 2))
            self.I.append(round(i_prime,2))
            self.R.append(round(r_prime, 2))


def main():
    obj = SIRModel(0.0, 0.40, 2, 1, 100000)
    for i in range(0, 31):
        print(obj.t[i], obj.S[i], obj.I[i], obj.R[i])

    print(obj.S[9])

main()


