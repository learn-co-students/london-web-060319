class CreateMoves < ActiveRecord::Migration[6.0]
  def change
    create_table :moves do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :number
      t.references :game, null: false, foreign_key: true
      t.integer :turn

      t.timestamps
    end
  end
end
