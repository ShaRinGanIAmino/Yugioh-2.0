import React from 'react';
import { Outlet } from 'react-router-dom';
function LogLayout() {
  return (
    <div className=" bg-primary h-screen w-screen">
      <Outlet />
    </div>
  );
}

export default LogLayout;
