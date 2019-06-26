class SushiIngredient < ActiveRecord::Base
    belongs_to :sushi
    belongs_to :ingredient
end
