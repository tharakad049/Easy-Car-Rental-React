/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/MenuItem';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from "@mui/material/MenuItem";
import RestoreIcon from '@material-ui/core/MenuItem';
import FavoriteIcon from '@material-ui/core/MenuItem';
import LocationOnIcon from '@mui/material/MenuItem';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import StarBorderIcon from '@material-ui/core/ImageListItemBar';
import itemData from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
    },
    root1: {
        width: 500,
        //backgroundColor : "red",
    },
    root3: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));

function ButtonAppBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="absolute">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Easy Care Rental
                    </Typography>

                    <BottomNavigation value={value} onChange={handleChange} className={classes.root1}>
                        <BottomNavigationAction label="Home" value="home" core={<RestoreIcon />} />
                        <BottomNavigationAction label="Home" value="home" core={<FavoriteIcon />} />
                        <BottomNavigationAction label="Home" value="home" icon={<LocationOnIcon />} />
                        <BottomNavigationAction label="Home" value="home" icon={<FolderIcon />} />
                    </BottomNavigation>

                    <IconButton edge="start" className={classes.menuButton} color="green" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>

                    <Button variant="contained">REGISTER</Button>
                    <Button variant="contained" color="secondary">LOGIN</Button>
                </Toolbar>
            </AppBar>
                <div className={classes.root3}>
                    <ImageList rowHeight={200} gap={1} className={classes.imageList}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
                                <img src={item.img} alt={item.title} />
                                <ImageListItemBar
                                    title={item.title}
                                    position="top"
                                    actionIcon={
                                        <IconButton aria-label={`star ${item.title}`} className={classes.icon}>
                                            <StarBorderIcon />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                    className={classes.titleBar}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>

        </div>
    );
}


export default (ButtonAppBar)*/


/*
import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <section className={classes.auto_header_top_area}>
                <div className={classes.container}>
                    <div className={classes.container1}>
                        <div className={classes.row}>
                            <div className={classes.col_md_6}>
                                <div className={classes.header_top_left}>
                                    <p>Need Help?: <i className={classes.fa_fa_phone}></i> Call: 077-8580393</p>
                                </div>
                            </div>
                            <div className={classes.col_md_6}>
                                <div className={classes.header_top_right}>
                                    <a>
                                        <i className={classes.fa_fa_key}></i>
                                        login
                                    </a>
                                    <a>
                                        <i className={classes.fa_fa_user}></i>
                                        register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        );
    }
}

export default withStyles(styleSheet)(HomePage)*/


import React, {Component} from "react";
import {withStyles} from "@mui/material";
import {styleSheet} from "./style";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <section className={classes.auto_header_top_area}>

                <div className={classes.row_controller}>
                    <div>
                        <div>
                            <h1>
                               <a>

                               </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default withStyles (styleSheet)(HomePage)
