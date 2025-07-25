# microservice-example

# user-service
register, login and login user details

## 1. Register:  http://localhost:3000/auth/register (POST)
### Body
```
{
    "email": "test@yopmai.com",
    "name": "test",
    "password": "124"
}
```

## 2. Login:  http://localhost:3000/auth/login (POST)
### Body
```
{
    "email": "test@yopmai.com",
    "password": "124"
}
```

## 3. Who Am I:  http://localhost:3000/auth/whoami (GET)
