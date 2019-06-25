class AddIngredientToSushis < ActiveRecord::Migration
  def change
    add_reference :sushis, :ingredient, foreign_key: true
  end
end
