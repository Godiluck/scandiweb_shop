import React, {Component} from 'react';
import {Query} from "@apollo/client/react/components";
import {Link} from "react-router-dom";
import {GET_CATEGORIES} from "../../queries/queries";
import {
    Button, CartButton, CartButtonBadge, CartButtonBadgeDiv,
    CartButtonDiv,
    Center,
    Currency,
    CurrencyArrow,
    CurrencyButton,
    Left,
    Logo,
    Right,
    Wrapper
} from "./NavBar.styles";
import {images} from "../../img/consts";
import OutsideClick from "../OutsideClick";
import CurrencyMenu from "../CurrencyMenu/CurrencyMenu";
import MiniCart from "../MiniCart/MiniCart";
import actions from "../../store/actions/index";
import {connect} from "react-redux";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 'all',
            currencyMenu: false,
            currentCurrency: '$',
            isMiniCartOpen: false,
        }
    }

    currencyClickHandler = () => {
        this.setState({
            currencyMenu: !this.state.currencyMenu
        })
    }

    currencyChangeHandler = (currency) => {
        this.setState({
            currentCurrency: currency.symbol,
            currencyMenu: !this.state.currencyMenu,
        });
        this.props.currencySwitcher(currency.label)
    }

    miniCartClickHandler = () => {
        this.setState({
            isMiniCartOpen: !this.state.isMiniCartOpen
        })
        this.props.miniCartToggler()
    }

    render() {
        const {cartProducts} = this.props;

        return (
            <Wrapper>
                <Left>
                    <Query query={GET_CATEGORIES}>
                        {({data, loading, error}) => {
                            if (loading) return <h2>Loading...</h2>;
                            if (error) return console.error(error);

                            return data.categories.map((category, index) => (
                                <Link
                                    style={{all: 'unset'}}
                                    key={index}
                                    to={`/${category.name}`}
                                    onClick={() => {
                                        this.setState({currentCategory: category.name})
                                    }}
                                >
                                    <Button
                                        active={category.name}
                                        currentCategory={this.state.currentCategory}
                                    >
                                        {category.name.toUpperCase()}
                                    </Button>
                                </Link>
                            ));
                        }}
                    </Query>
                </Left>
                <Center>
                    <Link
                        to="/"
                        onClick={() => this.setState({currentCategory: 'all'})}
                    >
                        <Logo src={images.LogoImg} alt='Logo'/>
                    </Link>
                </Center>
                <Right>
                    <CurrencyButton onClick={this.currencyClickHandler}>
                    <Currency>{this.state.currentCurrency}</Currency>
                    <CurrencyArrow
                        src={this.state.currencyMenu ? images.ArrowUp : images.ArrowDown}
                        alt='Arrow'
                    />
                    </CurrencyButton>
                        <OutsideClick
                            isOpen={this.state.currencyMenu}
                            closeHandler={this.currencyClickHandler}
                        >
                            {this.state.currencyMenu && (
                                <CurrencyMenu
                                    currencyChangeHandler={this.currencyChangeHandler}
                                />
                            )}
                        </OutsideClick>
                        <CartButtonDiv>
                            <CartButton
                                src={images.Cart}
                                alt='Cart'
                                onClick={this.miniCartClickHandler}
                            />
                            {cartProducts.length > 0 && (
                                <CartButtonBadgeDiv
                                    onClick={this.miniCartClickHandler}
                                >
                                    <CartButtonBadge>
                                        {cartProducts.length}
                                    </CartButtonBadge>
                                </CartButtonBadgeDiv>
                            )}
                        </CartButtonDiv>
                        <OutsideClick
                            isOpen={this.state.isMiniCartOpen}
                            closeHandler={this.miniCartClickHandler}
                        >
                            {this.state.isMiniCartOpen && (
                                <MiniCart
                                    miniCartClose={this.miniCartClickHandler}
                                />
                            )}
                        </OutsideClick>
                </Right>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    const {cartProducts} = state.productReducer;

    return {
        cartProducts: cartProducts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        miniCartToggler: () => dispatch(actions.productActions.miniCartToggler()),
        currencySwitcher: (currency) => dispatch(actions.productActions.currencySwitcher(currency)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);