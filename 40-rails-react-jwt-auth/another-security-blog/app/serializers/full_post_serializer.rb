class FullPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :user

  def user
    UserSerializer.new(self.object.user)
  end

end
