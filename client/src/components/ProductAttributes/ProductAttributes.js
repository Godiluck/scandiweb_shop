import React, {Component} from 'react';
import {
    AttributeInnerDiv,
    AttributeName,
    AttributeOuterDiv,
    Attributes, AttributesDiv,
    AttributeSwatchDiv, AttributeValue
} from "./ProductAttributes.styles";
import actions from "../../store/actions/index";
import {connect} from "react-redux";

class ProductAttributes extends Component {
    constructor(props) {
        super(props);
        this.state = {...this.props.initialAttributes};

        const {selectedAttributesHandler, type} = this.props;
        if (type === 'singleProduct') selectedAttributesHandler(this.state);
    }

    attributesClickHandler = async (name, value) => {
        await this.setState({[name]: value});

        const {selectedAttributesHandler} = this.props;
        selectedAttributesHandler(this.state);
    };

    render() {
        const {attributes, selectedAttributes, type} = this.props;
        return (
            <AttributesDiv type={type}>
                {attributes.map((attribute, index) => (
                    <Attributes key={index} type={type}>
                        <AttributeName
                            className={type === 'singleProduct' && 'miniCartAttributeNames'}
                            type={type}
                        >
                            {`${attribute.name} :`}
                        </AttributeName>
                        {attribute.type === 'swatch' ? (
                            <AttributeOuterDiv type={type}>
                                {attribute.items.map((item, index) => (
                                    <AttributeSwatchDiv
                                        type={type}
                                        key={index}
                                        colorHex={item.value}
                                        onClick={() =>
                                            type === 'singleProduct' ?
                                                this.attributesClickHandler(attribute.name, item.value)
                                                :
                                                null
                                        }
                                        active={
                                            type === 'singleProduct' ?
                                                this.state[attribute.name] !== item.value
                                                :
                                                selectedAttributes[attribute.name] !== item.value
                                        }
                                    />
                                ))}
                            </AttributeOuterDiv>
                        ) : (
                            <AttributeOuterDiv type={type}>
                                {attribute.items.map((item, index) => (
                                    <AttributeInnerDiv
                                        type={type}
                                        key={index}
                                        onClick={() =>
                                            type === 'singleProduct'
                                                ? this.attributesClickHandler(attribute.name, item.value)
                                                : null
                                        }
                                        active={
                                            type === "singleProduct"
                                                ? this.state[attribute.name] === item.value
                                                : selectedAttributes[attribute.name] === item.value
                                        }
                                    >
                                        <AttributeValue type={type}>
                                            {item.value}
                                        </AttributeValue>
                                    </AttributeInnerDiv>
                                ))}
                            </AttributeOuterDiv>
                        )}
                    </Attributes>
                ))}
            </AttributesDiv>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectedAttributesHandler: (selectedAttributes) =>
            dispatch(
                actions.productActions.selectedAttributesHandler(selectedAttributes)
            ),
    };
};
export default connect(null, mapDispatchToProps)(ProductAttributes);