import React from "react";
import Element = React.JSX.Element;

interface Props {
    children: React.ReactNode;
}

export default function ({
                             children
                         }: Props): Element {

    return (
        <button>
            {children}
        </button>
    );

};