<br />
<br />

| Auth   |                    |             |                         |
| ------ | ------------------ | ----------- | ----------------------- |
| Method | Endpoint           | Description | Calls For               |
| POST   | /api/auth/login    | LOGIN       | Username Password       |
| POST   | /api/auth/register | REGISTER    | Username Password Email |

<br />
<br />

| Users  |                |                 |           |
| ------ | -------------- | --------------- | --------- |
| Method | Endpoint       | Description     | Calls For |
| GET    | /api/users     | Get all users   | n/a       |
| GET    | /api/users/:id | Get user by ID  | id        |
| PUT    | /api/users/:id | Edit user by ID | id        |
| DELETE | /api/users/:id | Delete user     | id        |

<br />
<br />

| Plant Routes |                 |                        |           |
| ------------ | --------------- | ---------------------- | --------- |
| Method       | Endpoint        | Description            | Calls For |
| GET          | /api/plants     | get all of your plants | n/a       |
| GET          | /api/plants/:id | get specific plant     | id        |
| PUT          | /api/plants/:id | edit plant             | id        |
| DELETE       | /api/plants/:id | delete plant           | id        |
