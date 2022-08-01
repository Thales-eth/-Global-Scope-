# < Global Scope />

Global Scope is an e-learning web application that allows its users to learn coding through courses and programming problems (*katas*).

The main goal of this project was creating a MERN Full Stack app that could run tests (via *Node Fs* and *Child process*).

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/getAllCourses          | GET               | [courses]                         | Get all courses from the DB   |
| /api/getOneCourse/:course_id| GET               | {course}                          | Get single course from DB     |
| /api/editCourse/:course_id  | PUT               | {course}                          | Edit one course from DB       | 
| /api/saveCourse             | POST              | {message: 'New course created!'}  | Create a new course           |
| /api/deleteCourse/:course_id| DELETE            | {message: 'Course deleted'}       | Delete a course               |
| /api/getAllUsers            | GET               | [users]                           | Get all users from the DB     |
| /api/auth/createUser        | POST              | {message: 'New User created!'}    | Create a new user             |
| /api/auth/login             | POST              | {message: 'New User created!'}    | Create a new user             |
| /api/editUser/:user_id      | PUT               | {user}                            | Edit one user from DB         |
| /api/getOneUser/:user_id    | GET               | {user}                            | Get single user from DB       |
| /api/deleteUser/user_id     | DELETE            | {message: 'User deleted'}         | Delete a user                 |