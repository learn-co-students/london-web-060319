class MovesController < ApplicationController
    def create
        move = Move.new(move_params)
        game = Game.find(move_params[:game_id])
        move.turn = game.current_turn
        if move.save
          serialized_data = ActiveModelSerializers::Adapter::Json.new(
            MoveSerializer.new(move)
          ).serializable_hash
          MovesChannel.broadcast_to game, serialized_data
          head :ok
        else
          puts "Oops " + move.errors.full_messages.join(', ')
        end
      end
      
      private
      
      def move_params
        params.require(:move).permit(:number, :game_id, :user_id)
      end
end
