import React from 'react';
import {
    Container,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Button,
    Box,
    Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateRequest from '../components/CreateRequest';
import Payload from '../components/Payload';
import ResponseTree from '../components/ResponseTree';
import CreateJob from '../components/CreateJob';


const styles = makeStyles(theme => ({
    stepper: {
        width: '75%',
        marginLeft: theme.spacing(6),
    },
    button: {
        marginRight: theme.spacing(2),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const getSteps = () => [
    'Create Request',
    'View Response ',
    'Select Field',
    'Job Settings',
];

const getStepContent = step => {

    switch(step) {
        case 0:
            return <CreateRequest />
        case 1:
            return <Payload />;
        case 2:
            return <ResponseTree />;
        case 3:
            return <CreateJob />;
        default:
            return 'None';
    };
};

const BuilderComponent = props => {
    const { validResponse, field, handleCreate } = props;
    const classes = styles();
    const [activeStep, setStep] = React.useState(0);
    const steps = getSteps();
    const isDisabled = () => ( 
        (validResponse === false &&  activeStep === 1) ||
        (!field && activeStep == 2)
    );

    const handleNextStep = () => {
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);  
    };

    const handleCancel = () => {
        setStep(0)
    };

    return (
        <div className={classes.stepper}>
        <Container maxWidth='md'>
            <Stepper activeStep={activeStep}>
            {
                steps.map((label, index) => {
                    return (
                        <Step key={`${label}${index}`} >
                        <StepLabel >{label}</StepLabel>
                        </Step>
                    );
                })
            }
            </Stepper>
                {
                    activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                Steps completed
                            </Typography>
                            <Button variant='contained' className={classes.button} onClick={handleCreate}> Create </Button>
                            <Button variant='contained' color='secondary' onClick={handleCancel}> Cancel </Button>
                        </div>
                    ) : (
                        <div>
                            <Paper elevation={1} variant='outlined' margin={2}>
                           
                                {getStepContent(activeStep)}
                                
                            </Paper>
                        </div>
                    )
                }
        </Container>
        <Box m={12}>
            <Button 
                variant='contained'
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}>
                Back
            </Button>
            <Button 
                variant='contained'
                className={classes.button}
                onClick={handleNextStep}
                disabled={isDisabled()}
                >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                
            </Button>
        </Box>
    </div>
    )
};

export default BuilderComponent;
