# Social Media Platform API

## Overview

You are tasked with building a Django Rest Framework (DRF) API for a simplified social media platform. The API should include features such as user authentication, posting updates, following other users, and viewing a personalized feed.

## Features

### User Authentication

- Users should be able to register, log in, and log out.
- Token-based authentication should be used to secure the API.

### User Profile

- Each user should have a profile that includes information such as username, email, bio, and avatar.

### Posts

- Users should be able to create new posts with text content.
- Users can view a list of their own posts.
- Users can delete their own posts.

### Followers

- Users should be able to follow and unfollow other users.
- Users can view a list of their followers and the users they are following.

### Feed

- Users can view a personalized feed that includes posts from users they are following.
- The feed should be paginated.

## Endpoints

1. `/api/register/`: Register a new user.
2. `/api/login/`: Obtain a token for an existing user.
3. `/api/logout/`: Log out a user and invalidate their token.
4. `/api/profile/`: Retrieve and update the user's profile. Supports GET and PUT methods.
5. `/api/posts/`: List all posts. Supports GET and POST methods.
6. `/api/posts/<post_id>/`: Retrieve, update, or delete a specific post. Supports GET, PUT, PATCH, and DELETE methods.
7. `/api/users/<user_id>/follow/`: Follow or unfollow a user. Supports POST method.
8. `/api/users/<user_id>/followers/`: List followers of a user. Supports GET method.
9. `/api/users/<user_id>/following/`: List users that a user is following. Supports GET method.
10. `/api/feed/`: Retrieve the user's personalized feed. Supports GET method.

## Serializers

Create serializers for the User, Post, and Follow models to handle input and output.

## Permissions

Implement custom permissions to ensure that users can only modify their own profile and posts.
