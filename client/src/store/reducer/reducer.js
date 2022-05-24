import _ from 'lodash'
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHECK_OUT,
    SELECTED_ATTRIBUTES,
    SWITCH_CURRENCY,
    CART_TOGGLE
} from "../../utils/consts";

const reducer = (
    state = {
        cartProducts: JSON.parse(localStorage.getItem("cartProducts")) || [],
        isMiniCartOpen: false,
        activeCurrency: "USD",
        selectedAttributes: null,
    },
    action
) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addProduct = {
                ...state,
                cartProducts: [...state.cartProducts, action.payload],
            };
            localStorage.setItem(
                "cartProducts",
                JSON.stringify(addProduct.cartProducts)
            )
            return addProduct;

        case REMOVE_FROM_CART:
            state.cartProducts.reverse()
            const index = _.findIndex(state.cartProducts, (element) =>
                _.isEqual(element, action.payload)
            );
            state.cartProducts.splice(index, 1)
            const removeProduct = {
                ...state,
                cartProducts: [...state.cartProducts.reverse()]
            };
            localStorage.setItem(
                "cartProducts",
                JSON.stringify(removeProduct.cartProducts)
            );
            return removeProduct;

        case CART_TOGGLE:
            return {
                ...state,
                isMiniCartOpen: !state.isMiniCartOpen
            }

        case SWITCH_CURRENCY:
            return {
                ...state,
                activeCurrency: action.payload,
            }

        case SELECTED_ATTRIBUTES:
            return {
                ...state,
                selectedAttributes: action.payload,
            }

        case CHECK_OUT:
            return {
                ...state,
                cartProducts: action.payload,
            }

        default:
            return state;

    }
}

export default reducer;