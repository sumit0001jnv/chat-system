import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { generateID } from '../../utility/helper';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function LandingPage(props) {
    const [chatUsers, setChatUsers] = useState([{
        id: generateID(), name: 'Jenifer Fritz', descrpition: 'I am a developer', time: '3:15 PM'
    },
    {
        id: generateID(), name: 'Laney Gray', descrpition: 'I am looking for designer', time: '5:15 PM'
    }, {
        id: generateID(), name: 'Oscar Thomsan', descrpition: 'Responding', time: '11:15 PM'
    }, {
        id: generateID(), name: 'Kendra Lord', descrpition: 'Five short years at MIT', time: '21 Jan'
    }, {
        id: generateID(), name: 'Gatlin Huber', descrpition: 'Working the way developers work | Working the way developers work', time: '01 Jan'
    }, {
        id: generateID(), name: 'Timothy Gunter', descrpition: 'Full stack developer', time: '31 Dec'
    }, {
        id: generateID(), name: 'Jahlil Kyle', descrpition: 'Career path', time: '20 Dec'
    }]);
    const [chats, setChats] = useState([{
        name: chatUsers[0].name,
    }, {
        name: chatUsers[4].name,
    }, {
        name: chatUsers[0].name,
    }, {
        name: chatUsers[4].name,
    }, {
        name: chatUsers[0].name,
    }, {
        name: chatUsers[4].name,
    }, {
        name: chatUsers[0].name,
    }, {
        name: chatUsers[4].name,
    }, {
        name: chatUsers[0].name,
    }, {
        name: chatUsers[4].name,
    }])
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

    const useStyles = () => {
        return {
            multiLineEllipsis: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: 'calc(100% - 50px)',
                textAlign: 'initial'
            }
        }
    };
    return (
        <Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar color="primary" enableColorOnDark>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ mr: 'auto' }}>
                            Chat App
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Box sx={{ flexGrow: 1, m: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4} >
                        <Item>
                            <Grid contaniner direction={'column'} >
                                <Box
                                    component="form"
                                    sx={{ p: 1, display: 'flex', alignItems: 'center' }}
                                >

                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'Search' }}
                                        size={'small'}
                                    />
                                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Box>
                                <Divider></Divider>
                                <Grid direction={'column'} sx={{ maxHeight: 'calc(100vh - 192px)', height: 'calc(100vh - 192px)', flexWrap: 'nowrap', overflowY: 'auto' }}>
                                    {chatUsers.map(user => {
                                        return <>
                                            <Stack direction="row" spacing={2} sx={{ p: 2 }} key={user.id}>
                                                {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
                                                <Avatar {...stringAvatar(user.name)} />
                                                <Stack item direction="column" sx={{ width: '100%', maxWidth: 'calc(100% - 57px)' }} alignItems={'center'}>
                                                    <Grid container sx={{}} direction={'row'}>
                                                        <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, mr: 'auto', textAlign: 'initial' }}>
                                                            {user.name}
                                                        </Typography>
                                                        <Typography variant="caption" display="block" sx={{ maxWidth: '60px' }} >
                                                            {user.time}
                                                        </Typography>
                                                    </Grid>
                                                    <Typography variant="body2" component="div" sx={{ mr: 'auto', mt: 0, ...useStyles().multiLineEllipsis }}>
                                                        {user.descrpition}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                            <Divider></Divider>
                                        </>
                                    })}
                                </Grid>

                            </Grid>
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <Grid contaniner direction={'column'}>
                                <Stack direction="row" spacing={2} key={chatUsers[0].id} sx={{p:2}}>
                                    {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
                                    <Avatar {...stringAvatar(chatUsers[0].name)} />
                                    <Stack item direction="column" sx={{ width: '100%', maxWidth: 'calc(100% - 57px)' }} alignItems={'center'}>
                                        <Grid container>
                                            <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, mr: 'auto', textAlign: 'initial' }}>
                                                {chatUsers[0].name}
                                            </Typography>
                                        </Grid>
                                        <Typography variant="body2" component="div" sx={{ mr: 'auto', mt: 0, ...useStyles().multiLineEllipsis }}>
                                            {chatUsers[0].descrpition}
                                        </Typography>
                                    </Stack>
                                    <Grid>
                                        <IconButton aria-label="delete">
                                            <SearchIcon />
                                        </IconButton>
                                    </Grid>
                                </Stack>
                                <Divider></Divider>
                                { }
                                <Grid direction={'column'} sx={{  maxHeight: 'calc(100vh - 204px)', height: 'calc(100vh - 204px)', flexWrap: 'nowrap', overflowY: 'auto' }}>
                                    {chats.map(user => {
                                        return user.name === chatUsers[0].name ? <>
                                            <Grid container direction={'row'} sx={{ p: 2 }}>
                                                <Avatar {...stringAvatar(chatUsers[0].name)} />
                                                <Grid container xs={11} md={9} >
                                                    <div style={{
                                                        width: '16px',
                                                        height: '16px',
                                                        clipPath: 'polygon(100% 0, 0 0, 100% 75%)',
                                                        backgroundColor: '#e3f2fd',
                                                        marginRight: '-0.5px',
                                                        marginTop: '-0.5px',
                                                    }} />
                                                    <Grid item xs={11} sx={{
                                                        borderRadius: '0 16px 16px', p: 2, backgroundColor: '#e3f2fd',
                                                    }}>
                                                        <Typography variant="body2" sx={{ fontSize: '0.775rem' }} >
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid></> : <>
                                            <Grid container direction={'row-reverse'} sx={{ p: 2 }} alignItems={'end'}>
                                                <Avatar {...stringAvatar(user.name)} />
                                                <Grid container xs={11} md={9} direction={'row-reverse'} alignItems={'end'}>
                                                    <div style={{
                                                        width: '16px',
                                                        height: '16px',
                                                        clipPath: 'polygon(100% 100%, 0 34%, 0 100%)',
                                                        backgroundColor: '#fff3e0',
                                                        marginLeft: '-0.5px',
                                                    }} />
                                                    <Grid item xs={11} sx={{
                                                        borderRadius: '16px 16px 0', p: 2, backgroundColor: '#fff3e0',
                                                    }}>
                                                        <Typography variant="body2" sx={{ fontSize: '0.775rem' }} >
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                                        </Typography>
                                                    </Grid>

                                                </Grid>

                                            </Grid></>
                                    })}


                                </Grid>


                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    );
}