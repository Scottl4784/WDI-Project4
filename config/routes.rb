Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :favorites
      resources :beers
    end
  end
end
