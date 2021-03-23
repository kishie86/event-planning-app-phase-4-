class Api::V1::UserEventsController < ApplicationController
    def index
        # userevents = UserEvent.all
        # render json: userevents.to_json

        #  userevents = UserEvent.all.to_json(:include => {
        #     :events => {
        #         :except => [:created_at, :updated_at]
        #     }
        # })
        # render json: userevents
        render json: UserEvent.all.to_json(user_event_serializer_option)

    end
    
    def user_event_serializer_option
        {
            :include => {
                # :guests => {
                #     :except => [:created_at, :updated_at]
                # },
                # :event => {
                #     :except => [:created_at, :updated_at]
                # }
            },
            :except => [:created_at, :updated_at]
        }
    end

    def create
        user_events = UserEvent.create(user_event_params)
        render json: user_events.to_json
      end

    def show
        user_events = UserEvent.find_by(params[:id])
        render json: user_events.to_json
    end

    def destroy
        UserEvent.destroy(params[:id])
    end

    def update
        user_events = UserEvent.find(params[:id]).update(user_event_params)
        # binding.pry
        render json: user_events.to_json
    end


    


      private
  def user_event_params
    params.require(:user_event).permit(:location, :venue, :date, :time, :event_id, :user_id)
  end
end
