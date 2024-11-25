export interface Option {
    name: string;
    value: string;
}

export interface IProps {
    options: Option[];
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
}