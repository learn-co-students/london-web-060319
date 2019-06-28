class RemoveSpeciesFromPets < ActiveRecord::Migration[5.2]
  def change
    remove_column :pets, :species, :string
  end
end
