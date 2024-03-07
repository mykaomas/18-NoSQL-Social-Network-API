# Social Network API
This repository contains the source code for a robust social network API built with Node.js, Express.js, and MongoDB. The API provides comprehensive functionalities for managing users and thoughts within the social network ecosystem.

## Installation
To set up the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory and run npm install to install dependencies.
3. Ensure MongoDB is installed and running locally on your machine.
4. Start the server by running npm start.

## Features
### User Management
- *Create User*: Allows the creation of new users with unique usernames and email addresses.
- *Retrieve Users*: Enables fetching a list of all users registered in the social network.
- *Delete User*: Supports the removal of a user from the system by their ID.

### Thought Management
- *Share Thought*: Users can post their thoughts, which are stored with content and associated user ID.
- *Retrieve Thoughts*: Provides endpoints to fetch all thoughts shared in the social network.
- *Delete Thought*: Allows users to delete their own thoughts based on the thought ID.

## API Endpoints
### Users
- `GET /api/users`: Retrieve a list of all users.
- `POST /api/users`: Create a new user.
- `DELETE /api/users/:id`: Delete a user by their ID.

### Thoughts
- `GET /api/thoughts`: Retrieve all thoughts shared in the social network.
- `POST /api/thoughts`: Share a new thought.
- `DELETE /api/thoughts/:id`: Delete a thought by its ID.

## Models
### User Model
The User model defines the structure of user data stored in the database. It includes fields such as username and email.

### Thought Model
The Thought model describes the structure of a user's thought data saved in the database. Each thought consists of content and a reference to the user who posted it.

### Data Seeding
The application seeds initial user data upon startup. The seeds/userSeed.js file contains an array of default user data, which you can modify or expand to suit your needs.

## Dependencies
- *Express.js*: A minimalist web framework for Node.js that provides robust features for building web applications and APIs.
- *Mongoose*: An elegant MongoDB object modeling tool designed to work with Node.js asynchronously.
- *MongoDB*: A powerful NoSQL database system that stores data in flexible, JSON-like documents.

## Demo
Visit the [link](https://drive.google.com/file/d/1agzZL63BHiPwVrJQDX6SdF-iu-6ioxrF/view) to see a demonstation of the API.

## Contributing
Contributions to this project are highly appreciated! Please feel free to submit bug reports, feature requests, or pull requests to help improve the functionality and usability of the API.

## License
This project is licensed under the terms of the MIT license. See the [LICENSE](./LICENSE) file for more details.

