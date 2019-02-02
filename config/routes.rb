# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]
  
  resources :events, only: [:index] do
    resources :attendees, only: [:create]
  end

  resources :groups, only: [:index, :show, :create] do
    resources :memberships, only: [:create]
    resources :events, only: [:index, :create]
  end

  get :send_mail, to: 'notifications#send_mail', as: :send_mail
  
end
