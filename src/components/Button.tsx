import {useState } from "react"
import Dropdown from "rc-dropdown"

import {Container, DropItem, DropMenu} from "../styles/Jobs/Button"
import { SelectEventHandler } from "rc-menu/lib/interface.js";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { IFilterButton } from "./interfaces/button.interface.js";



/*
	FilterButton is the component that allows you to filter the job list by company name.
		- Was used the rc-dropdown library to create the dropdown list
		- Was used the react-icons library to implement the icons
		- Only receive one jobs prop, and its a list of jobs

	State and functions: 
		- isDropDownVisible -> State that determines is the dropdown list is visible or not
		- onSelect -> function that is called when one dropdown item is selected
		- onVisibleChange -> function that is called when the dropdown list visible is changed
	
	Inside the DropMenu, the jobs list is filtered removing all duplicated companies names, and returned as DropItem
*/
const FilterButton: React.FC<IFilterButton> = ({jobs, filterParam}) => {
	const [isDropDownVisible, setIsDropDownVisible] = useState(false);

	const onSelect: SelectEventHandler = ({key}) => {
		filterParam(key)
	  }

	const onVisibleChange = (visible: boolean) =>  {
		setIsDropDownVisible(visible)
	}

	const menuCallback = () => (
		<DropMenu onSelect={onSelect}>
			<DropItem key={"All"}>
				<h1>All</h1>
			</DropItem>
			{
			 jobs.filter((job) => {
					const set = new Set();
					if(!set.has(job.companyName)){
						set.add(job.companyName)
						return true;
					} 
					else return false
				}).map(job => {
					return (
					<DropItem key={job.companyName}>
					<h1>{job.companyName}</h1>
					</DropItem>
					)
				})
			}
		</DropMenu>
	  );

	return(
		<Dropdown
				trigger={['click']}
				animation="slide-up"
				overlay={menuCallback}
				onVisibleChange={onVisibleChange}
			>
			<Container>
				<h1>filter company</h1>
				{
					isDropDownVisible ? <IoChevronUpOutline className="arrow"/> : <IoChevronDownOutline className="arrow"/>
				}
				
			</Container>
		</Dropdown>
	)
}

export default FilterButton