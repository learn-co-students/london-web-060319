class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def like_tweet(tweet)
    Like.new(tweet: tweet, user: self)
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self }
  end

end
