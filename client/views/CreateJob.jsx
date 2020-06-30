import React from 'react';
import {
    Typography,
    Grid,
    Box,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    TextField,
} from '@material-ui/core';

const CreateJob = props => {
    const { field, functions, selectedFn, handleSelect, handleInput } = props;
    const styles = {
        formControl: {
            minWidth: 120,
        },
        textBlock: {
            width: '30ch',
        },
    };
    
    return (
        <Grid container direction='column'>
            <Typography paragraph> Job Settings </Typography>
            <Grid item xs={12}>
                <Box m={2}>
                <Typography paragraph>Selected Field: {field} </Typography>
                <FormControl style={styles.formControl}>
                    <InputLabel id='function-select-label'>Function</InputLabel>
                    <Select
                    labelId='function-select-label'
                    value={selectedFn}
                    onChange={handleSelect}
                    defaultValue='notify'> 
                    {
                        functions.map((name,index) => 
                            <MenuItem value={name} key={`${name}-${index}`}>{name}</MenuItem>
                        )
                    }
                    </Select>
                    <TextField 
                    id='input-target-value'
                    label='Target Value' 
                    onChange={handleInput}/>
                </FormControl>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box m={2}>
                <TextField id='input-job-name'
                    label='Job Name' 
                    onChange={handleInput}/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box m={2}>
                <TextField 
                    style={styles.textBlock} 
                    id='input-job-description' 
                    label='Description' 
                    multiline 
                    rows={5}
                    variant='outlined' 
                    onChange={handleInput}/>
                </Box>
            </Grid>
            <Grid item xs={12}> 
                <Box m={2}>
                <TextField 
                        id='input-job-interval' 
                        label='interval (seconds)' 
                        defaultValue='500' 
                        onChange={handleInput}/>
                </Box>
            </Grid>
            <Grid item xs={12}> 
                <Box m={2}>
                <TextField 
                        style={styles.textBlock} 
                        id='input-job-message' 
                        label='Notification Message' 
                        multiline 
                        rows={5} 
                        variant='outlined' 
                        onChange={handleInput}/>
                </Box>
            </Grid>
                
           <Typography paragraph color='secondary'>The only current available notification type is email</Typography>
        </Grid>
    )
};

export default CreateJob;
