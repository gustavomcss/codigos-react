// Import Page Style
import './Info.css';

// Import React
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Info = () => {
    const url = `http://localhost:5174/products`;

    const {id} = useParams();

    const {data, loading, error} = useFetch(`${url}/${id}`);

    return (
        <>
            <div className="Info">
                {data &&
                    <div className="item">
                        <h1>{data.name}</h1>
                        <h2>More Information Here</h2>
                    </div>
                }
            </div>
        </>
    );
};

export default Info;