| URL path                  | HTTP Method       | Response                          | Action                        |
| :------------------------:|:---------------:  | :--------------------------------:| :----------------------------:|
| "/api/getAllCourses"          | GET               | [courses]                         | Get all courses from the DB   |
| "/api/getOneCourse/:course_id"| GET               | {course}                          | Get single course from DB     |
| "/api/editCourse/:course_id"  | GET               | {course}                          | Edit one course from DB       | 
| "/api/saveCourse"             | POST              | {message: "New course created!"}  | Create a new course           |
| "/api/deleteCourse/:course_id"| POST              | {message: "Course deleted"}       | Delete a course               |
| "/api/getAllUsers"            | GET               | [users]                           | Get all users from the DB     |
| "/api/editUser/:user_id"      | GET               | {user}                            | Edit one user from DB         |
| "/api/getOneUser/:user_id"    | GET               | {user}                            | Get single user from DB       |
| "/api/deleteUser/user_id"     | POST              | {message: "User deleted"}         | Delete a user                 |

