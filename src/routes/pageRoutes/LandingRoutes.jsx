import React from "react";
import { Navigate, Route, Routes } from "react-router";

import { Landing } from "../../pages/landing";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};

export default LandingRoutes;
