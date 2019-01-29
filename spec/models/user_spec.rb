
describe User, type: :model do

  describe 'DB table' do
    it { is_expected.to have_db_column :id }
    it { is_expected.to have_db_column :email }
    it { is_expected.to have_db_column :encrypted_password }
    it { is_expected.to have_db_column :provider }
  end


  describe 'Associations' do
    it { is_expected.to have_many :rsvps }
  end

  describe 'Factory' do
    it 'is valid' do
      expect(create(:user)).to be_valid
    end
  end
end
