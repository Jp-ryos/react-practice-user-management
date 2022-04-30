import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page404Layout } from "../components/pages/Page404Layout";
import { TopLayOut } from "../components/pages/TopLayout";
import { UserLayout } from "../components/pages/UsersLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<TopLayOut />} />
        <Route path="/users" element={<UserLayout />} />
        <Route path="*" element={<Page404Layout />} />
      </Routes>
    </BrowserRouter>
  );
};
