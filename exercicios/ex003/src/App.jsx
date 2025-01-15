// Import Style
import "./App.css";

// Import UseState
import { useState } from "react";

// Import Components
import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  // const name = "Gustavo";
  const [userName] = useState("Raiany");

  const cars = [
    { id: 0, brand: "BMW", km: 9000, color: "White", newCar: false },
    { id: 1, brand: "Audi", km: 0, color: "Black", newCar: true },
    { id: 2, brand: "Mercedes", km: 8000, color: "Silver", newCar: false }
  ];

  function ShowMessage() {
    console.log("Event of the Parent Component.");
  };

  const [message, SetMessage] = useState("");

  const HandleMessage = (msg) => {
    SetMessage(msg);
  };

  return (
    <>
      <h1>React - Sections</h1>

      {/* Image in Public Folder */}
      <div>
        <img src="/img1.jpg" alt="Landscape" />
      </div>

      {/* Image in Assets Folder */}
      <div>
        <img src={City} alt="City" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />

      {/* 
      <CarDetails brand="BMW" km={9000} color="White" newCar={false} />
      <CarDetails brand="Audi" km={10000} color="Black" newCar={true} />
      <CarDetails brand="Mercedes" km={8000} color="Silver" newCar={false} />
      */}

      { cars.map((car) => (
        <CarDetails 
          key={car.id} 
          brand={car.brand} 
          km={car.km} 
          color={car.color} 
          newCar={car.newCar} 
        />
      )) }

      <Fragments propFragment="Test" />

      <Container myValue="Test 01">
        <p>This is the Container Content.</p>
      </Container>
      <Container myValue="Test 02">
        <h5>Testing the Container.</h5>
      </Container>

      <ExecuteFunction myFunction={ ShowMessage } />
      <Message msg={ message } />
      <ChangeMessageState handleMessage={ HandleMessage } />
    </>
  );
}

export default App;
