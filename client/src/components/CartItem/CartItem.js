import React, {Component} from 'react';
import {
    Arrow, ArrowContainer,
    CartContainer, Image, ImageContainer,
    LeftContainer, Minus, Plus,
    PriceValue, Quantity,
    QuantityContainer,
    RightContainer,
    SubTitle,
    Title
} from "./CartItem.styles";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
//import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import {GrAdd, GrSubtract} from 'react-icons/gr'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {computeQuantity} from "../../utils/utils";
import actions from "../../store/actions/index";
import {connect} from "react-redux";

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
        };
    }

    carouselClickHandler = (dir) => {
        if (dir === 'right') {
            if (this.state.currentImage === this.props.product.gallery.length - 1) {
                this.setState({currentImage: 0});
            } else {
                this.setState({currentImage: this.state.currentImage + 1});
            }
        } else {
            if (this.state.currentImage === 0) {
                this.setState({currentImage: this.props.product.gallery.length - 1})
            } else {
                this.setState({currentImage: this.state.currentImage - 1})
            }
        }
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
                    <PriceValue>{`${price[0].currency.symbol} ${price[0].amount.toFixed(2)}`}</PriceValue>
                    <ProductAttributes
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
                            prices
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
                                    prices
                                )
                            }
                        >
                            <GrSubtract/>
                        </Minus>
                    </QuantityContainer>
                    <ImageContainer>
                        <Image src={gallery[this.state.currentImage]} alt={brand}/>
                        {gallery.length > 1 && (
                            <ArrowContainer>
                                <Arrow
                            direction='left'
                            onClick={() => this.carouselClickHandler('left')}
                            >
                                <MdKeyboardArrowLeft/>
                            </Arrow>
                                <Arrow
                                direction='right'
                                onClick={() => this.carouselClickHandler('right')}
                            >
                                <MdKeyboardArrowRight/>
                            </Arrow>
                            </ArrowContainer>
                        )}
                    </ImageContainer>
                </RightContainer>
            </CartContainer>
        );
    }
}

const mapStateToProps = (state) => {
    const {cartProducts, activeCurrency} = state.productReducer;
    return {
        cartProducts: cartProducts,
        activeCurrency: activeCurrency,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseQuantity: (id, attributes, selectedAttributes, prices) =>
            dispatch(actions.productActions.addToCart(id, attributes, selectedAttributes, prices)),
        decreaseQuantity: (id, attributes, selectedAttributes, prices) =>
            dispatch(actions.productActions.removeFromCart(id, attributes, selectedAttributes, prices)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);