class Api::DrinksController < ApplicationController
    before_action :authenticate_user!

    def index
        @drinks = current_user.drinks
        render json: @drinks
    end
    
    def create
        @user = current_user
        @drink = @user.drinks.create!(drink_params)
    end

    def show
        @drink = current_user.drinks.find(params[:id]) 
        render json: @drink
    end

    def destroy
        @drink = Drink.find(params[:id]).delete
        render json: @drink
    end




    private

    def drink_params

        params.require(:drink).permit(:beer_id)
    end
end
