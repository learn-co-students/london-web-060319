class SushisController < ApplicationController

  get '/sushis' do
    @sushis = Sushi.all
    erb :'sushis/index'
  end

end
