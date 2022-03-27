import { useState, Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function EmailCard(props) {
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <Box sx={{ p: 2 }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Grid container direction={'row'} sx={{ p: 0 }} justifyContent='start'>
                        <Avatar {...stringAvatar(props.user.name)} />
                        <Grid direction={'column'} justifyContent={'flex-start'} sx={{ ml: 1, mr: 'auto', textAlign: 'start' }} >
                            <Typography variant="body2" sx={{ fontSize: '0.775rem', fontWeight: 500, pr: 1, width: 'fit-content' }} >
                                {props.user.name}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '0.775rem', width: 'fit-content' }} >
                                {`<${props.user.name.toLowerCase().replace(" ", "_")}@gmail.com>`}
                            </Typography>
                        </Grid>
                        <Grid direction={'column'}>
                            <Typography variant="body2" sx={{ fontSize: '0.775rem', textAlign: 'end' }} >
                                Dec 29, 2021, 5:38 PM
                            </Typography>
                            <Grid sx={{ p: 0, py: 1, borderColor: 'primary.main' }} >
                                <Button size="small" sx={{ mr: 1 }} variant='contained'>PDF(1)</Button>
                                <Button size="small" sx={{ mr: 1 }} disabled variant='contained' > Docx(0)</Button>
                                <Button size="small" sx={{}} disabled variant='contained'> Excel(0)</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid direction={'column'}>
                        <Divider></Divider>
                        <Typography bottomGutter variant="body2" component="div" sx={{ textAlign: 'initial', p: 2, pb: 0 }}>
                            {props.user.subject}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'initial', p: 2 }}>
                            {props.user.message}
                        </Typography>

                    </Grid>
                </AccordionDetails>

            </Accordion>
        </Box>
    );
}