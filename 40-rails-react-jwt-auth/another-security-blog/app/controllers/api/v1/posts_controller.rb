class Api::V1::PostsController < ApplicationController

    def create
        post = Post.create post_params
        post.user = @current_user
        post.save
        if post.valid?
            render json: { post: FullPostSerializer.new(post) }, status: :created
        else
            render json: { errors: post.errors.full_messages }, status: :not_accepted
        end
    end

    def index
        render json: Post.all
    end

    def show
        post = Post.find(params[:id])
        render json: { post: FullPostSerializer.new(post) }
    end

    private

    def post_params
        params.require(:post).permit(:title, :content)
    end
end
