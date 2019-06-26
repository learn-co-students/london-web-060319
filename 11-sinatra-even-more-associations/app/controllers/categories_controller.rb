class CategoriesController < ApplicationController
    get '/categories/new' do
        erb :'categories/new'
    end

    post '/categories' do
        category = Category.create params[:category]
        redirect '/sushis'
    end
end 