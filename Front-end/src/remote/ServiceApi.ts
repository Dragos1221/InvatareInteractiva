import axios, { AxiosInstance } from 'axios';
// eslint-disable-next-line @typescript-eslint/naming-convention

class ServiceApi {
		private instance: AxiosInstance;
		private authInstance: AxiosInstance | undefined;
		constructor() {
			this.instance = axios.create({
				baseURL: "http://localhost:3123"
			});
		}

		async loginRequest(body: any) {
			return this.instance.post('/login', {username:body.email, ...body});
		}

		async registerRequest(body: any) {
			return this.instance.post('/register', body);
		}

		async getResukts( id:any) {
			return this.instance.get(`/results/${id}`);
		}

		async updateResults(body:any, id:any) {
			return this.instance.post(`/results/${id}`,body);
		}
}
export default ServiceApi;