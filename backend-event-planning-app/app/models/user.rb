class User < ApplicationRecord
    has_secure_password
    has_many :user_events
    has_many :guests, through: :user_events

    validates :email, uniqueness: true 
    validates :name, presence: true 
end
