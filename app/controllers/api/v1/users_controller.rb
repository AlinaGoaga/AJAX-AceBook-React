class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def check_for_user
    if current_user != nil
      render json: current_user.as_json
    else
      render :json => {}
    end
  end
end
