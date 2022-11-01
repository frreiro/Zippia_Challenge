export interface IJob {
	jobId: number;
	companyLogo: string;
	jobTitle: string,
	companyName: string,
	location: string,
	jobDescription: string,
}

export interface IJobsData {
	jobs: IJob[],
	remainingJobs: number;
	totalJobs: number;
}
