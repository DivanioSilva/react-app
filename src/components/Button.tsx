
interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger';
    //making this property optional with question mark
    //'primary' | 'secondary' | 'danger' -> these approach will force for this variable to accept only these values that are already set
    onClick: () => void;
}

const Button = ({children, onClick, color = 'primary'} : Props) => {
    return (
        <button type="button" className={"btn btn-"+color} onClick={onClick}>{children}</button>
    )
}

export default Button
