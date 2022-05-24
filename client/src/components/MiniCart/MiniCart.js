import React, {Component} from 'react';
import _ from 'lodash'
import {totalAmount} from "../../utils/utils";
import {
    BottomContainer,
    EmptyCart,
    EmptyCartContainer,
    Heading, MiniCartButton, MiniCartButtonContainer,
    MiniCartInnerContainer,
    MiniCartOuterContainer,
    TopContainer, Total, TotalContainer, TotalPrice
} from "./MiniCart.styles";
import {Query} from "@apollo/client/react/components";
import {GET_PRODUCT} from "../../queries/queries";
import MiniCartItem from "../MiniCartItem/MiniCartItem";
import {Link} from "react-router-dom";
import {images} from "../../img/consts";
import actions from "../../store/actions/index";
import {connect} from "react-redux";

class MiniCart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    checkOutHandler = () => {
        this.props.checkOut()
        window.alert('Order has been placed successfully!')
    }

    render() {
        const {miniCartClose, activeCurrency, cartProducts} = this.props;
        const uniqueProducts = _.uniqWith(cartProducts, _.isEqual);
        const uniqueIds = uniqueProducts.map((product) => product.id);
        const totalBill = totalAmount(cartProducts, activeCurrency);
        const symbol = cartProducts[0]?.price.filter(
            (price) => price.currency.label === activeCurrency
        );
        return (
            <MiniCartOuterContainer>
                <Heading>
                    <strong>My Bag</strong>, {uniqueProducts.length} items
                </Heading>
                {cartProducts.length !== 0 ? (
                    <MiniCartInnerContainer>
                        <TopContainer>
                            {uniqueIds.map((productId, index) => (
                                <Query
                                    query={GET_PRODUCT}
                                    key={index}
                                    variables={{productId}}
                                >
                                    {({data, loading, error}) => {
                                        if (loading) return <h3>Loading...</h3>
                                        if (error) return console.error(error)

                                        return (
                                            <MiniCartItem
                                                key={index}
                                                product={data.product}
                                                uniqueCartProducts={uniqueProducts}
                                                productIndex={index}
                                                cartProducts={cartProducts}
                                                />
                                        )
                                    }}
                                </Query>
                            ))}
                        </TopContainer>
                    </MiniCartInnerContainer>
                ) : (
                    <EmptyCartContainer>
                        <EmptyCart src={images.EmptyCart} alt='Empty Cart'/>
                    </EmptyCartContainer>
                )}
                <BottomContainer>
                    <TotalContainer>
                        <Total>Total</Total>
                        <TotalPrice>
                            {cartProducts.length > 0 ?
                                `${symbol[0].currency.symbol} ${totalBill}`
                                :
                                0
                            }
                        </TotalPrice>
                    </TotalContainer>
                    <MiniCartButtonContainer>
                        <Link
                            to={'/cart'}
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                            }}
                            >
                            <MiniCartButton
                                onClick={() => miniCartClose()}
                                type='view'
                            >
                                GO TO BAG
                            </MiniCartButton>
                        </Link>
                        <MiniCartButton
                            onClick={() => cartProducts.length > 0 ?
                                this.checkOutHandler()
                                :
                                window.alert("Your cart is empty!")
                            }
                            type='check'
                        >
                            CHECK OUT
                        </MiniCartButton>
                    </MiniCartButtonContainer>
                </BottomContainer>
            </MiniCartOuterContainer>
        );
    }
}

const mapStateToProps = (state) => {
    const {activeCurrency, cartProducts} = state.productReducer;

    return {
        activeCurrency: activeCurrency,
        cartProducts: cartProducts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkOut: () => dispatch(actions.productActions.checkOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);