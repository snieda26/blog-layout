import { AppLayout } from "layout/AppLayout";
import { Settings } from "@pages/Settings";
import { Route, Routes } from "react-router-dom";
import { NewArticle } from "@pages/New-Article";
import { Messages } from "@pages/Messages";
import { ErrorPage } from "@pages/ErrorPage";
import { SignUp } from "@pages/SignUp";
import { SignIn } from "@pages/SignIn";
import { Articles } from "@pages/Articles";
import { Dashboard } from "@pages/Dashboard";
import { Article } from "@pages/Article";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/new-article" element={<NewArticle />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
