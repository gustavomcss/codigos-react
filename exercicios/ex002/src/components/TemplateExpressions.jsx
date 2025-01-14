const TemplateExpressions = () => {
    const name = "Gustavo";
    const data = {
        age: 20,
        job: "Developer"
    };

    return (
        <div>
            <h1>Hello, {name}. How are you?</h1>
            <p>Your act as a {data.job} and your age is {data.age}.</p>
        </div>
    )
}

export default TemplateExpressions;
