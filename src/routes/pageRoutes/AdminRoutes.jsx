import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Auth } from "../ValidateAuth";
import { useClientAuthStore } from "../../store/useAuth";

import { Dashboard } from "../../pages/admin/Authenticated";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/"} />} />
      <Route element={<Auth store={useClientAuthStore} redirect={"/"} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
