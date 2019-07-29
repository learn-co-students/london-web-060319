class User < ApplicationRecord
  has_many :tweets
  # hey ar, please write two methods for me,
  # def tweets and def tweets= tweet_ids tweet_ids=
  # what "really" happens is that 
  # ar asks for Tweet.all and filters for tweets
  # that have the user_id of the current user
  # tweet.user_id == user.id
  # it all happens in SQL!
end
