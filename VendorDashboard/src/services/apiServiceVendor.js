const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your Spring Boot base URL

export const fetchProfile = async () => {
    const response = await fetch(`${API_BASE_URL}/profile`);
    if (!response.ok) throw new Error('Failed to fetch profile');
    return response.json();
};

export const fetchRequests = async () => {
    const response = await fetch(`${API_BASE_URL}/requests`);
    if (!response.ok) throw new Error('Failed to fetch requests');
    return response.json();
};

export const fetchQuotations = async () => {
    const response = await fetch(`${API_BASE_URL}/quotations`);
    if (!response.ok) throw new Error('Failed to fetch quotations');
    return response.json();
};

export const fetchOrders = async () => {
    const response = await fetch(`${API_BASE_URL}/orders`);
    if (!response.ok) throw new Error('Failed to fetch orders');
    return response.json();
};
