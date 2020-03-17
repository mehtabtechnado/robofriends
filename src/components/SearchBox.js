import React from 'react';

const SearchBox = ({ SEARCHFIELD, searchChange}) => {
	return(
		<div className="pa2">
			<input 
			className="pa3 ba b--green bg-lightest-blue"
			type="seach" 
			placeholder="Seach Robots" 
			onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;