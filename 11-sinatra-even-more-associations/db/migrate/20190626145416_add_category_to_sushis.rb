class AddCategoryToSushis < ActiveRecord::Migration
  def change
    add_reference :sushis, :category, foreign_key: true, index: true
  end
end
