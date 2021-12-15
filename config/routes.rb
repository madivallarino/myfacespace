Rails.application.routes.draw do
  resources :connections
  resources :users

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  # get "/me", to: "users#show"
  # delete "/logout", to: "sessions#destroy"
  
end
