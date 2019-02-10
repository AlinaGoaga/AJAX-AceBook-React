# AceBook - a Facebook clone built by the AJAX team!

This application uses React for the frontend and Rails for the backend.

Below are a couple of screenshots showcasing the app's functionality: 

![Posts and comments](https://github.com/AlinaGoaga/AJAX_AceBook_ReactVersion/blob/master/app/assets/images/Posts.jpeg)
![Sign up](https://github.com/AlinaGoaga/AJAX_AceBook_ReactVersion/blob/master/app/assets/images/Signup.jpeg)
![Log in](https://github.com/AlinaGoaga/AJAX_AceBook_ReactVersion/blob/master/app/assets/images/Login.jpeg)

It is using code form [AceBook Rails](https://github.com/AlinaGoaga/AJAX-AceBook), a version built fully in Rails and deployed on [Heroku](https://polar-journey-26072.herokuapp.com/posts).

Technologies used:

| Technology       | Scope        |
| ------------- |:-------------:|
| Ruby on Rails	    | Backend framework |
| React    | Frontend framework     |
| Travis 	 | Continuous integration    |    
| Heroku 	 | Cloud platform for application deployment  |    
| PostgreSQL	 | Database management  |
| Devise	 | Authentication solution for Rails applications  |  
| Rspec, Capybara	 | Testing frameworks  |  
| SimpleCov | Coverage analysis tool for Ruby |  

The **card wall** for this project showing:
- how we estimated the lenght of tasks,
- division of work and
- iterative deployment as per Agile principles  .... can be found [here](https://trello.com/b/eSDBp5iu/ajax-acebook).

We have also recorded our **standups/retros and also learning points** in a shared [Google doc](https://docs.google.com/document/d/1ohjv9JBgKYqyUJgje8z_QG9PYIkzNuMksxugn8j5Awo/edit).

## Our approach to this challenge

During the first week we worked on building a fully functional app in Rails. By the end of the week we had reached our MVP, covering all the initial user stories. The fully Rails app is also using:

- Travis for continuous integration
- Rspec and Capybara for the 23 feature and unit tests
- Simplecov to keep track of our test coverage (at 99% at the moment)

The second week found us focusing on implementing React for our frontend:

- We managed to implement the same frontend functionality that we had on the fully Rails app
- We organized the code as a Single Page App which made it easier to manage
- The app has not been TDDed (the tests that are included at the moment come from the original app and need to be updated) as we have been fully focused on getting to grips with how React works. 

## User stories covered

```
As a user,
So that I can participate on the platform,
I want to be able to sign up.
```
```
As an user,
So that my account stays safe,
I want to be able to log in and log out.
```
```
As an user,
So that I can share my content,
I want to be able to post a message.
```
```
As an user,
So that I can review other people's ideas and thoughts,
I want all the posts displayed on the main page.
```
```
As a user,
So that I can share my thoughts,
I want to be able to comment on other users' pics.
```

## Quickstart

First, clone this repository. Then:

```bash
> bundle install
> bin/rails db:create
> bin/rails db:migrate
> bin/rails server
> start the server at localhost:3000
```

## Acknowledgements

This is a product of team work!
*[James Hotblack](https://github.com/hotblack86)
*[Jethro Whaley](https://github.com/jaywayawyaj)
*[Alex Alikhani](https://github.com/alexalikhani95)
*[Alina Goaga](https://github.com/AlinaGoaga)

## Resources

*[Rails CRUD app with React frontend](https://medium.com/quick-code/simple-rails-crud-app-with-react-frontend-using-react-rails-gem-b708b89a9419)
*[Devise with React Webpacker and Rails](https://medium.com/@iamjane/devise-with-react-webpacker-and-rails-dacbf9ae0233)
