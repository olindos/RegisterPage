class Users::RegistrationsController < Devise::RegistrationsController
  
  # custom action for ajax request
  def check_email
    user = User.new(email: params[:email])
    respond_to do |format|
      format.json { render json: user.errors.messages }
    end
  end

  def check_nickname
    user = User.new(nickname: params[:nickname])
    respond_to do |format|
      format.json { render json: user.errors.messages }
    end
  end

end
