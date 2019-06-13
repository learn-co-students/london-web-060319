class Tweet
  attr_accessor :message, :username, :id

  def self.all
    sql = "SELECT * FROM tweets;"
    results = DB[:conn].execute(sql)
    hydrate(results)
  end

  def self.hydrate(tweet_data)
    tweet_data.map { |tweet| Tweet.new(tweet) }
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
  end

  def save
    if @id
      sql = "UPDATE tweets SET username = ?, message = ? WHERE id = ?;"
      DB[:conn].execute(sql, self.username, self.message, self.id)
    else
      sql = "INSERT INTO tweets(username, message) VALUES(?, ?);"
      DB[:conn].execute(sql, self.username, self.message)
    end
  end

  def self.destroy(id)
    sql = "DELETE FROM tweets WHERE id = ?;"
    DB[:conn].execute(sql, id)
  end


end
