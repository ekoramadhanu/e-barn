import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Toolbar from '@mui/material/Toolbar';

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ElevationScroll {...this.props}>
                    <AppBar color="secondary">
                        <Toolbar variant="">
                            <Typography variant="subtitle1" component="div" sx={{my: 0.5}}>
                                Download  E-barn app
                            </Typography>
                        </Toolbar>
                        <Toolbar>
                            <Typography variant="h6" component="div">
                                E-barn
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
            </React.Fragment>
        );
    }
}

export default Navbar;