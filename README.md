#HAMMOCK#
**An online course organiser**

## Makers Academy Final Project

For our final project at [Makers Academy, a 12-week coding bootcamp in London](http://www.makersacademy.com/), we decided to focus on making organising online studies easier. With thousands of online courses available, it can be difficult to keep track of interesting courses, courses that you're enrolled on and courses that you have completed. Hammock aims to make it easier for you to know what your schedule should look like by allowing you to select courses from providers such as Udacity, Coursera and EdX, add your own modules, and plan your study time with Google Calendar.

**Design**

As this was our final project, we decided to push ourselves and test what we'd learnt on the course by consolidating and improving our knowledge of Ruby on Rails and Angular.JS. The backend and the frontend have been decoupled ([find the backend repository here](https://github.com/marion-lv/hammockapp_api)), not only so that we could play around with building APIs, but also so that we could keep a modular product that we could easily turn into a mobile app, amongst other things.

**Tools**

In order to complete this challenge, we used [Trello] (trello.com/hammockapp) to plan our sprint and manage our project. We used [Waffle] (https://waffle.io/marion-lv/hammockapp) to track and record progress and changes made to our Github repositories, and worked using git workflow and the [Thoughtbot Project Design Sprint] (https://robots.thoughtbot.com/the-product-design-sprint) guide.

**Future challenges**

As it turns out, two weeks is quite a short period of time for a project like Hammock. Our Minimum Viable Product is almost up and running, but in the future we would like to expand and improve it, and maybe make it a mobile app.  

##Setup

This app uses an Angular.JS front-end and a Ruby on Rails back-end that will be deployed to [Heroku] (https://wwww.herokuapp.com). 

Should you wish to work on this app (pull requests welcome!), please fork this repository and the associated backend repository ([find the backend repository here](https://github.com/marion-lv/hammockapp_api)) to your own machine. 

In order to set up the Hammock frontend correctly, please run `npm install && bower install` to install the required dependencies. 

If you have just forked and cloned the repositories, you will need to initialise the databases by running the following commands in the backend `hammockapp_api/hammock` folder:

- `bundle install`                          # Installs required dependencies
- `rake db:create`
- `rake db:migrate`
- `rake db:load:coursera_courses`           # Loads Coursera courses from the API
- `rake db:load:edx_courses`                # Loads edX courses from the API
- `rake db:load:udacity_courses`            # Loads Udacity courses from the API

A number of scripts have been set up within the `npm run all` command to allow for faster testing. These commands assume that the databases have **already been created and seeded**. If you are using the native terminal on your machine, running `npm run all` will allow the ttab dependency to operate and start the required servers and commands to get the app up and running. If you are using a non-native emulator (such as iTerm), follow the steps listed below for manual installation:

TL;DR:

- `npm run dbreset`
- `npm start`
- `webdriver-manager start`
- `npm run rails`

These commands work as follow:

- `npm run dbreset` will reset the Rails backend databases. This will automatically change from the `hammockapp` to the `hammockapp_api/hammock` folder (so do make sure you have forked both repositories and that you are in the `hammockapp` folder) and will run `rake db:reset`, which in turns takes care of running `rake db:drop`, `rake db:create`, `rake db:migrate`, and `rake db:seed` for you.

- `npm start`, will run `http-server ./app -a 0.0.0.0 -p 8000`.

- `webdriver-manager start`, will run the Selenium webdriver server.

- `npm run rails`, will change from the frontend repository to the backend repository and start the rails server by running `cd ../hammockapp_api/hammock && rails s`. Run `rails s` directly from `hammockapp_api/hammock` if you have problems with `npm run rails`.

##Testing

We test-drove the development of this app using Karma and Protractor for the Angular.JS component, and Rspec for the Rails component. In order to run the tests, ensure that you have set up the app correctly by referring to the above instructions, and use `npm test` for unit tests using Karma, and `npm run protractor` for end-to-end tests using Protractor. For Rails tests, please use `rspec` to run them (please note you may have to run them twice as we've experienced failing tests on the first run, but not on further runs.)

Please note that you may have to run the following commands if you encounter errors with Protractor (you may also need to sudo those commands):

* `npm install -g protractor`
* `webdriver-manager update --standalone`
* `webdriver-manager start --standalone`

##Demo & Screenshots

Yet to come! 

##User Stories

To be added!
Team:
[Ina Tsetsova](https://github.com/tsetsova), [Joe Wroe](https://github.com/JoeWroe), [Marion LV](https://github.com/marion-lv) & [Vicky Gray](https://github.com/vickymg)
