import {
  Route,
  Switch
} from "react-router-dom";
import Layout from "components/Layout";
import ModuleOverviewPage from "scenes/ModuleOverviewPage";
import TimetablePage from "scenes/TimetablePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/timetable">
          <TimetablePage />
        </Route>
        <Route path="">
          <ModuleOverviewPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
