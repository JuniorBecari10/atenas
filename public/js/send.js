const API_URL = "localhost:3000";

async function sendGet(endpoint) {
    try {
        const response = await axios.get(`http://${API_URL}/api/${endpoint}`);
        return response.data;
    } catch (e) {
        console.error(JSON.parse(e.request.responseText).message);
    }
}

async function sendPost(endpoint, data = {}) {
    try {
        const response = await axios.post(`http://${API_URL}/api/${endpoint}`, data);
        return { success: true, data: response.data };
    } catch (e) {
        try {
            const { message } = JSON.parse(e.request.responseText);
            alert(message);
        } catch (parseError) {
            alert("Erro: Um erro inesperado ocorreu. O servidor pode estar desligado.");
        }
        
        return { success: false, error: e.message };
    }
}
