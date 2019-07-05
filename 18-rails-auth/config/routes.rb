Rails.application.routes.draw do
  resources :appointments
  resources :patients
  resources :doctors
  resources :users, only: [:new, :create]
  get '/login', to: 'sessions#new', as: :login
  delete '/logout', to: 'sessions#destroy', as: :logout
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
