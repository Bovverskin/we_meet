# frozen_string_literal: true

class Group < ApplicationRecord
  validates_presence_of :name, :description, :location
  has_one_attached :image
  has_many :members, class_name: 'Membership'
  has_many :events
  belongs_to :category
  belongs_to :organizer, class_name: 'User'

  def future_events
    events.future_events
  end

  def past_events
    events.past_events
  end
end
