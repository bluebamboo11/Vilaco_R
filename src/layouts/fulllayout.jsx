import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from '../components/header/header.jsx';
import Sidebar from '../components/sidebar/sidebar.jsx';
import Footer from '../components/footer/footer.jsx';
import {ThemeRoutes,studentRoutes} from '../routes/routing.jsx';
import {auth, userService} from "../firebase";
import {connect} from "react-redux";
import {isLoading, setUser, setUserData} from "../redux/actions";


//quản lý đường dẫn của menu các chức năng
class Fulllayout extends React.Component {
    /*--------------------------------------------------------------------------------*/
    /*Change the layout settings [HEADER,SIDEBAR && DARK LAYOUT] from here            */

    /*--------------------------------------------------------------------------------*/
    constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.setRouter = this.setRouter.bind(this);
        this.state = {
            routes:[],
            isOpen: false,
            isLogin: false,
            width: window.innerWidth,
            isLoad: true,
            registered: true,
            settings: [
                {
                    theme: 'light',
                    layout: 'vertical',
                    dir: 'ltr',
                    sidebartype: 'full',
                    sidebarpos: 'fixed',
                    headerpos: 'fixed',
                    boxed: 'full',
                    navbarbg: 'skin4',
                    sidebarbg: 'skin6',
                    logobg: 'skin4'
                }
            ]
        };

