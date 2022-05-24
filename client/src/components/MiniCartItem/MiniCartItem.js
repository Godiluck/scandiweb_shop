import React, {Component} from 'react';
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import {
    CartContainer, Image, ImageContainer,
    LeftContainer, Minus, Plus,
    PriceValue, Quantity,
    QuantityContainer,
    RightContainer,
    SubTitle,
    Title
} from "./MiniCartItem.styles";
import {GrAdd, GrSubtract} from "react-icons/gr";
import actions from "../../store/actions/index";
import {connect} from "react-redux";
import {computeQuantity} from "../../utils/utils";

class MiniCartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {name, gallery, prices, brand} = this.props.product;
        const {activeCurrency, uniqueCartProducts, productIndex, cartProducts} = this.props;
        const {id, attributes, selectedAttributes} = uniqueCartProducts[productIndex];

        const price = prices.filter((price) => price.currency.label === activeCurrency);

        return (
            <CartContainer>
                <LeftContainer>
                    <Title>{brand}</Title>
                    <SubTitle>{name}</SubTitle>
                    <PriceValue>{`${price[0].currency.symbol} ${price[0].amount}`}</PriceValue>
                    <ProductAttributes
                        type='miniCart'
                        attributes={uniqueCartProducts[productIndex].attributes}
                        selectedAttributes={uniqueCartProducts[productIndex].selectedAttributes}
                    />
                </LeftContainer>
                <RightContainer>
                    <QuantityContainer>
                        <Plus
                            onClick={() =>
                                this.props.increaseQuantity(
                                    id,
                                    attributes,
                                    selectedAttributes,
                                    prices,
                                )
                            }
                        >
                            <GrAdd/>
                        </Plus>
                        <Quantity>
                            {computeQuantity(cartProducts, uniqueCartProducts[productIndex])}
                        </Quantity>
                        <Minus
                            onClick={() =>
                                this.props.decreaseQuantity(
                                    id,
                                    attributes,
                                    selectedAttributes,
                                    prices,
                                )
                            }
                        >
                            <GrSubtract/>
                        </Minus>
                    </QuantityContainer>
                    <ImageContainer>
                        <Image src={gallery[0]} alt={brand}/>
                    </ImageContainer>
                </RightContainer>
            </CartContainer>
        );
    }
}

const mapStateToProps = (state) => {
    const {activeCurrency, cartProduct} = state.productReducer;

    return {
        activeCurrency: activeCurrency,
        cartProduct: cartProduct,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseQuantity: (id, attributes, selectedAttributes, prices) =>
            dispatch(
                actions.productActions.addToCart(
                    id,
                    attributes,
                    selectedAttributes,
                    prices,
                )
            ),
        decreaseQuantity: (id, attributes, selectedAttributes, prices) =>
            dispatch(
                actions.productActions.removeFromCart(
                    id,
                    attributes,
                    selectedAttributes,
                    prices,
                )
            ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartItem)