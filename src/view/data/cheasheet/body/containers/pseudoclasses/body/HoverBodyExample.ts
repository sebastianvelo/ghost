import GenericBodyExample from "../../../common/body/GenericBodyExample";

const HoverBodyExample = GenericBodyExample({
    classNames: [
        "w_100 w_300:hover",
        "bg_255-100-30 bg_255-100-30-50:hover",
        "decoration_underline-white:hover",
    ],
    aditionalClassName: "p_32 h_150 bg_255-100-30  border_2 txt-size_26 d_flex justify_center align-items_center txt_black",
    content: "hover!"
});

export default HoverBodyExample;