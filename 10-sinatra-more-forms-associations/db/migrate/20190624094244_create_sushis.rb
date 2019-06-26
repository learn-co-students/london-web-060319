class CreateSushis < ActiveRecord::Migration
  def change
    create_table :sushis do |t|
      t.string :name
      t.float :price
      t.string :fish

      t.timestamps null: false
    end
  end
end
