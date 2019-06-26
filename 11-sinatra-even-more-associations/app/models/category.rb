class Category < ActiveRecord::Base
    has_many :sushis
    has_many :ingredients, through: :sushis
end
