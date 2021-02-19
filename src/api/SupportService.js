export default (HttpClient) => ({
    createTicket(info) {
        HttpClient.post('/create-ticket', info)
    }
});
