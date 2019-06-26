class RemoveIngredientFromSushis < ActiveRecord::Migration
  def change
    remove_reference :sushis, :ingredient, index: true, foreign_key: true
  end
end
