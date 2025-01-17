// Import Component Style
import styles from './CarDetails.module.css';

const CarDetails = ({index, brand, km, color, newCar}) => {
    return (
        <>
            <ul>
                <h2>Car [{ index }] - Details</h2>

                <li>Brand: { brand }</li>
                <li>Km: { km }</li>
                <li>Color: { color }</li>

                <li className={`${styles.special} ${ newCar ? (styles.new) : (styles.old) }`}>
                    { newCar ? (
                        <p>This Car is <b>New</b>!</p>
                    ) : (
                        <p>This Car is <b>Not New (Old)</b>!</p>
                    ) }
                </li>
            </ul>
        </>
    );
};

export default CarDetails;