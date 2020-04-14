class Pro < ApplicationRecord
    has_many :pro_clubs
    has_many :clubs, through: :pro_clubs
end
