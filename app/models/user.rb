class User < ApplicationRecord
    has_many :beers, dependent: :destroy
end
