<%= f.label :user_id %>
  <% if @user %>
      <p><%= @user.name %></p>
      <%= form.hidden_field :user_id, value: @user.id %>class PetsController < ApplicationController

  def index
    @pets = Pet.all
  end

  def new
    @species_for_select = Species.all.map{|species| [species.name, species.id]}
  end

  def create
    pet = Pet.create params.require(:pet).permit(:name, :age, :species_id)
    redirect_to pet_path(pet)
  end

  def edit
    @pet = Pet.find params[:id]
    @species_for_select = Species.all.map{|species| [species.name, species.id]}
  end

  def update
    pet = Pet.find params[:id]
    pet.update params.require(:pet).permit(:name, :age, :species_id)
    redirect_to pet_path(pet)
  end

  def show
    @pet = Pet.find params[:id]
  end

  def destroy
    pet = Pet.find params[:id]
    pet.destroy
    redirect_to pets_path
  end
end
