User.destroy_all

scott = User.new
scott.name = "Scott"
scott.username = "Scott123"
scott.email = "Scott@test.com"
scott.picture = "https://www.placecage.com/200/300"
scott.save

steve = User.new
steve.name = "Steve"
steve.username = "Steve123"
steve.email = "Steve@test.com"
steve.picture = "https://www.placecage.com/200/300"
steve.save