class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users.to_json
    end

    def create
        useres = User.create(user_params)
          render json: users
      end

      private
  def event_params
    params.require(:user).permit(:name, :email, :password)
  end
end
