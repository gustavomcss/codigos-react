const Challenge = () => {
    const number1 = 10;
    const number2 = 15;

    const HandleCalculateSum = (number1, number2) => {
        document.getElementsByClassName("result")[0].innerHTML = `${number1} + ${number2} = ${number1 + number2}`;
    }

    return (
        <div>
            <p className="result">{number1} + {number2} = ?</p>
            <button onClick={ () => HandleCalculateSum(number1, number2) }>Click Here to Sum!</button>
        </div>
    )
}

export default Challenge;
