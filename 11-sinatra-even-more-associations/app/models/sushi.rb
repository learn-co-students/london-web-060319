class Sushi < ActiveRecord::Base
    has_many :sushi_ingredients
    has_many :ingredients, through: :sushi_ingredients
end
