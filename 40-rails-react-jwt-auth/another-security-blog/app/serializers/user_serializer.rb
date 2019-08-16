class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :posts
end
