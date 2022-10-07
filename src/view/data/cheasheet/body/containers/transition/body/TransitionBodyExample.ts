import GenericBodyExample from "../../../common/body/GenericBodyExample";

const genericAditionalClassName = (more?: string) =>
    `txt_white txt-size_26 bg_secondary p_32 w_150 h_150 border_2 d_flex justify_center align-items_center ${more ?? ""}`;

export const TransitionBodyExample =  GenericBodyExample({
    classNames: [
        "transition_width-500-ease-in",
        "transition_height-500-ease-out",
        "transition_background-500-ease-in-out",
        "transition_all-500-ease-in-out",
    ],
    aditionalClassName: genericAditionalClassName("w_100 w_300:hover h_175:hover bg_primary:hover txt_secondary:hover"),
    content: "hover!"
});

export const TransitionDurationBodyExample = GenericBodyExample({
    classNames: [
        "duration_250 transition-p_colors",
        "duration_500 transition-p_colors",
        "duration_1000 transition-p_colors",
    ],
    aditionalClassName: genericAditionalClassName("w_100 bg_primary:hover txt_black:hover timing-function_ease-linear"),
    content: "hover!"
});

export const TransitionTimingFunctionBodyExample = GenericBodyExample({
    classNames: [
        "timing-function_ease-linear transition-p_width",
        "timing-function_ease-in transition-p_width",
        "timing-function_ease-out transition-p_width",
        "timing-function_ease-in-out transition-p_width",
    ],
    aditionalClassName: genericAditionalClassName("w_100 w_300:hover duration_500"),
    content: "hover!"
});
 
export const TransitionDelayBodyExample = GenericBodyExample({
    classNames: [
        "delay_250 transition-p_width",
        "delay_500 transition-p_width",
        "delay_1000 transition-p_width",
    ],
    aditionalClassName: genericAditionalClassName("w_100 w_300:hover timing-function_ease-out duration_500"),
    content: "hover!"
});