import {useEffect, useState} from "react";
import "./App.css";

const App = () => {
    const [warehouseA, setWarehouseA] = useState<string>("0");
    const [warehouseB, setWarehouseB] = useState<string>("0");
    const [warehouseC, setWarehouseC] = useState<string>("0");
    const [amount, setAmount] = useState<string>("0");
    const [name, setName] = useState<string>("")

    const handleAmountChange = (event: string) => {
        const result = event.replace(/\D/g, "")

        setAmount(result);
    }

    const handleNameChange = (event: string) => {
        setName(event)
    }

    const handleDelivery = () => {

    }

    const handlePickup = () => {
    }

    return (
        <div className="App">
            <div className="container" style={{backgroundColor: "aliceblue"}}>
                <div className="header" style={{marginBottom: "20px"}}>
                    <div className="warehouses">
                        <div className="single">
                            <h1 style={{textAlign: "center"}}>A</h1>
                            <h2 style={{textAlign: "center"}}>{warehouseA} / 50</h2>
                        </div>
                        <div className="single">
                            <h1 style={{textAlign: "center"}}>B</h1>
                            <h2 style={{textAlign: "center"}}>{warehouseB} / 50</h2>
                        </div>
                        <div className="single">
                            <h1 style={{textAlign: "center"}}>C</h1>
                            <h2 style={{textAlign: "center"}}>{warehouseC} / 50</h2>
                        </div>
                    </div>
                </div>
                <div className="ticket" style={{backgroundColor: "mediumseagreen"}}>
                    <h1 className="warehouses">Ticket Details</h1>
                    <div style={{display: "flex", margin: "auto", marginLeft: "20px", marginRight: "20px"}}>
                        <div style={{marginRight: "50px"}}>
                            <h2>Warehouse Name:</h2>
                            <input
                                type="text"
                                id="warehouseName"
                                placeholder="Warehouse Name"
                                value={name}
                                onChange={(event) => handleNameChange(event.target.value)}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <h2>Chemical Amount:</h2>
                            <input
                                type="text"
                                id="chemicalAmount"
                                placeholder="Amount"
                                value={amount}
                                onChange={(event) => handleAmountChange(event.target.value)}
                                className="input-field"
                            />
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginLeft: "50px",
                        marginRight: "50px",
                        alignContent: "center",
                    }}>
                        <button
                            style={{
                                backgroundColor: "lightblue",
                                borderRadius: "8px",
                                width: "100px",
                                height: "30px",
                                margin: "auto"
                            }}
                            className="delivery-button"
                            onClick={handleDelivery}>
                            Delivery
                        </button>
                        <button
                            style={{
                                backgroundColor: "pink",
                                borderRadius: "8px",
                                width: "100px",
                                height: "30px",
                                margin: "auto"
                            }}
                            className="pickup-button"
                            onClick={handlePickup}>
                            Pickup
                        </button>
                    </div>
                </div>
                <div className="history">
                </div>
            </div>
        </div>
    );
};

export default App;
