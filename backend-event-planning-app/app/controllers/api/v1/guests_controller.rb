class Api::V1::GuestsController < ApplicationController
    def index
        guests = Guest.all
        render json: guests.to_json
    end

    def create
        guests = Guest.create(guest_params)
          render json: guest
      end

      private
  def guest_params
    params.require(:guest).permit(:name, :email, :user_event_id)
  end
end
