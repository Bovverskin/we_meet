class Events::ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :description, :location
  belongs_to :group, serializer: Groups::ShowSerializer

  def test
    object.group.organizer.email
  end
end
