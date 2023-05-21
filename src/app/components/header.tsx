type Props = {
    label: string;
};

export function Header({ label }: Props) {
    return (
        <h1 className={"text-5xl font-extrabold"}>{label}</h1>
    );
}
