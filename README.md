# Serverless_Lambda

# Get all users
## GET Request
### https://s9zcnv0183.execute-api.ap-south-1.amazonaws.com/users

# Get user by id
## GET Request
### https://s9zcnv0183.execute-api.ap-south-1.amazonaws.com/user/{id}

# Delete user by id
## DELETE Request
### https://s9zcnv0183.execute-api.ap-south-1.amazonaws.com/user/{id}

# Create User
## POST Request
### https://s9zcnv0183.execute-api.ap-south-1.amazonaws.com/user
#### body { "id": <Integer>, "name": <String> }

# Update user by id
## PUT Request
### https://s9zcnv0183.execute-api.ap-south-1.amazonaws.com/user/{id}
#### body { "name": <String> }