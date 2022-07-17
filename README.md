| URL path                  | HTTP Method       | Response                          | Action                        |
| :------------------------:|:---------------:  | :--------------------------------:| :----------------------------:|
| "/getAllCourses"          | GET               | [courses]                         | Get all courses from the DB   |
| "/getOneCourse/:course_id"| GET               | {course}                          | Get single course from DB     |
| "/editCourse/:course_id"  | GET               | {course}                          | Edit one course from DB       | 
| "/saveCourse"             | POST              | {message: "New course created!"}  | Create a new course           |
| "/deleteCourse/:course_id"| POST              | {message: "Course deleted"}       | Delete a course               |
| "/getAllUsers"            | GET               | [users]                           | Get all users from the DB     |
| "/editUser/:user_id"      | GET               | {user}                            | Edit one user from DB         |
| "/getOneUser/:user_id"    | GET               | {user}                            | Get single user from DB       |
| "/deleteUser/user_id"     | POST              | {message: "User deleted"}         | Delete a user                 |

