import React, {Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {AppContainer, DarkBackground} from "./App.styles";
import NavBar from "./components/NavBar/NavBar";
import AllProducts from "./containers/AllProducts/AllProducts";
import SingleProduct from "./containers/SingleProduct/SingleProduct";
import Cart from "./containers/Cart/Cart";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {isMiniCartOpen} = this.props

        return (
            <BrowserRouter>
                <AppContainer>
                    <NavBar/>
                    {isMiniCartOpen && <DarkBackground/>}
                    <Routes>
                        <Route path='/' element={<Navigate replace to='/all'/>}/>
                        <Route path='/:category' element={<AllProducts/>}/>
                        <Route path='/product/:productId' element={<SingleProduct/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                    </Routes>
                </AppContainer>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    const {isMiniCartOpen} = state.productReducer;
    return {
        isMiniCartOpen: isMiniCartOpen,
    }
}

export default connect(mapStateToProps)(App);
