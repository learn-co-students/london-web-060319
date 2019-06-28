class AddSpeciesToPets < ActiveRecord::Migration[5.2]
  def change
    add_reference :pets, :species, foreign_key: true
  end
end
