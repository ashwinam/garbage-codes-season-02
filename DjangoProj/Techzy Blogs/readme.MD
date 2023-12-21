**Problem: Build a Blog REST API with Likes and Comments Functionality**

**Description:**
You are tasked with developing a simple Blog REST API using Django REST Framework. The API should allow users to create, read, update, and delete blog posts. Additionally, users should be able to like posts and add comments.

**Requirements:**
1. Create a Django model for a Blog Post with fields for the title, content, publication date, and an author.
2. Develop a Django REST Framework serializer for the Blog Post model to ensure proper data representation in API responses.
3. Implement API views for listing all blog posts, retrieving a single post, creating a new post, updating a post, and deleting a post.
4. Include API endpoints for liking and unliking blog posts.
5. Create a Comment model with fields for the commenter's name, email (optional), comment content, and the associated blog post.
6. Implement API views for listing comments on a post, adding a new comment, updating a comment, and deleting a comment.
7. Ensure that the API responses include relevant information such as the number of likes on a post and the list of comments for each post.
8. Use Django REST Framework's browsable API for easy testing and interaction.

**Optional Challenges:**
1. Implement user authentication to allow only authenticated users to create, update, or delete posts, like posts, and add comments.
2. Add pagination to the API endpoints to handle a large number of blog posts and comments.
3. Implement validation to ensure that only one like per user is allowed for each post.
4. Add a feature to allow users to edit or delete their own comments.

This project will provide you with a hands-on experience in building a comprehensive REST API for a blog, incorporating features like likes and comments. It covers Django models, serializers, views, URL patterns, and additional functionalities such as authentication and pagination..