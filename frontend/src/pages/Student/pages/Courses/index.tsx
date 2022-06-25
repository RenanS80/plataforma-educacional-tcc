import { Route, Switch } from "react-router-dom";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";

function Courses() {
    return (
        <Switch>
            <Route path="/student/courses" exact>
                <CourseList />
            </Route>

            <Route path="/student/courses/create" >
                <CourseForm />
            </Route>
        </Switch>
    );
}

export default Courses;