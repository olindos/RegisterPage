Rails.application.routes.draw do
  devise_for :users, path: '', path_names: { sign_up: 'register' }

  authenticated :user do
    root to: 'completeregister#home'
  end
end
