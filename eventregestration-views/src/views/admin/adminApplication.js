import React, { useState } from "react";
import Login from "../../layouts/Login";
import AdminLayout from "../../layouts/AdminLayout";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Grid, Paper, Divider} from '@material-ui/core' 
import {makeStyles} from '@material-ui/core/styles'
import StickyHeadTable from "../../layouts/Table";
import RegestrationChart from '../../components/RegestrationChart';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "2%",
  },
  container: {
    maxHeight: 440,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function AdminApplication() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <AdminLayout />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className ={classes.root}>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className ={classes.root}>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper className={classes.root}>
            <RegestrationChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper className={classes.root}>
          <StickyHeadTable />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AdminApplication;
