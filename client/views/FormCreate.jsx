import React from 'react'
import {
    Typography,
    Grid,
    TextField,
    Box,
    IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'


const CreateRequestForm = props => {
    const { 
        url, 
        handleAddHeader, 
        handleAddParam,
        handleInput 
    } = props;

    return (
        <div>
            <Grid container direction='column'>
                <Box m={2}>
                    <Typography paragraph> Url </Typography>
                    <Grid item xs={12} >
                        <TextField
                            label='url' 
                            id={`url-req-0`} 
                            defaultValue={url.url} 
                            onChange={handleInput} 
                            variant='outlined' 
                            name='url'/>
                    </Grid>
                </Box>

                <Box m={2} >
                    <Typography paragraph> Headers </Typography>
                    {
                        url.headers.map((headerObj, index) => {
                            return (
                                <Grid item key={`header-${index}`} xs={12} >
                                    <TextField 
                                        id={`header-optionName-${index}`} 
                                        label='Header' defaultValue={headerObj.optionName}  
                                        onChange={handleInput}/>
                                    <TextField 
                                        id={`header-value-${index}`} 
                                        label='Value' 
                                        defaultValue={headerObj.value} 
                                        onChange={handleInput}/>
                                </Grid>
                            )
                        })
                    }
                    <Box m={1}>
                        <IconButton onClick={handleAddHeader}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Box>
                
                <Box m={2}>
                    <Typography paragraph > Parameters </Typography>
                    {
                        url.params.map((paramObj, index) => {
                            return (
                                <Grid item key={`param-${index}`} xs={12} >
                                    <TextField 
                                        id={`param-optionName-${index}`} 
                                        label='Parameter' defaultValue={paramObj.optionName} 
                                        onChange={handleInput}/>
                                    <TextField 
                                        id={`param-value-${index}`}  
                                        label='Value' defaultValue={paramObj.value}  
                                        onChange={handleInput}/>
                                </Grid>
                            )
                        })
                    }
                    <Box m={1}> 
                    <IconButton onClick={handleAddParam}>
                        <AddIcon />
                    </IconButton>
                    </Box>
                </Box>
            </Grid>
            
        </div>
    )
};



export default CreateRequestForm;

