Rails.application.routes.draw do
  resources :dogs, only: [:index]
  get '/dogs/up_for_adoption', to: 'dogs#up_for_adoption'
  get '/dogs/:id/adopt', to: 'dogs#adopt', as: 'adopt'
  post '/dogs/:id/adopt', to: 'dogs#finalise_adoption'
  resources :employees, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
