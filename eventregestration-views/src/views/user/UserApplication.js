import React, { useState } from 'react';
import { connect } from 'react-redux'


import UserDefaultLayout from '../../layouts/UserDefaultLayout';
import { Paper, Typography, StepButton, Stepper, Button, Step, StepLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserDetails from '../../components/UserDetails';
import Review from '../../components/Review'; 
const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    }
  }));
function UserApplication(props) {
    const classes = useStyles();

    const steps = ['Your Details', 'Review your details'];

    const [activeStep, setActiveStep] = useState(0)

    const getStepContent = (step) =>{
        switch (step) {
            case 0:
              return <UserDetails />;
            case 1:
              return <Review />;
            default:
              throw new Error('Unknown step');
         }
    };

    const submitApplication =()=>{

    };
    const handleNext = () => {
        if (activeStep === 1) {
          submitApplication();
        }
        else {
          setActiveStep(activeStep + 1);
        }
      };
      const handleBack = () => {
        setActiveStep(activeStep - 1);
      };
    return (
        <React.Fragment>
            <UserDefaultLayout/>
            <div className={classes.layout}>
            <Paper className={classes.paper}>
            <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Your Application is submitted.
                </Typography>
                  <Typography variant="subtitle1">
                    Your Application number is ''. We have emailed your Application confirmation, and will
                    send you an update when your Application will accepted.
                </Typography>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Apply' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>
            </div>
        </React.Fragment>
    )
}

// const mapStateToProps = state =>{
//   return{
//     application: state.application
//   }
// }
// export default connect(
//   mapStateToProps
// ) 
// (UserApplication);
export default UserApplication;