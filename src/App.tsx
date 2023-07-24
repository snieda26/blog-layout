import { AppLayout } from "layout/AppLayout";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={"Dashboard"} />
        <Route path="/article" element={"Article"} />
        <Route path="/article/:id" element={"Article Id"} />
        <Route path="/new-article" element={"New Article"} />
        <Route path="/notification" element={"Notification"} />
        <Route path="/settings" element={"Settings"} />
        <Route path="/sign-in" element={"Sign In"} />
        <Route path="/sign-up" element={"Sign Up"} />
        <Route path="*" element={"Error Page"} />
      </Route>
    </Routes>
  );
};
