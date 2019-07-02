class Doctor < ApplicationRecord
    has_many :appointments
    has_many :patients, -> { distinct },  through: :appointments
    validates :name, uniqueness: true
    validates :speciality, presence: true
end
