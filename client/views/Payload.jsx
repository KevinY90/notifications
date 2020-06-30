import React from 'react';
import {
    Grid,
    Typography,
    Button,
    Box,
} from '@material-ui/core'


const PayloadComponent = props => {
    const { url, handleClick } = props;
    return (
        <Grid container m={3} >
            <Grid item xs={6}> 
            <Typography paragraph> Url: {url.url} </Typography>
            <Typography paragraph> Headers </Typography>
            {
                url.headers.map(header => (<Typography paragraph key={header.optionName}>{header.optionName}: {header.value}</Typography>))
            }
            <Typography paragraph> Parameters </Typography>
            {
                url.params.map(param => (<Typography paragraph key={param.optionName}>{param.optionName}: {param.value}</Typography>))
            }
            <Button variant='contained' color='primary' onClick={handleClick}> Test Payload </Button>
            </Grid>
            {
                url.statusCode !== null ?  
                <Grid item xs={6}>
                    <Box overflow='auto'>
                        {
                            url.validResponse ? <Typography paragraph> Valid </Typography> : <Typography paragraph color='secondary'> Invalid </Typography>
                        } 
                        <Typography paragraph color={url.validResponse ? 'primary' : 'secondary'}>
                            Response: {JSON.stringify(url.responseData)}
                        </Typography>
                    </Box>
                </Grid> : ''
            }
           
        </Grid>
    )
};

export default PayloadComponent;
