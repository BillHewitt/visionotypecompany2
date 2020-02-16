FROM ruby:2.6.3-alpine as build-base

RUN apk update && \
	apk add --no-cache \
	nodejs \
	git \
	yarn \
	tzdata \
	postgresql-dev \
	postgresql-client
RUN apk add --virtual build-dependencies make g++

RUN mkdir -p /app
WORKDIR /app

FROM build-base as app-build

# Ensure gems are cached and only get updated when they change. This will
# drastically increase build times when your gems do not change.
RUN echo "install: --no-rdoc --no-ri" >> ~/.gemrc 
RUN echo "update:  --no-rdoc --no-ri" >> ~/.gemrc

RUN gem install bundle

# not bundle docs
RUN bundle config --global jobs $(nproc --all)

# use all cores while bundle
COPY Gemfile Gemfile.lock ./
RUN bundle install

# install npm packages
COPY package.json yarn.lock ./
RUN yarn install
