class DogsController < ApplicationController

  def index
    @dogs = Dog.all
    render json: @dogs
  end

  def up_for_adoption
    @dogs = Dog.all.select { |d| d.employees.length == 0 }
  end

  def adopt
    @dog = Dog.find(params[:id])
    @employees = Employee.all
  end

  def finalise_adoption
    byebug
    @employee = Employee.find(params[:dog][:id])
    @employee.update(dog: Dog.find(params[:id]))
  end 
end
