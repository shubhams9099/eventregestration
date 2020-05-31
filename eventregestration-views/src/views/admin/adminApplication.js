import React, { useState } from "react";
import Login from "../../layouts/Login";
import AdminLayout from "../../layouts/AdminLayout";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StickyHeadTable from "../../layouts/Table";
function AdminApplication() {
  return (
    <React.Fragment>
      <AdminLayout />
      <StickyHeadTable />
    </React.Fragment>
  );
}

export default AdminApplication;
