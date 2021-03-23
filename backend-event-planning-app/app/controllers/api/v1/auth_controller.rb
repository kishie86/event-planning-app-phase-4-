class Api::V1::AuthController < ApplicationController
    class Api::V1::AuthController < ApplicationController

        def issue_token(payload)
            JWT.encode(payload, Rails.application.secrets.secret_key_base, "HS256")
        end
    
        def log_in 
    
        end 
    
        def create 
            user = User.create(name: params[:name], email: params[:email], password: params[:password])
    
            if user 
                user_jwt = issue_token({id: user.id})
                cookies.signed[:jwt] = {value: user_jwt, httponly: true}
                byebug
                render json: { 
                    status: 'created',
                    logged_in: true,
                    email: user.email
                 }
            else
                render json: {status: 500, logged_in: false}
            end
        end
    
        def logout 
            cookies.delete :jwt 
            render json: {logged_in: false}
        end
        
    end
end
