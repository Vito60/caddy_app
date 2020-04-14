# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# pro = Pro.new(first_name: "Randall", last_name: "Williams", hometown: "Hilliard", home_state: "Florida", age: "23")
# pro.save 

# pro = Pro.new(first_name: "Madison", last_name: "Clayton", hometown: "Hilliard", home_state: "Florida", age: "23")
# pro.save 

# pro = Pro.new(first_name: "Tommy", last_name: "Williams", hometown: "Hilliard", home_state: "Florida", age: "23")
# pro.save 

# pro = Pro.new(first_name: "Garret", last_name: "Clayton", hometown: "Hilliard", home_state: "Florida", age: "23")
# pro.save 

# pro = Pro.new(first_name: "Austin", last_name: "Mccoullough", hometown: "Hilliard", home_state: "Florida", age: "23")
# pro.save

# club = Club.new(club_type: "Driver", brand: "Taylormade", model: "Burner", loft: "8" )
# club.save 

# club = Club.new(club_type: "7 Iron", brand: "Callaway", model: "X2-Hot", loft: "48")
# club.save 

# club = Club.new(club_type: "Driver", brand: "Ping", model: "G3", loft: "9")
# club.save 

# club = Club.new(club_type: "PW", brand: "Cobra", model: "F-MAX", loft: "52")
# club.save 

# club = Club.new(club_type: "LW", brand: "Titleist", model: "Vokey", loft: "60")
# club.save 

Pro.find_by_id(1).update(club_ids: [1, 2])
Pro.find_by_id(2).update(club_ids: [1, 3])
Pro.find_by_id(3).update(club_ids: [3, 4])
Pro.find_by_id(4).update(club_ids: [5, 2])
Pro.find_by_id(5).update(club_ids: [4, 5])