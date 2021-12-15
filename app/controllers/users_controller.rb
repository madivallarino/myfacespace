class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: [:followers, :followed]
    end
end
