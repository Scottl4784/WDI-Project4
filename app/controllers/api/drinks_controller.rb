class Api::DrinksController < ApplicationController
    def index
        @drinks = User.find(params[:user_id]).drinks
        render json: @drinks
    end
    
    def create
        @user = User.find(params[:user_id])
        @drink = @user.drinks.create!(drink_params)
        render json: @drink
    end

    def show
        @drinks = User.find(params[:user_id]).drinks.find(params[:id]) 
        render json: @drinks
    end


    private

    def drink_params
        # //requires userid and beerid
        params.require(:drink).permit(:beer_id)
    end
end
