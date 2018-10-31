class Users::RegistrationsController < Devise::RegistrationsController

  respond_to :json, :html
  
  # custom action for ajax request
  def validate
    user = User.new(user_params)
    user.valid?

    field = params[:user].first[0]
    @errors = user.errors[field]

    if @errors.empty?
      @errors = true
    else
      name = t("activerecord.attributes.user.#{field}")
      @errors.map! { |e| "#{name} #{e}<br />" }
    end

    respond_to do |format|
      format.json { render json: @errors }
    end
  end

  privat
  
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :nickname, :password)
  end

end
