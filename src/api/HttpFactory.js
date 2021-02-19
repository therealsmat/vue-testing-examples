import SupportService from './SupportService';

const HttpFactory = (HttpClient) => ({
    support: SupportService(HttpClient) 
});

export default HttpFactory;
