class PagesController < ApplicationController
  def show
    params[:page] = 'index' unless params[:page]
    render params[:page].underscore
  end
end
