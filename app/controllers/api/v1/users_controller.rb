class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user

  def current
    if current_user != nil
      render json: current_user.as_json
    else
      render :json => {}
    end
  end

end
