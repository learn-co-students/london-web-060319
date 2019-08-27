class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :turns
  # has_many :moves
  has_many :users
end
