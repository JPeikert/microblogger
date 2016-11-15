# MicroBlogger

MicroBlogger is a clone of Twitter that allows to create microposts (with pictures) and follow other users.  
It implements feed that consists of microposts, made by a given user and users that he follows.  
It implements full authentication and authorization system with email confirmation, password reset,
sessions and permanent 'remember me' cookies.  
Uses Gravatar for users' profile pictures.

This application is an exercise for
[*Ruby on Rails Tutorial:
Learn Web Development with Rails*](http://www.railstutorial.org/)
by [Michael Hartl](http://www.michaelhartl.com/).

###[View Live](https://jpeikert-microblogger.herokuapp.com/)

## Getting started

To get started with the app, clone the repo and then install the needed gems:

```
$ bundle install --without production
```

Next, migrate the database:

```
$ rails db:migrate
```

Optionally, seed the database with example data:

```
$ rails db:seed
```

Finally, run the test suite to verify that everything is working correctly:

```
$ rails test
```

If the test suite passes, you'll be ready to run the app in a local server:

```
$ rails server
```

Uses SendGrid in production, on Heroku.

For more information, see the
[*Ruby on Rails Tutorial* book](http://www.railstutorial.org/book).
