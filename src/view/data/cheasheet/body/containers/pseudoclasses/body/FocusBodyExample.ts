import GenericBodyExample from "../../../common/body/GenericBodyExample";

const FocusBodyExample = GenericBodyExample({
    classNames: [
        "w_100 w_300:focus",
        "bg_255-100-30 bg_255-100-30-50:focus",
        "bg_255-255-255-50:focus",
    ],
    aditionalClassName: "p_16",
    tag: "input"
});

export default FocusBodyExample;