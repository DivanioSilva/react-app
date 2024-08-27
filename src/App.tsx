import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";


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

    return (
        <div>
            <Button onClick={() => console.log("clicked")}>My button</Button>
        </div>
    );
}

export default App;
