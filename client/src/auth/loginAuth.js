import axios from 'axios'

const sendData = async (data) => {
    const dataToSend = {key:'value'};
    try{
        const response = await axios.post('.../server/src/index',dataToSend);
        console.log('Response from server:', response.data);

    }catch (error) {
        console.error('Error sending data:', error);
} }