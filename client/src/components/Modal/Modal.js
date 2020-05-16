import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { Route, Link, Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const TransitionsModal = ({ handleFormSubmit }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                type="button"
                onClick={handleOpen}
                variant="contained"
            >
                Submit
      </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Confirm Update</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                        <Grid container justify="space-evenly" spacing={3}>
                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    fullWidth
                                    onClick={handleClose}
                                >
                                    cancel
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to={{
                                    pathname: "/reports"
                                }}>
                                    <Button
                                        onClick={handleFormSubmit}
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Update
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default TransitionsModal;