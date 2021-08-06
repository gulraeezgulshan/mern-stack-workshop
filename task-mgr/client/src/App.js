import React from "react";
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Paper,
} from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3}>Item 1</Paper>
        </Grid>
        <Grid xs={12} md={6} lg={3} item>
          <Paper elevation={3}>Item 2</Paper>
        </Grid>
        <Grid xs={12} md={6} lg={3} item>
          <Paper elevation={3}>Item 3</Paper>
        </Grid>
        <Grid xs={12} md={6} lg={3} item>
          <Paper elevation={3}>Item 4</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
