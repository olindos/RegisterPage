class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  validates_presence_of :first_name, :last_name
  validates :email, :nickname, presence: true,
            uniqueness: { case_sensitive: false }
end
