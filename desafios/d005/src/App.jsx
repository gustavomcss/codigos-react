// Import Style
import './App.css';

// Import Components
import CarDetails from './components/CarDetails';

function App() {
    const cars = [
        { id: 1, brand: "BMW", km: 9000, color: "White", newCar: false },
        { id: 2, brand: "Audi", km: 0, color: "Black", newCar: true },
        { id: 3, brand: "Mercedes", km: 8000, color: "Silver", newCar: false }
    ];

    return (
        <>
            <h1>React - Challenge 05</h1>

            { cars.map((car) => (
                <CarDetails 
                    key={ car.id }
                    index={ car.id}
                    brand={ car.brand }
                    km={ car.km }
                    color={ car.color }
                    newCar={ car.newCar }
                />
            )) }
        </>
    );
}

export default App;
