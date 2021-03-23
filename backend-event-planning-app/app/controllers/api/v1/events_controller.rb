class Api::V1::EventsController < ApplicationController
    def index
        events = Event.all
        render json: events.to_json
    end

    def create
        events = Event.create(event_params)
          render json: event
      end

      private
  def event_params
    params.require(:event).permit(:name, :image, :content)
  end
end
