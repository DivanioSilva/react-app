import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";


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
            <Alert>
                Hello <span>World</span>
            </Alert>
        </div>
    );
}

export default App;
