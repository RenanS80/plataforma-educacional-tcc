import { Route, Switch } from "react-router-dom";
import EventForm from "./EventForm";
import EventList from "./EventList";

function Events() {
    return (
        <Switch>
            <Route path="/student/events" exact>
                <EventList />
            </Route>

            <Route path="/student/events/create" >
                <EventForm />
            </Route>
        </Switch>
    );
}

export default Events;