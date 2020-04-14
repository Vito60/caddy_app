class Club < ApplicationRecord
    has_many :pro_clubs
    has_many :pros, through: :pro_clubs 
end
