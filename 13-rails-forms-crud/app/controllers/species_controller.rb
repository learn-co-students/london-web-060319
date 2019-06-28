class SpeciesController < ApplicationController

    before_action :find_species, only: [:edit, :update]

    def new
        @species = Species.new
    end

    def create
        species = Species.create species_params
        redirect_to new_pet_path
    end

    def edit
    end

    def update
        @species.update species_params
        redirect_to new_pet_path
    end

    private

    def find_species
        @species = Species.find params[:id]
    end

    def species_params
        params.require(:species).permit(:name)
    end

end
