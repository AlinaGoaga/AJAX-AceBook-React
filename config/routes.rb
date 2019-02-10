Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions', registrations: 'registrations' }

  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      get 'users/check_for_user', to: 'users#check_for_user'
      # get '/users/sign_out' => 'devise/sessions#destroy'
      resources :posts do
        resources :comments
      end
    end
  end

end
