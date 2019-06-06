
class Tweet
  @@all = []
  attr_reader(:user)
    # Create a new tweet with a message
    # A tweet will belong to a user
  def initialize(message:, user:)
    @message = message
    @user = user
    @@all << self
  end

  # A method called username which returns the username of the user that this tweet belongs to
  def username
    @user.username
  end

  # A method to return every instance of tweet that currently exists
  def self.all
    @@all
  end

end
