class MoveSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :number, :turn, :user_id
end
