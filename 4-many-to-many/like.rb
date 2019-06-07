class Like
  @@all = []
  attr_reader(:user, :tweet)

  def initialize(user:, tweet:)
    @user = user
    @tweet = tweet
    @@all << self
  end

  def self.all
    @@all
  end

end
