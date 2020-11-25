import {
  Suspense,
  lazy,
  useRef
} from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import ErrorBoundary from "components/ErrorBoundary";
import Layout from "components/Layout";
const ModuleOverviewPage = lazy(() => import(
  /* webpackChunkName: "modules" */
  "scenes/ModuleOverviewPage"
));
const TimetablePage = lazy(() => import(
  /* webpackChunkName: "timetable" */
  "scenes/TimetablePage"
));

function App() {
  const error = useRef();

  console.log({error});

  return (
    <Layout>
      <ErrorBoundary ref={error} fallback={<p>Es ist ein Fehler aufgetreten</p>}>
        <Suspense fallback={<p>Seite wird geladen ...</p>}>
          <Switch>
            <Route path="/timetable">
              <TimetablePage />
            </Route>
            <Route path="">
              <ModuleOverviewPage />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
