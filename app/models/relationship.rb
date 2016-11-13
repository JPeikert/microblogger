class Relationship < ApplicationRecord
  belongs_to :follower, class_name: "User"
  belongs_to :followed, class_name: "User"

  validates :follower_id, presence: true    # Both of these validations
  validates :followed_id, presence: true    # are not needed for Rails 5
end
