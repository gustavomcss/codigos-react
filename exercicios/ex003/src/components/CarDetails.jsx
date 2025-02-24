const CarDetails = ({brand, km, color, newCar}) => {
    return (
        <div>
            <h2>Car Details</h2>
            <ul>
                <li>Brand: { brand }.</li>
                <li>Km: { km }.</li>
                <li>Color: { color }.</li>
                <li>
                    { newCar === true ? (
                        <p>This car is new!</p>
                    ) : (
                        <p>This car is used!</p>
                    )}
                </li>
            </ul>

        </div>
    );
};

export default CarDetails;