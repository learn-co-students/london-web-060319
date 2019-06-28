# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Species.destroy_all
Pet.destroy_all
species = Species.create([
    {name: 'hamster'},
    {name: 'dog'},
    {name: 'snake'}
])
Pet.create([
    { name: 'bob', species: species.first, age: 24},
    { name: 'coco', species: species.second, age: 10},
    { name: 'simon', species: species.third, age: 99}
])