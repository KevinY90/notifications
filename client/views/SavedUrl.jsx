import React from 'react';
import {
    Typography,
    Box,
    Container,
    List,
    ListItem,
    Paper,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles(theme => ({
    view: {
        width: '75vw',
        marginLeft: theme.spacing(6),
    },
    button: {
        margin: theme.spacing(2),
    },
    urlItem: {
        marginBottom: theme.spacing(2),
    },
    bold: {
        fontWeight: 'bold',
    }
}));

const UrlView = props => {
    const classes = styles();
    const { urls } = props;
    return (
        <div className={classes.view}>
        <Container maxWidth='md'>
            <List>
                {
                    urls.length ? urls.map(urlObj => (
                        <Paper elevation={2} key={`${urlObj.id}`}>
                            <ListItem className={classes.urlItem}>
                                <Box m={3}> 
                                    <Typography>URL: {urlObj.url}</Typography>
                                    <Typography>Request Type: {urlObj.html ? 'html ' : 'api endpoint'}</Typography>
                                    <Typography className={classes.bold}>Headers</Typography>
                                    {
                                        urlObj.headers.length ? urlObj.headers.split(',').map(header => {
                                            const [name, value] = header.split('=');
                                            return <Typography key={`${name}-${value}`}>{name}: {value}</Typography>
                                        }) : ''
                                    }
                                    <Typography className={classes.bold}>Parameters</Typography>
                                    {
                                        urlObj.params.length ? urlObj.params.split(',').map(param => {
                                            const [name, value] = param.split('=');
                                            return <Typography key={`${name}-${value}`}>{name}: {value}</Typography>
                                        }) : ''
                                    }
                                </Box>
                            </ListItem>
                        </Paper>
                    )) : ''
                }
            </List>
        </Container>
        </div>
    )
};
export default UrlView;
