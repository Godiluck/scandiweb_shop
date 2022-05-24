import {
    ADD_TO_CART,
    CART_TOGGLE,
    CHECK_OUT,
    REMOVE_FROM_CART,
    SELECTED_ATTRIBUTES,
    SWITCH_CURRENCY
} from "../../utils/consts";

const addToCart = (id, attributes, selectedAttributes, price) => {
    const action = {
        type: ADD_TO_CART,
        payload: {
            id: id,
            attributes: attributes,
            selectedAttributes: selectedAttributes,
            price: price,
        }
    }
    return action;
};

const removeFromCart = (id, attributes, selectedAttributes, price) => {
    const action = {
        type: REMOVE_FROM_CART,
        payload: {
            id: id,
            attributes: attributes,
            selectedAttributes: selectedAttributes,
            price: price,
        }
    }
    return action;
};

const miniCartToggler = () => {
    const action = {
        type: CART_TOGGLE,
    }
    return action;
}

const currencySwitcher = (currency) => {
    const action = {
        type: SWITCH_CURRENCY,
        payload: currency,
    }
    return action;
}

const selectedAttributesHandler = (selectedAttributes) => {
    const action = {
        type: SELECTED_ATTRIBUTES,
        payload: selectedAttributes,
    };
    return action;
}

const checkOut = () => {
    const action = {
        type: CHECK_OUT,
        payload: [],
    }
    return action;
}

export const productActions = {
    addToCart,
    removeFromCart,
    miniCartToggler,
    currencySwitcher,
    selectedAttributesHandler,
    checkOut,
}

export default productActions;