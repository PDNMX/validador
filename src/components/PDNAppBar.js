import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import imgHeader from "../assets/logo-PDN-mini.svg";
import {withStyles} from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
//import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing.unit * 1.7
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        [theme.breakpoints.up('sm')]:{
            //marginLeft: '80px'
        },
        [theme.breakpoints.down('sm')]:{
            //marginLeft: theme.spacing.unit
        },
        //marginRight: 20,
    },
    lastButton: {
        [theme.breakpoints.up('sm')]: {
            //marginRight: '80px'
        }
    },
    mText: {
        textTransform: "none"
    }
});

class PDNAppBar extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render(){
        const { classes } = this.props;
        const { anchorEl } = this.state;
        // const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <AppBar color="default"  position="static" >
                    <Grid container justify="center" spacing={0}>
                        <Grid item xs={12} style ={{maxWidth: '1024px'}}>
                            <Toolbar>
                                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" href='/'>
                                    <img src={imgHeader} alt="logoPDN" style={{width:'55px'}}/>

                                </IconButton>
                                <Typography variant="title" color="inherit" className={classes.flex}>

                                </Typography>

                                {/*<Button color="inherit" href="/datos">
                            Datos
                        </Button>*/}


                                <div>
                                    <IconButton
                                        aria-owns={anchorEl ? 'menu-appbar' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleClick}
                                        color="inherit"
                                    >
                                        <MenuIcon/>
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={this.handleClose}
                                    >
                                        <MenuItem onClick={this.handleClose} component={Button}
                                                  href = "https://www.plataformadigitalnacional.org/blog/"
                                                  className={classes.mText}
                                        >
                                            Blog
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose} component={Button} href="https://www.plataformadigitalnacional.org/about" className={classes.mText}>¿Qué es la PDN?</MenuItem>
                                        <MenuItem onClick={this.handleClose} component={Button} href="https://www.plataformadigitalnacional.org/terminos" className={classes.mText}>Términos de uso</MenuItem>
                                    </Menu>
                                </div>
                            </Toolbar>
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
        );
    }
}

// PDNAppBar.propTypes= {
//     classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(PDNAppBar);
