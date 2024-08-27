import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";


function App() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Lisbon',
        'Rome'
    ];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    const [alertVisible, setAlertVisible] = useState(false)

    return (
        <div>
            {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
            <Button onClick={() => setAlertVisible(true)}>My button</Button>
        </div>
    );
}

export default App;
