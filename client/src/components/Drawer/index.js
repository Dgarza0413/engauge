import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const links = [
    {
        name: "Dashboard",
        icon: "fas fa-chart-line",
    }, {
        name: "Revenue",
        icon: "fas fa-credit-card",
    }, {
        name: "Reports",
        icon: "fas fa-file-signature",
    }, {
        name: "WellTable",
        icon: "fas fa-fill",
    }, {
        name: "New-Well",
        icon: "fas fa-fill",
    }, {
        name: "Map",
        icon: "fas fa-map-marked-alt",
    }, {
        name: "W2",
        icon: "fas fa-map-marked-alt",
    }
]

function Drawer() {
    return (
        <div className="drawer-container">
            <div className="navbar">
                <h4>Engauge</h4>
                <div className="links">
                    {links.map((text, index) => (
                        <Link to={"/" + text.name.toLowerCase()} key={index}>
                            <h6><i className={text.icon}></i>{text.name}</h6>
                         </Link>
                     ))}
                     <h6 className="logout"><i className="fas fa-sign-out-alt"></i>Logout</h6>
                </div>
            </div>
        </div>
    );
}

export default Drawer;

// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import FormInput from "../FormInput";

// const drawerWidth = 240;

// const styles = {
//     paper: {
//         background: "#242527"
//     }
// }

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     toolbar: theme.mixins.toolbar,
//     content: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.default,
//         padding: theme.spacing(3),
//     },
//     navbar: {
//         background: "#242527",
//         width: drawerWidth,
//         color: "white"
//     },
//     link: {
//         color: "white"
//     }
// }));

// export default function PermanentDrawerLeft() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <Drawer
//                 className={classes.drawer}
//                 variant="permanent"
//                 classes={{
//                     paper: classes.navbar
//                 }}
//                 anchor="left"
//             >
//                 <Divider />
//                 <List>
//                     <Link to={"/"} className={classes.link}>
//                         <ListItem>
//                             <ListItemText primary={"Engauge"} />
//                         </ListItem>
//                     </Link>

//                 </List>
//                 <List>
//                     {['Dashboard', 'Revenue', 'Reports', 'Welltable', 'NewWell', "Map"].map((text, index) => (
//                         <Link to={"/" + text}>
//                             <ListItem button key={text}>
//                                 <ListItemText primary={text} />
//                             </ListItem>
//                         </Link>
//                     ))}
//                 </List>
//                 <List>
//                     <ListItem button>
//                         <ListItemText primary={"Logout"} />
//                     </ListItem>
//                 </List>
//                 <Divider />
//             </Drawer>
//         </div >
//     );
// }