class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all, only: [:id, :name], include: [:tweets]
    # render json: User.all, except: [:created_at, :updated_at]
  end
end
