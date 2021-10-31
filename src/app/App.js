import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./Routes";


export default function App({ store, persistor, basename }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename={basename}>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}