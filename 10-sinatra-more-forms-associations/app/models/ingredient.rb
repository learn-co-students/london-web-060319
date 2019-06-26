class Ingredient < ActiveRecord::Base
    has_many :sushi_ingredients
    has_many :sushis, through: :sushi_ingredients
end
