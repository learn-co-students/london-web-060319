class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games
      end
    
      def create
        game = Game.new(game_params)
        if game.save
          serialized_data = ActiveModelSerializers::Adapter::Json.new(
            GameSerializer.new(game)
          ).serializable_hash
          ActionCable.server.broadcast 'games_channel', serialized_data
          head :ok
        else
          puts "Uh oh game creation failed " + game.errors.full_messages.join(', ')
        end
      end

      def destroy
        game = Game.find(params[:id])
        game.destroy
        serialized_data = ActiveModelSerializers::Adapter::Json.new(
          GameSerializer.new(game)
        ).serializable_hash
        ActionCable.server.broadcast 'games_channel', serialized_data.merge(deleted: true)

        head :ok
      end
      
      private
      
      def game_params
        params.require(:game).permit(:title, user_ids: [])
      end
end
