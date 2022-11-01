import { useRef, useState } from "react"
import Dropdown from "rc-dropdown"

import {Container, DropItem, DropMenu} from "../styles/Jobs/Button"
import { SelectEventHandler } from "rc-menu/lib/interface.js";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { IFilterButton } from "./interfaces/button.interface.js";
import Menu, { Item as MenuItem } from 'rc-menu';




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
				//placement={"bottomLeft"}
				//getPopupContainer={() => ContainerRef.current ? Containe;rRef.current : document.body}

				
			>
			<Container>
				<h1>Order by name</h1>
				{
					isDropDownVisible ? <IoChevronUpOutline className="arrow"/> : <IoChevronDownOutline className="arrow"/>
				}
				
			</Container>
		</Dropdown>
	)
}

export default FilterButton