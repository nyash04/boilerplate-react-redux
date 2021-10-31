import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./Login";


export default function AuthPage() {
  return (
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Redirect to="/auth/login" />
    </Switch>
  )
}