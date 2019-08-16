Rails.application.routes.draw do
  namespace :api do
      namespace :v1 do
          resources :users, only: [:create, :show]
          resources :posts, only: [:create, :show, :index]
          post '/login', to: 'auth#create'
      end
  end
end
