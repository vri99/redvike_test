# redvike_test

# Prerequests
***
1. [Node](https://nodejs.org/uk/download/)
2. [Docker & docker-compose](https://docs.docker.com/get-docker/)
3. Run `docker-compose up --build`
4. Go to `localhost:3000` in Postman

# Endpoints
***
1. GET `/api/reservation/:user_id` - Get a list of all bookings for specified user grouped by days
2. GET `/api/reservation/:amenity_id/:day` (y/m/d) - Get a list of all bookings from amenity with the given id and the selected day
3. POST `/api/reservation/csv` - Get a data from uploaded file parsed to JSON

# Notes
***
Db Seeds will be initiated automatically on every docker's build, so you'll have ready records for a minimal tests.