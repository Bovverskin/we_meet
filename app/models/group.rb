class Group < ApplicationRecord
  validates_presence_of :name
  has_many :members, class_name: 'Membership'
end
