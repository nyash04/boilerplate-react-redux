import { Switch, Route, Redirect } from "react-router-dom";
import {AuthPage, Logout} from "./modules/Auth";
import { Layout } from "../_partials";
import BasePage from "./BasePage";
import { ErrorsPage } from "./pages/ErrorsPage";

export default function Routes() {
  const isAuthorized = false;

  return (
    <Switch>
      {isAuthorized ? (
        <AuthPage />
      ) : (
        <Redirect from="/auth" to="/" />
      )}

      <Route path="/error" component={ErrorsPage} />
      <Route path="/logout" component={Logout} />

      {isAuthorized ? (
        <Redirect to="/auth/login" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </Switch>
  )
}