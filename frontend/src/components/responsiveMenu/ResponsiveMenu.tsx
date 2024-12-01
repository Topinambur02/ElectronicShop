import { Link } from "react-router-dom";

interface IProps {
    className: string;
}

const ResponsiveMenu = ({ className }: IProps) => {
    return (
        <div className={className}>
            <Link to="/catalog">Каталог</Link>
            <Link to="/stock">Акции</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/about">О нас</Link>
        </div>
    );
};

export default ResponsiveMenu;