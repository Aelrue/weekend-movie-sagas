# Weekend Movie Sagas

## Description

This is an application for browsing a movie database and retrieving detailed information for each movie selected. To do so, users can click on a movie's poster and be brought to a separate page that contains the movie's plot, actors, etc. Once finished, user's can click the back button to be brought back to the home page.

Movie Sagas was built using HTML/CSS, Javascript, Axios, React, Redux, SQL, and Material UI. The app's framework and my knowledge was provided by Prime Digital Academy.

### CHECKLIST SET UP

- [x] Make to do list
- [x] Create a database named `saga_movies_weekend`
- [x] Run the queries from `database.sql` on the `saga_movies_weekend` database
- [x] Add query to get all genres in genre router
- [x] Add genre SQL query to DB and database.sql
- [x] Create DetailPage folder with jsx and css

## DETAILS PAGE

- [x] When a movie poster is clicked, a user should be brought to the `/details` view for that movie
  - [x] Clicking movie poster should console log out movie id
  - [x] Store movie id to be used on another page
  - [x] Add details page to router
  - [x] Clicking movie poster should push user to `/details`
- [] Render movie details including genres, title, description, and the image.
  - [x] Use Sagas and Redux to handle these requests and data
- [x] Add a 'Back to List' button which should bring the user back to the Home page

> Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?

## BEAUTIFYING

- [] Clean up unused or redunant code & console logs
- [] Style home page
- [] Style detail page
- [] Remind myself I'm awesome
- [] Update the README to include a description of the project in own words
- [] Comment code
