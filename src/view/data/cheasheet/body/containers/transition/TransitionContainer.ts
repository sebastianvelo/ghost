import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { TransitionTransformer, TransitionPropertyTransformer, TransitionMsTransformer, TransitionTimingFunctionTransformer } from "../../../../../../lib/utility/utilities/transition/transformers";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/RowsContainer";
import { TransitionBodyExample, TransitionDelayBodyExample, TransitionDurationBodyExample, TransitionTimingFunctionBodyExample } from "./body/TransitionBodyExample";
import { TransitionPropertySuffixes, TransitionTimingFunctionSuffixes } from "./Suffixes";

const Transition: RowProps = {
    header: {
        cssProperties: [PropertyCSS.TRANSITION],
        prefix: GhostPrefix.TRANSITION,
        possibleSuffixes: ["property-duration?-timingFunction?"],
        example: { suffix: TransitionPropertySuffixes[0], transformer: TransitionTransformer },
    },
    body: TransitionBodyExample
};

const TransitionProperty: RowProps = {
    header: {
        cssProperties: [PropertyCSS.TRANSITION_PROPERTY],
        prefix: GhostPrefix.TRANSITION_PROPERTY,
        possibleSuffixes: [...TransitionPropertySuffixes, "anyProperty"],
        example: { suffix: TransitionPropertySuffixes[1], transformer: TransitionPropertyTransformer },
    },
};

const TransitionDurationProperty: RowProps = {
    header: {
        cssProperties: [PropertyCSS.TRANSITION_DURATION],
        prefix: GhostPrefix.TRANSITION_DURATION,
        possibleSuffixes: [`number`],
        example: { suffix: "30", transformer: TransitionMsTransformer },
    },
    body: TransitionDurationBodyExample
};

const TransitionDelayProperty: RowProps = {
    header: {
        cssProperties: [PropertyCSS.TRANSITION_DELAY],
        prefix: GhostPrefix.TRANSITION_DELAY,
        possibleSuffixes: [`number`],
        example: { suffix: "30", transformer: TransitionMsTransformer },
    },
    body: TransitionDelayBodyExample
};

const TransitionTimingFunctionProperty: RowProps = {
    header: {
        cssProperties: [PropertyCSS.TRANSITION_TIMING_FUNCTION],
        prefix: GhostPrefix.TRANSITION_TIMING_FUNCTION,
        possibleSuffixes: TransitionTimingFunctionSuffixes,
        example: { suffix: TransitionTimingFunctionSuffixes[1], transformer: TransitionTimingFunctionTransformer },
    },
    body: TransitionTimingFunctionBodyExample
};


const TransitionContainer: RowsContainersProps = {
    title: "Transition",
    rows: [
        Transition,
        TransitionProperty,
        TransitionDurationProperty,
        TransitionTimingFunctionProperty,
        TransitionDelayProperty,
    ]
};

export default TransitionContainer;