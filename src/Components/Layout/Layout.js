import React,{Component} from 'react';
import Auxillary from '../../hoc/Auxillary';
import Styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import{connect} from 'react-redux'

class Layout extends Component{
    state={
        showSideDrawer:true
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler=()=>{
        this.setState((prevState) =>{
            return{showSideDrawer:!prevState.showSideDrawer}
        })
    }

    render(){
        return (
        <Auxillary>
            <Toolbar 
                isAuth={this.props.isAuthenticated}
                drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
                isAuth={this.props.isAuthenticated}
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
            {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
            <main className={Styles.Content}>
                {this.props.children}
            </main>
        </Auxillary>
        )
    }
}

const mapStateToPropss = state =>{
    return{
        isAuthenticated:state.auth.token !== null
    }
}

export default connect(mapStateToPropss)(Layout);