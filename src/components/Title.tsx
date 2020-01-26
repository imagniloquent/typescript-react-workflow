import React, { FunctionComponent } from "react";

interface Props {
    title: string;
}

const Title: FunctionComponent<Props> = ({ title }) => <h1 style={{ color: "#f9ca24" }}>{title}</h1>;

export default Title;
