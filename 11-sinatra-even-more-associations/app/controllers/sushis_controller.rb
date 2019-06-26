class SushisController < ApplicationController

  patch '/sushis/:id' do
    sushi = Sushi.find params[:id]
    sushi.update params[:sushi]
    redirect "/sushis/#{sushi.id}"
  end

  get '/sushis' do
    @categories = Category.all
    erb :'sushis/index'
  end

  get '/sushis/new' do
    @ingredients_for_dropdown = Ingredient.all
    @categories = Category.all
    erb :'sushis/new'
  end

  post '/sushis' do
    sushi = Sushi.create(params[:sushi])
    redirect "/sushis/#{sushi.id}"
  end

  get '/sushis/:id' do
    @sushi = Sushi.find params[:id]
    erb :'sushis/show'
  end

  get '/sushis/:id/edit' do
    @ingredients_for_dropdown = Ingredient.all
    @sushi = Sushi.find params[:id]
    erb :'sushis/edit'
  end

  delete '/sushis/:id' do
    sushi = Sushi.find params[:id]
    sushi.destroy
    redirect '/sushis'
  end

end
