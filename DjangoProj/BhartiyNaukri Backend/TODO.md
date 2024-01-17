# Project Todo List

## Feature Backlog

### User Authentication
- [x] Create an Core app(Managing Users from this app)
- [x] Setup a model for Authentication(understand the difference between AbstractUser and AbstractBaseUser).
- [x] Setup serializers
- Endpoints for API
    - [x] POST user/
    - [x] GET user/
    - [x] POST user/login -- uses simpleJWT
    - [x] user/logout
    - [x] POST user/set_password
- [x] Checkout resources for how to build multiple types of users.
- [x] Develop user login and logout system using JWT Authentication.

### ViewSet For Employer and Candidate
- [x] Create Serializer
- [x] Create ViewSet
- [x] set up a router
- [x] Give the admin permission (Only admin can see)

### Profiles for Candidate.
- [x] Gather Attributes
- [x] set-up the models in core app
- [x] set-up the signals for auto-populating the candidate profiles. 
- [x] create a serializers for profile
- Endpoints:
    - [x] GET users/profile/ 
    - [x] PUT users/profile/ 
    - [x] GET,PUT users/my-resume/
- [x] Create a action viewset
- [x] let make resume, qualification, experience & awards to be seperated
- [ ] create a logic for many-to-many or many-to-one relations in profile handling, because data we are getting at once(internally we are getting data so we have to crreate it object and then pass it to the relational attributes).

### Profiles for Employer.
- [x] Gather Attributes
- [x] set-up the models in core app
- [x] set-up the signals for auto-populating the employer profiles. 
- [x] create a serializers for profile
- Endpoints:
    - [x] GET users/profile/ 
    - [x] PUT users/profile/
- [x] Create a action viewset
- [ ] create a logic for many-to-many or many-to-one relations in profile handling, because data we are getting at once(internally we are getting data so we have to crreate it object and then pass it to the relational attributes).

### JobPosting by Employer
- [x] gather attributes
- [x] create a app jobs
- [x] create a model
- [x] create a serializer
- [x] create a viewset
- [x] set up the router
- [x] look for the permissions(authorized person)

### JobApply by candidate
- []

### User Dashboard
- [ ] Create a user dashboard layout
- [ ] Display relevant user information on the dashboard
- [ ] Implement a notification system

### Core Functionality
- [ ] Define and implement the main features of the product
- [ ] Ensure smooth user interaction and experience
- [ ] Handle edge cases and error scenarios gracefully

### Data Management
- [ ] Set up a database to store user and application data
- [ ] Implement CRUD operations for essential data entities
- [ ] Establish data backup and recovery mechanisms

### Security
- [ ] Conduct a security audit and address potential vulnerabilities
- [ ] Implement SSL/TLS for secure communication
- [ ] Apply proper user authorization and access control measures

### Mobile Responsiveness
- [ ] Optimize the product for mobile devices
- [ ] Ensure a consistent user experience across different screen sizes

### Testing
- [ ] Develop and execute unit tests for critical components
- [ ] Conduct integration testing to validate system behavior
- [ ] Perform user acceptance testing (UAT) with a sample group

### Documentation
- [ ] Create user documentation for product usage
- [ ] Generate developer documentation for future maintenance
- [ ] Maintain a changelog to track updates and improvements

## Bug Fixes
- [ ] Identify and address any reported bugs or issues
- [ ] Conduct regular testing to catch and fix potential bugs early on
- [ ] Implement user feedback and enhancement suggestions

## Performance Optimization
- [ ] Analyze and optimize code for better performance
- [ ] Implement caching mechanisms where applicable
- [ ] Monitor system performance and address bottlenecks

## Deployment
- [ ] Set up a staging environment for testing
- [ ] Plan and execute the product deployment strategy
- [ ] Monitor and troubleshoot any issues post-deployment

## Continuous Integration/Continuous Deployment (CI/CD)
- [ ] Implement CI/CD pipelines for automated testing and deployment
- [ ] Integrate version control for efficient collaboration

## Future Features
- [ ] Brainstorm and plan for additional features
- [ ] Evaluate user feedback and market trends for future improvements
- [ ] Prioritize and schedule the development of upcoming features
