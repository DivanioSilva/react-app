import {useState} from "react";

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Lisbon'
    ];

    //state Hook
    const [selectedIndex, setSeletedIndex] = useState(-1)
    const message = items.length === 0 && <p>No item found</p>

    return (
        <>
            <h1>List</h1>
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
