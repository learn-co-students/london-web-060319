class Sushi < ActiveRecord::Base
    belongs_to :category
    has_many :sushi_ingredients
    has_many :ingredients, through: :sushi_ingredients
    accepts_nested_attributes_for :ingredients, reject_if: proc { |attributes| attributes['name'].blank? || Ingredient.find_by(name: attributes['name']) }
end
