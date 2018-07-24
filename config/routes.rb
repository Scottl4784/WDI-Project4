Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :drinks
    end
  end
end
