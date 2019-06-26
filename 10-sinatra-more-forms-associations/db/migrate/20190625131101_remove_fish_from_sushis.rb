class RemoveFishFromSushis < ActiveRecord::Migration
  def change
    remove_column :sushis, :fish
  end
end
