import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  InputLabel,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(1),
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  label: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(2),
    color: "#263238"
  }
}));
const UserDetails = () => {
  const [inputs, setInputs] = useState("");
  const [reg_type, setRegType] = useState('');
  const handleChange = (event)=> {
    setRegType(event.target.value);
  }
  const classes = useStyles();
  const handleInputs = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <React.Fragment>
      <Typography variant="h6">Personal Details</Typography>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <TextField
            required
            id="fullname"
            name="fullname"
            label="Full Name"
            onChange={handleInputs}
            value={inputs.fullname || ""}
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone_no"
            name="phone_no"
            label="Phone No."
            onChange={handleInputs}
            value={inputs.phone_no || ""}
            fullWidth
            autoComplete="phone-no"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="email"
            id="email_id"
            name="email_id"
            label="Email ID."
            onChange={handleInputs}
            value={inputs.email_id || ""}
            fullWidth
            autoComplete="phone-no"
          />
        </Grid>
      </Grid>
      <Divider className={classes.selectEmpty} />
      <Typography variant="h6" gutterBottom className={classes.selectEmpty}>
        Regestration Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
                            Regestration Type
        </InputLabel>
          <Select id="regestration_type" name="regestration_type" value={reg_type} onChange={handleChange}>
            <MenuItem value="self">Self</MenuItem>
            <MenuItem value="group">Group</MenuItem>
            <MenuItem value="corporate">Corporate</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="no_tickets"
            id="no_tickets"
            type="number"
            label="No of tickets"
            fullWidth
          />
        </Grid>
      </Grid>
      {/* <Grid item xs={12} >
                    <Grid container>
                        <FormLabel component='label' className={classes.label} >
                            Upload Weavers/Artisan/Aadhar card
                        </FormLabel>
                        <div>
                            <input
                                name="id_image"
                                id="contained-button-file"
                                onChange={selcetImages}
                                multiple
                                type="file"
                            />
                            <Button onClick={uploadImages} color="primary" variant="contained" className={classes.button}>
                                Upload
                          </Button>
                            <Typography className={classes.message} gutterBottom>
                                {inputs.message || ''}
                            </Typography>
                        </div>


                    </Grid>

                </Grid> */}
    </React.Fragment>
  );
};

export default UserDetails;
