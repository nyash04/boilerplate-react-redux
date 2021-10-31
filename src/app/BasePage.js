import { Switch, Route, Redirect } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard/pages/DashboardPage";

export default function BasePage() {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/dashboard" component={DashboardPage} />
      <Redirect to="/error" />
    </Switch>
  );
}
