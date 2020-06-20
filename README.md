## To run this project

* Install xampp in your local machine(skip if already installed).
* Create a new database
* copy .env.example content to a new .env file
* Inside the .env file Replace DB_DATABASE value to the name of your newly created database in phpmyadmin
* run composer install and npm install
* run "php artisan key:generate"
* Open xampp control panel and start apache and mysql modules(Names should be labelled green if its successful).
* run "php artisan migrate"
* open postman(Install if you dont have) -- dont skip this
* run "php artisan serve"
* run npm run watch
* open browser go to "localhost:8000"
* Make a new post request inside postman using this api "http://localhost:8000/api/register" and include email, password, name,   password_confirmation as its body and dont forget to add the value(name=testuser, password=password, email=sample@sample.com,      password_confirmation=password)
* At this point we already have a user with an access token. Use credentials email and password for login

## NOTES 

I use laravel passport for api authentication and vue js for my single page application. I was hoping to use vuex and vue guards for myroutes but I didn't have the luxury of time to do it. I manage to create an auth page that gets and api token and store it to thebrowser's local storage and check weather theres an api token existing or not. It has a lot of bugs specially when you try to refresh thepage since I dont have the guards to check it. 
