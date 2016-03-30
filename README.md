#HAMMOCK#

## Makers Academy Final Project

For our final project at [Makers Academy, a 12-week coding bootcamp in London](http://www.makersacademy.com/), we decided to focus on how to make organising online studies easier. With thousands of online courses available, it can be difficult to keep track of interesting courses, courses that you're enrolled on and courses that you have completed. Hammock aims to make it easier for you to know what your schedule should look like by allowing you to select courses from providers such as Udacity, Coursera and EdX, add your own modules, and plan your study time through Google Calendar.

**Design**

As this was our final project, we decided to push ourselves and test what we'd learnt on the course by consolidating and improving our knowledge of Ruby on Rails and Angular.JS. The backend and the frontend have been decoupled, not only so that we could play around with building APIs, but also so that we could keep a modular product that we could easily turn into a mobile app.

**Tools**

In order to complete this challenge, we used [Trello] (trello.com/hammockapp) to plan our sprint and manage our project. We used [Waffle] (https://waffle.io/marion-lv/hammockapp) to track and record progress and changes made to our Github repository, and worked using git workflow and the [Thoughtbot Project Design Sprint] (https://robots.thoughtbot.com/the-product-design-sprint) guide.

**Future challenges**

As it turns out, two weeks is quite a short period of time for a project like Hammock. Our Minimum Viable Product is almost up and running, but in the future we would like to expand and improve it, and maybe make it a mobile app.  

##Setup

This app uses an Angular.JS front-end and a Ruby on Rails back-end that will be deployed to [Heroku] (https://wwww.herokuapp.com). 

Should you wish to work on this app (pull requests welcome!), please fork this repository to your own machine. You will need to use `bundle install` to install the Ruby-related components, and `npm install` as well as `bower install` for the JavaScript-related components.

In order to run the app locally on your machine, ensure that the correct severs are running by opening `npm run all` in your terminal, where ttab will take care of starting the relevant servers in different tabs. (Please note that ttab does not seem to support iTerm integration and that you will have to manually start the servers if you choose to use iTerm).

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
