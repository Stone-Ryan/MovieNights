class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.erros.full_messages, status: 422
    end
  end


  private

  def user_params
    prams.require(:user).permit(:usernmae, :password)
  end
end
