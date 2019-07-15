class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def username
    user.username
  end

  def likes
    Like.all.select { |like| self == like.tweet }
    # Long version of doing this with .each below
    # all_likes = []
    # Like.all.each do |like|
    #   if like.tweet == self
    #     all_likes << like
    #   end
    # end
    # all_likes
  end

  def users_who_liked_this
    likes.map { |like| like.user }
    # Long version of doing this with .each below
    # all_users = []
    # likes.each do |like|
    #   all_users << like.user
    # end
    # all_users
  end
end
