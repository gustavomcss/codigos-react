// Import UseState
import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Raiany", "Gustavo", "Eros", "Pedro", "Diego"]);

    const [users, SetUsers] = useState([
        { id: 0, name: "Raiany", age: 21 },
        { id: 1, name: "Gustavo", age: 20 },
        { id: 2, name: "Eros", age: 21 },
        { id: 3, name: "Pedro", age: 20 },
        { id: 4, name: "Diego", age: 21 }
    ]);

    const DeleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * users.length);

        SetUsers((prevUsers) => {
            return prevUsers.filter((_, user) => user !== randomNumber);
        });
    };

    return (
        <div>
            <ul>
                {list.map((item, id) => (
                    <li key={ id }>{ item }</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={ user.id }>{ user.name } - { user.age } years old.</li>
                ))}
            </ul>

            <button onClick={ DeleteRandom }>Delete Random User.</button>
        </div>
    );
};

export default ListRender;
