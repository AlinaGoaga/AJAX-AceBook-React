Rails.application.routes.draw do
  devise_for :users do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :posts do
        resources :comments
      end
    end
  end

end
