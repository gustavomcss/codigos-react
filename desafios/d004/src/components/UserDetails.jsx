const UserDetails = ({index, name, age, occupation}) => {
    return (
        <>
            <h2>User { index } - Details</h2>
            <ul>
                <li>Name: { name }</li>
                <li>Age: { age }</li>
                <li>Occupation: { occupation }</li>
                <li>
                    { age >= 18 ? (
                        <p><b>Allowed</b> to get Driver's License.</p>
                    ) : (
                        <p><b>Not Allowed</b> to get Driver's License.</p>
                    ) }
                </li>
            </ul>
        </>
    );
}

export default UserDetails;