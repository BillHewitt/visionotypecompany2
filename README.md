# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


### Development
run webpack-dev-server in one terminal window: `bin/webpack-dev-server`  

start rails into another: `rails s`  

To be able to push on heroku you can add another remote fot your local git
run `git remote add heroku https://git.heroku.com/bill-admin-theme.git`  

and then `git push heroku master --force`  

#### with Docker

upcoment pg connection for docker in `config/database.yml`
replace `localhost` to `webpacker` inside `config/webpacker.yml`

rebuild image `docker-compose up -d --no-deps --build app`  

And up application with docker-compose `docker-compose up`  
stop with ctrl+c or

#### running servers

To run locally you will need run webpacker by <strong>bin/webpack-dev-server</strong> in one terminal window

And <strong>rails</strong> s in another to run rails server.
# visionotypemanager
