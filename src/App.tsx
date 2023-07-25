import { AppLayout } from "layout/AppLayout";
import { Settings } from "@pages/Settings";
import { Route, Routes } from "react-router-dom";
import { NewArticle } from "@pages/New-Article";
import { Messages } from "@pages/Messages";
import { ErrorPage } from "@pages/ErroPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={"Dashboard"} />
        <Route path="/articles" element={"Article"} />
        <Route path="/articles/:id" element={"Article Id"} />
        <Route path="/new-article" element={<NewArticle />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sign-in" element={"Sign In"} />
        <Route path="/sign-up" element={"Sign Up"} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
