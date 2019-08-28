class Game < ApplicationRecord
    has_many :user_games, dependent: :destroy
    has_many :users, through: :user_games
    has_many :moves, dependent: :destroy

    def user_ids= ids
        ids.each{|id| UserGame.create(game: self, user: User.find(id))}
    end

    def current_turn
        turn = 0
        moves_at_turn = 0
        sorted_moves = self.moves.sort_by{|m| m.turn}
        sorted_moves.each do |move|
            if (move.turn > turn)
                moves_at_turn += 1;
            end
            if (moves_at_turn == 2)
                turn += 1;
                moves_at_turn = 0;
            end
        end
        return turn + 1;
    end

    def turns
        if self.moves.count == 0
           return [];
        end
        current_turn = 1
        turns_arr = []
        while (current_turn <= self.current_turn)
          moves = self.moves.where(turn: current_turn)
          u1 = moves.find{|m| m.user == self.users.first}
          u2 = moves.find{|m| m.user == self.users.last}
          turns_arr << {
            turn: current_turn,
            u1_number: u1 ? u1.number : nil,
            u2_number: u2 ? u2.number : nil
          }
    
          current_turn += 1
        end
        turns_arr
      end
end
