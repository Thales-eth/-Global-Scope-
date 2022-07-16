| URL path                  | HTTP Method       | Response                          | Action                        |
| :------------------------:|:---------------:  | :--------------------------------:| :----------------------------:|
| "/getAllCourses"          | GET               | [courses]                         | Get all courses from the DB   |
| "/getOneCourse/:course_id"| GET               | {course}                          |  Get single course from DB    |
| "/saveCourse"             | POST              | {message: "New course created!"}  | Create a new course           |
| "/deleteCourse"           | POST              | {message: "Course deleted"}       | Delete a course               |
| "/getAllUsers"            | GET               | [users]                           | Get all users from the DB     |
| "/getOneUser/:user"       | GET               | {user}                            |Get single user from DB        |
| "/deleteUser"             | POST              | {message: "User deleted"}         |Delete a user                  |

