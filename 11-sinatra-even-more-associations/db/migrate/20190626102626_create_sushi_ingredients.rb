class CreateSushiIngredients < ActiveRecord::Migration
  def change
    create_table :sushi_ingredients do |t|
      t.references :sushi
      t.references :ingredient

      t.timestamps null: false
    end
  end
end
