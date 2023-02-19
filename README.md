# SM-System
Subah Info Solutions is a software development company in Ghana, and I have been employed as a backend web developer. My task was to implement a backend service fora school management system using NodeJS and the ExpressJS framework. I used MongoDB as my database and Mongoose as my Object Data Mapper.

# Description
This is a REST API that allows you to create and read sudents.

# Live Environment

- The Deployed Version of the API can be found at [Vercel](https://vercel.com/greatnessmensah/sm-system/DwU3nSzbh9CQMDviiFoVwAaCi88F)

- The API documentation for the deployment can be found at [Postman](https://documenter.getpostman.com/view/23815554/2s93CEwbpd)

# Usage

- Clone the repository

```bash
git clone https://github.com/greatnessmensah/SM-System
```

- Navigate to the project directory and add your database credentials to the `.env` file

```bash
cd sm-system
touch .env
PASSWORD=<your_mongodb_connection_string>
```
- Run the application

```bash
npm run start-watch
```

- Test the endpoints using Postman or any other API testing tool

# Endpoints

| Name | Request Method | Endpoint | Parameters | Response code |
| --- | --- | --- | --- | --- |
| Get single student | GET | localhost:3000/student/{studentId} | studentId: int | 200 OK |
| Add Student | POST | localhost:3000/student/create | None | 201 Created |

## Sample Data

Sample JSON data to test `Add Student` endpoint

```json
{
    "firstName": "Jon",
    "lastName": "Doe",
    "dataOfBirth": "09/03/2004",
    "gender": "Male",
    "phoneNumber": "+23345678910",
    "optionalNumber": "optional",
    "level": 100,
    "department": "Department of Biology"
}
```














