Rails.application.routes.draw do
  devise_for :users, path: '', path_names: { sign_up: 'register' }\

  post '/', to: 'devise/registrations#validate', as: :users_validation

  authenticated :user do
    root to: 'completeregister#home'
  end
end
