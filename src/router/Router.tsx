import { Routes, Route } from "react-router-dom";
import RepositorySearcher from "src/pages/home/components/RepositorySearcher";
import UserSearcher from "src/pages/home/components/UserSearcher";
import Home from "src/pages/home/Home";
// Routing of the page
const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserSearcher />} />
      <Route path="/repos" element={<RepositorySearcher />} />
    </Routes>
  );
};

export default Router;
