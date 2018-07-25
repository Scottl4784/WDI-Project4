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
        @drink = User.find(params[:user_id]).drinks.find(params[:id]) 
        render json: @drink
    end

    def destroy
        @drink = Drink.find(params[:id]).delete
        render json: @drink
    end




    private

    def drink_params
        # //requires userid and beerid
        params.require(:drink).permit(:beer_id)
    end
end
