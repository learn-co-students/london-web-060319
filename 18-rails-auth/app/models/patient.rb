class Patient < ApplicationRecord
    has_many :appointments
    has_many :doctors, -> { distinct }, through: :appointments
end
