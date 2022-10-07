import GenericBodyExample from "../../common/body/GenericBodyExample";

export const TextBodyExample = (classNames: string[], tag?: string, overrideColor = true) => GenericBodyExample({
    classNames,
    tag,
    aditionalClassName: `w_400 bg_255-255-255 p_16 ${overrideColor ? "txt_black" : ""}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque, leo et ornare cursus, felis augue consectetur eros, a vestibulum libero mauris vel odio.",
});

export const TextOverflowBodyExample = (classNames: string[], tag?: string, overrideColor = true) => GenericBodyExample({
    classNames,
    tag,
    aditionalClassName: `overflow_hidden w_70 h_70 bg_255-255-255 pb_16 ${overrideColor ? "txt_black" : ""}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque, leo et ornare cursus, felis augue consectetur eros, a vestibulum libero mauris vel odio.",
});

export const TextDecorationBodyExample = (classNames: string[]) => GenericBodyExample({
    classNames,
    aditionalClassName: "w_400 bg_255-255-255 p_16 txt_black decoration-l_underline leading_loose",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque, leo et ornare cursus, felis augue consectetur eros, a vestibulum libero mauris vel odio.",
});