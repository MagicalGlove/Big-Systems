import {Ticket} from "../types/ticket";
import {Warehouse} from "../types/warehouse";

const baseUrl = "http://localhost:3001";

export const postTicketAPI = async (newTicket: Ticket) => {
    const response = await fetch(`${baseUrl}/jobs`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newTicket)
    });
    if (!response.ok) {
        throw new Error("Ticket failed");
    }
}

export const getJobs = async (): Promise<Ticket[]> => {
    const response = await fetch(`${baseUrl}/jobs`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    if (!response.ok) {
        throw new Error("Failed to get tickets");
    }
    return response.json();
}

export const getWarehouses = async (): Promise<Warehouse[]> => {
    const response = await fetch(`${baseUrl}/warehouses`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    if (!response.ok) {
        throw new Error("Failed to get warehouses");
    }
    return response.json();
}