import React, { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

const MyComponent = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchDataFromRust();
	}, []);

	const fetchDataFromRust = async () => {
		try {
			const result = await invoke('get_data_from_rust');
			console.log(result);
			setData(result);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			{data ? (
				<div>
					<p>Name: {data.name}</p>
					<p>Age: {data.age}</p>
				</div>
			) : (
				<p>Loading data...</p>
			)}
		</div>
	);
};

export default MyComponent;
