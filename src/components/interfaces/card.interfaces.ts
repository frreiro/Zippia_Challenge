import { IJob } from "./jobs.interfaces";

export interface ICard {
	job: IJob
	largeCard?: boolean
	setLargeCard? : (IJob: IJob) => void
	isSelected: boolean
}