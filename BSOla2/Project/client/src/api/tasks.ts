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

/*
export const getAllTasksAPI = async (): Promise<Ticket[]> => {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to get tasks");
  }
  return response.json();
};

export const addTaskAPI = async (newTask: Ticket): Promise<Ticket> => {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  if (!response.ok) {
    throw new Error("Failed to add task");
  }
  return response.json();
};

export const deleteTaskAPI = async (deleteTaskId: string): Promise<Ticket> => {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: deleteTaskId }),
  });
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
  return response.json();
};

export const completedTaskAPI = async (
  completedTaskId: string,
  isCompleted: boolean
): Promise<Ticket> => {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: completedTaskId, isCompleted: isCompleted }),
  });
  if (!response.ok) {
    throw new Error("Failed to change completion state of task");
  }
  return response.json();
};

export const editTaskAPI = async (task: Ticket): Promise<Ticket> => {
  const response = await fetch(`${baseUrl}/tasks/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error('Failed to edit task');
  }
  return response.json();
};
*/