        this.props.history.listen((location, action) => {
            if (
                window.innerWidth < 767 &&
                document
                    .getElementById('main-wrapper')
                    .className.indexOf('show-sidebar') !== -1
            ) {
                document
                    .getElementById('main-wrapper')
                    .classList.toggle('show-sidebar');
            }
        });
    }

    /*--------------------------------------------------------------------------------*/
    /*Life Cycle Hook, Applies when loading or resizing App                           */

    /*--------------------------------------------------------------------------------*/
    componentDidMount() {
        // doCreateAutoUserTest();
        this.props.dispatch(isLoading(true));
        window.addEventListener('load', this.updateDimensions);
        window.addEventListener('resize', this.updateDimensions);
        this.onChangeAuth = auth.checkLogin((use) => {
            if (!use) {
                window.location.href = '/xac-thuc/dang-nhap';
                this.props.dispatch(isLoading(false))
            } else {
                userService.getOneUser(use.uid, (data) => {
                    if (data) {
                        data.uid = use.uid;
                        this.setRouter(data);
                        this.props.dispatch(setUserData(data));
                        userService.getAccess(use.uid, data.type, (access) => {
                            if (!access || !access.validate) {
                               window.location.href = '/xac-thuc/mau-dang-ky'
                            }else {
                                this.setState({isLogin:true})
                            }
                            this.props.dispatch(isLoading(false))
                        })
                    } else {
                        window.location.href = '/xac-thuc/mau-dang-ky';
                        this.props.dispatch(isLoading(false))
                    }
                    this.props.dispatch(setUser(use))

                });

            }
        });

    }
     setRouter(user){
       if(user.type ==='student'){
           this.setState({routes:studentRoutes})
       } else {
           this.setState({routes:ThemeRoutes})
       }
     }
    /*--------------------------------------------------------------------------------*/
    /*Function that handles sidebar, changes when resizing App                        */

    /*--------------------------------------------------------------------------------*/
    updateDimensions() {
        let element = document.getElementById('main-wrapper');
        if (!element) {
            return
        }
        this.setState({
            width: window.innerWidth
        });
        switch (this.state.settings[0].sidebartype) {
            case 'full':
            case 'iconbar':
                if (this.state.width < 1170) {
                    element.setAttribute('data-sidebartype', 'mini-sidebar');
                    element.classList.add('mini-sidebar');
                } else {
                    element.setAttribute(
                        'data-sidebartype',
                        this.state.settings[0].sidebartype
                    );
                    element.classList.remove('mini-sidebar');
                }
                break;

            case 'overlay':
                if (this.state.width < 767) {
                    element.setAttribute('data-sidebartype', 'mini-sidebar');
                } else {
                    element.setAttribute(
                        'data-sidebartype',
                        this.state.settings[0].sidebartype
                    );
                }
                break;

            default:
        }

    }

    /*--------------------------------------------------------------------------------*/
    /*Life Cycle Hook                                                                 */

    /*--------------------------------------------------------------------------------*/
    componentWillUnmount() {
        window.removeEventListener('load', this.updateDimensions);
        window.removeEventListener('resize', this.updateDimensions);
        this.onChangeAuth()
    }

    /*--------------------------------------------------------------------------------*/
    /*Theme Setting && Changes default(LIGHT) THEME to DARK COLOR:-                   */
    /*--------------------------------------------------------------------------------*/
    darkTheme = a => {
        if (a.target.checked) {
            let darktheme = JSON.parse(JSON.stringify(this.state.settings));
            darktheme[0].theme = 'dark';
            this.setState({settings: darktheme});
        } else {
            let lighttheme = JSON.parse(JSON.stringify(this.state.settings));
            lighttheme[0].theme = 'light';
            this.setState({settings: lighttheme});
        }
    };
    /*--------------------------------------------------------------------------------*/
    /*Theme Setting && Changes Default(FULL) LAYOUT to BOXED LAYOUT                   */
    /*--------------------------------------------------------------------------------*/
    boxedTheme = b => {
        if (b.target.checked) {
            let boxtheme = JSON.parse(JSON.stringify(this.state.settings));
            boxtheme[0].boxed = 'boxed';
            this.setState({settings: boxtheme});
        } else {
            let fulltheme = JSON.parse(JSON.stringify(this.state.settings));
            fulltheme[0].boxed = 'full';
            this.setState({settings: fulltheme});
        }
    };
    /*--------------------------------------------------------------------------------*/
    /*Theme Setting && Changes Default(ltr) DIRECTION to rtl DIRECTION                   */
    /*--------------------------------------------------------------------------------*/
    rtl = h => {
        if (h.target.checked) {
            let rtl = JSON.parse(JSON.stringify(this.state.settings));
            rtl[0].dir = 'rtl';
            this.setState({settings: rtl});
        } else {
            let ltr = JSON.parse(JSON.stringify(this.state.settings));
            ltr[0].dir = 'ltr';
            this.setState({settings: ltr});
        }
    };



    render() {
        const {routes} = this.state;

        if (!this.state.isLogin) {
            return ''
        }
        /*--------------------------------------------------------------------------------*/
        /* Theme Setting && Layout Options wiil be Change From Here                       */
        /*--------------------------------------------------------------------------------*/
        return (
            <div
                id="main-wrapper"
                dir={this.state.settings[0].dir}
                data-theme={this.state.settings[0].theme}
                data-layout={this.state.settings[0].layout}
                data-sidebartype={this.state.settings[0].sidebartype}
                data-sidebar-position={this.state.settings[0].sidebarpos}
                data-header-position={this.state.settings[0].headerpos}
                data-boxed-layout={this.state.settings[0].boxed}
            >
                {/*--------------------------------------------------------------------------------*/}
                {/* Header                                                                         */}
                {/*--------------------------------------------------------------------------------*/}
                <Header data={this.state}/>
                {/*--------------------------------------------------------------------------------*/}
                {/* Sidebar                                                                        */}
                {/*--------------------------------------------------------------------------------*/}
                <Sidebar data={this.state} {...this.props} routes={routes}/>
                {/*--------------------------------------------------------------------------------*/}
                {/* Page Main-Content                                                              */}
                {/*--------------------------------------------------------------------------------*/}
                <div className="page-wrapper d-block">
                    <div className="page-content container-fluid">
                        {this.props.user.name&&<Switch>
                            {routes.map((prop, key) => {
                                if (prop.navlabel) {
                                    return null;
                                } else if (prop.collapse) {
                                    return prop.child.map((prop2, key2) => {
                                        if (prop2.collapse) {
                                            return prop2.subchild.map((prop3, key3) => {
                                                return (
                                                    <Route
                                                        path={prop3.path}
                                                        component={prop3.component}
                                                        key={key3}
                                                    />
                                                );
                                            });
                                        }
                                        return (
                                            <Route
                                                path={prop2.path}
                                                component={prop2.component}
                                                key={key2}
                                            />
                                        );
                                    });
                                } else if (prop.redirect) {
                                    return (
                                        <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                                    );
                                } else {
                                    return (
                                        <Route
                                            path={prop.path}
                                            component={prop.component}
                                            key={key}
                                        />
                                    );
                                }
                            })}
                        </Switch>}
                    </div>
                    <Footer/>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {user: state.userData}
};

Fulllayout = connect(mapStateToProps)(Fulllayout);
export default Fulllayout;
