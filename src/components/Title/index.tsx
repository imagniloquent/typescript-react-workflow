import { h, FunctionalComponent as FC } from "preact";

interface Props {
    title: string;
}

const Title: FC<Props> = ({ title }: Props) => <h1>{title}</h1>;

export default Title;
