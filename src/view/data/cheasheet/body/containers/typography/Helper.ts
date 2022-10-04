import BodyExample from "../../common/body/BodyExample";

export const TextBodyExample = (classNames: string[], tag?: string, overrideColor = true) => BodyExample({
    classNames,
    tag,
    aditionalClassName: `w_400 bg_255-255-255 p_16 ${overrideColor ? "txt_black" : ""}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque, leo et ornare cursus, felis augue consectetur eros, a vestibulum libero mauris vel odio.",
});

export const TextDecorationBodyExample = (classNames: string[]) => BodyExample({
    classNames,
    aditionalClassName: "w_400 bg_255-255-255 p_16 txt_black decoration-l_underline line-h_loose",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque, leo et ornare cursus, felis augue consectetur eros, a vestibulum libero mauris vel odio.",
});