class User
  # A getter method for the username
  attr_reader(:username)
  # Create a new user with a username
  def initialize(username)
    @username = username
    # A user should have an array of tweets that belong to it
  end

  # An instance method that lets a user post a new tweet
  def post_tweet(message)
    new_tweet = Tweet.new(message: message, user: self)
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self }
  end
end
