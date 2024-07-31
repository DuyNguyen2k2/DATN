/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { DefaultComponent } from "./components/DefaultComponent/DefaultComponent";
import { Fragment } from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;

            const Layout =
              route.isShowHeader && route.isShowFooter
                ? DefaultComponent
                : Fragment;

            // return (
            //   <Route
            //     exact
            //     key={route.path}
            //     path={route.path}
            //     element={
            //       ischeckAuth ? (
            //         <Layout>
            //           <Page />
            //         </Layout>
            //       ) : (
            //         <Navigate to="/access-denied" />
            //       )
            //     }
            //   />
            // );

            return (
              <Route
                exact
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* <Route path="/access-denied" element={<AccessDeniedPage />} />
            <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
