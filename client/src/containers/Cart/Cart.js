import React, {Component} from 'react';
import _ from 'lodash'
import {
    CartItemContainer,
    OuterContainer,
    Container,
    EmptyCart,
    EmptyCartContainer,
    Heading,
    Total,
    TotalPrice,
    Hr,
    TotalContainer,
    BottomContainer,
    TaxContainer,
    Tax,
    TaxPrice,
    QuantityContainer,
    Quantity,
    QuantityAmount,
    OrderButton, OrderButtonContainer
} from "./Cart.styles";
import {Query} from "@apollo/client/react/components";
import {GET_PRODUCT} from "../../queries/queries";
import {Loading} from "../../components/Loading/Loading";
import CartItem from "../../components/CartItem/CartItem";
import {images} from "../../img/consts";
import {totalAmount, taxBill} from "../../utils/utils";
import {connect} from "react-redux";
import actions from "../../store/actions";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    checkOutHandler = () => {
        this.props.checkOut()
        window.alert('Order has been placed successfully!')
    }

    render() {
        const {cartProducts, activeCurrency} = this.props;
        const uniqueProducts = _.uniqWith(cartProducts, _.isEqual);
        const uniqueIds = uniqueProducts.map((product) => product.id);
        const totalBill = totalAmount(cartProducts, activeCurrency);
        const symbol = cartProducts[0]?.price.filter(
            (price) => price.currency.label === activeCurrency
        );
        const tax = taxBill(21, totalBill)

        return (
            <OuterContainer emptyCart={cartProducts.length === 0}>
                <Heading>CART</Heading>
                {cartProducts.length !== 0 ? (
                    <Container>
                        {uniqueIds.map((productId, index) => (
                            <Query key={index} query={GET_PRODUCT} variables={{productId}}>
                                {({data, loading, error}) => {
                                    if (loading) return <Loading/>;
                                    if (error) return console.error(error);

                                    return (
                                        <CartItemContainer key={data.product.id}>
                                            <Hr/>
                                            <CartItem
                                                product={data.product}
                                                uniqueCartProducts={uniqueProducts}
                                                productIndex={index}
                                            />
                                        </CartItemContainer>
                                    );
                                }}
                            </Query>
                        ))}
                        <BottomContainer>
                            <TaxContainer>
                                <Tax>Tax 21%:</Tax>
                                <TaxPrice>{symbol[0].currency.symbol} {tax}</TaxPrice>
                            </TaxContainer>
                            <QuantityContainer>
                                <Quantity>Quantity:</Quantity>
                                <QuantityAmount>{cartProducts.length}</QuantityAmount>
                            </QuantityContainer>
                            <TotalContainer>
                                <Total>Total:</Total>
                                <TotalPrice>
                                    {symbol[0].currency.symbol} {totalBill}
                                </TotalPrice>
                            </TotalContainer>
                            <OrderButtonContainer>
                                <OrderButton
                            onClick={() => this.checkOutHandler()}
                            type='check'
                        >
                            ORDER
                        </OrderButton>
                            </OrderButtonContainer>
                        </BottomContainer>
                    </Container>
                ) : (
                    <EmptyCartContainer>
                        <EmptyCart src={images.EmptyCart} alt='Empty Cart'/>
                    </EmptyCartContainer>
                )}
            </OuterContainer>
        );
    }
}

const mapStateToProps = (state) => {
    const {cartProducts, isMiniCartOpen, activeCurrency} = state.productReducer;

    return {
        activeCurrency: activeCurrency,
        cartProducts: cartProducts,
        isMiniCartOpen: isMiniCartOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkOut: () => dispatch(actions.productActions.checkOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)