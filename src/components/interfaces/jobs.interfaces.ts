export interface IJob {
	jobId: number;
	companyLogo: string;
	jobTitle: string,
	companyName: string,
	location: string,
	jobDescription: string,
	companyID: number;
}

export interface IJobsData {
	jobs: IJob[],
	remainingJobs: number;
	totalJobs: number;
}
