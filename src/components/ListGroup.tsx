import {useState} from "react";

interface Props {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: Props) {

    //state Hook
    const [selectedIndex, setSeletedIndex] = useState(-1)
    const message = items.length === 0 && <p>No item found</p>

    return (
        <>
            <h1>{heading}</h1>
            {message}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? 'list-group-item active'
                                : 'list-group-item'
                        }
                        key={item}
                        onClick={() => {
                            setSeletedIndex(index)
                        }}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
