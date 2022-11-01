import axios, { AxiosResponse } from "axios"
import { IJobsData } from "../components/interfaces/jobs.interfaces.js"


const API_URL = "https://www.zippia.com/api/jobs/"
const REQUEST_BODY ={
					"companySkills": true,
					"dismissedListingHashes": [],
					"fetchJobDesc": true,
					"jobTitle": "Business Analyst",
					"locations": [],
					"numJobs": 20,
					"previousListingHashes": []
					}



export const fechJobs = async (): Promise<AxiosResponse<IJobsData>> => {
	return await axios.post(API_URL, REQUEST_BODY);
}
