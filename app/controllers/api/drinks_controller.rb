class Api::DrinksController < ApplicationController
    def create
        @drinks = Drink.create!()
        @drinks = 
    end


    private

    def drinks_params
        //requires userid and beerid
    end
end
