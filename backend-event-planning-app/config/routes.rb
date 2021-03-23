Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    namespace :v1 do 

      resources :users
      resources :events
      resources :user_events
      resources :guests

      # post '/login', to: 'auth#log_in'
      get '/login', to: "auth#login"
      post '/register', to: "auth#create"
      get '/logout', to: "auth#logout"

    end 
  end 
end
