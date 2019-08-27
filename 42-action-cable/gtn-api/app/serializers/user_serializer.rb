class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :games, serializer: GameSerializer, include_nested_associations: true
end
