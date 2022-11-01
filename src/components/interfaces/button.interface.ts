import { IJob } from "./jobs.interfaces.js";

export interface IFilterButton {
	jobs: IJob[]
	filterParam(filterParam: string): void;
}