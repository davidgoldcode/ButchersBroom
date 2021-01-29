<br />
<p align="center">
  <a href="https://github.com/davidgoldcode">
    <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80" alt="ButchersBroom Logo" width="400" height="200">
  </a>

  <h1 align="center">Butcher's Broom</h1>

  <p align="center">
    A web app to remind myself to water my plants
    <br />
    <a href="https://github.com/davidgoldcode/butchersbroom/issues">Report Bug</a>
    ·
    <a href="https://github.com/davidgoldcode/butchersbroom/issues">Request Feature</a>
  </p>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

I love my plants, but I always forget them. I built this app so I could track, monitor and remind myself to water them

### Built With

- [React](https://reactjs.org/docs/getting-started.html)
- [React-Redux](https://react-redux.js.org/)
- [Express](https://expressjs.com/)
- [NodeJS](https://nodejs.org/en/docs/)
- [EmailJS](https://www.emailjs.com/docs/)

## Getting Started

Contributions are encouraged!

### Installation

1. Get a free API Key at [https://api.slack.com](https://api.slack.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/butchersbroom.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<br />
<br />

## The Endpoints

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

<br />
<br />

## The Technology

React <br />
NodeJS <br />
Redux <br />
Express <br />
Knex <br />

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

David Gold - [@davidigold](https://twitter.com/davidigold)

## License

[MIT](https://choosealicense.com/licenses/mit/)
