# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

doctors = Doctor.create([
    { name: 'stu', speciality: 'beer'},
    { name: 'gabe', speciality: 'being chilled'},
    { name: 'ben', speciality: 'beards'}
])

patients = Patient.create([
    { name: 'sam', disease: 'eyebrow dandruff'},
    { name: 'sofia', disease: 'swedish'},
    { name: 'tarryn', disease: 'aussie'}
])

def random_day_in_next_week
    date = Date.today + (1..7).to_a.sample
    date.to_s
end

20.times do
    Appointment.create(doctor: doctors.sample, patient: patients.sample, date: random_day_in_next_week , time: '19:00')
end