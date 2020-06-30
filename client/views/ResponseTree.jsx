import React from 'react';
import {
    Container,
    Typography,
} from '@material-ui/core';
import {
    TreeItem,
    TreeView,
} from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const ResponseTree = props => {
    const { responseData, field, handleSelect } = props;

    const [expanded, setExpanded] = React.useState([]);

    const [selected, setSelected] = React.useState([])

    const handleToggleExpand = (e, nodeId) => { setExpanded(nodeId) };

    const handleToggleSelect = (e, nodeId) => { 
        setSelected(nodeId);
        handleSelect(nodeId);
    };

    const renderTree = (data, path) => {
        const entries = Object.entries(data);
        const p = path ? `${path}.` : '';
        return (
            entries.map(([name, value], index) => (
                <TreeItem 
                    key={`${p}${name}${index}`} 
                    nodeId={`${p}${name}`} 
                    label={ (Array.isArray(value) || typeof value === 'object') ? `${name}` : `${name}: ${value}`}>
                        {
                            Array.isArray(value) ?  value.map((item,idx) => {
                                const treeData = {} 
                                treeData[idx] = item;
                                return renderTree(treeData, `${p}=${idx}`);
                            }) : typeof value === 'object' ? renderTree(value, `${p}${name}`)  : null
                        }
                </TreeItem>
                )
            )
        );
    };

    return (
        <Container maxWidth='md'>
            <Typography paragraph color='primary'>Selected Field: {field !== null ? field.split('.').pop() : ''} </Typography>

            <Typography paragraph> Select Fields to Track </Typography>
            <TreeView 
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronRightIcon/>}
            expanded={expanded}
            selected={selected}
            onNodeToggle={handleToggleExpand}
            onNodeSelect={handleToggleSelect}
            >   
                {renderTree(responseData, '') }
            </TreeView>
        </Container>
    );
};

export default ResponseTree;
