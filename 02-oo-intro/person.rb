require "pry"
class Person

  attr_accessor(:name)
  attr_reader(:date_of_birth)
  # attr_writer(:name)
  @@all = []

  def initialize(name, date_of_birth)
    @name = name
    @date_of_birth = date_of_birth
    @@all << self
  end


  def say_hello
    puts "Hi, my name is #{@name}"
  end

  def self.all
    @@all
  end

  # getter method
  # def name
  #   @name
  # end

  # setter method
  # def name=(name)
  #   @name = name
  # end

end
# binding.pry
# 0
