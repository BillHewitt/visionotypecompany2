Rails.application.routes.draw do
  root to: 'pages#home'
  get 'pages/for_you'
  get ':page', to: 'pages#show', as: :page
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
