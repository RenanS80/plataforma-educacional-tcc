import { Route, Switch } from "react-router-dom";
import EventForm from "./EventForm";
import EventList from "./EventList";
import EventProgressForm from "./EventProgressForm";

function Events() {
    return (
        <Switch>
            <Route path="/student/events" exact>
                <EventList />
            </Route>

            <Route path="/student/events/create" >
                <EventForm />
            </Route>

            <Route path="/student/events/progress/:eventId">
                <EventProgressForm />
            </Route>
        </Switch>
    );
}

export default Events;