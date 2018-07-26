class Api::UsersController < ApplicationController
    before_action :authenticate_user!
    
    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = current_user
        render json: @user
    end

    def create 
        @user = User.create!(user_params)
        render json: @user
    end

    def update
        @user = User.find(params[:id])
        @user.update!(user_params)
        render json: @user
    end

    def destroy
        @user = User.destroy(params[:id])
        render json: @user
    end

    private

    def user_params
        params.require(:user).permit(:name, :username, :picture, :email)
    end


end
