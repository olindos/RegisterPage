Rails.application.routes.draw do
  devise_for :users, path: '', path_names: { sign_up: 'register' }

  
  devise_scope :user do
    post "/check_email", controller: "users/registrations", action: "check_email"
    post "/check_nickname", controller: "users/registrations", action: "check_nickname"
  end

  authenticated :user do
    root to: 'completeregister#home'
  end
end
