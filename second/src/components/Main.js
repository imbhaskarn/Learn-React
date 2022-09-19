import React, { useEffect, useState } from "react";
import apiUrl from "../utils/getDogImage";
import axios from "axios";

const DogImage = () => {
	const [val, setVal] = useState();
	const getImage = async () => {
		const { data } = await axios.get(apiUrl);
		setVal(data.message);
	};

	useEffect(() => {
		getImage();
	}, []);
	return (
		<div >
			<img src={val} loading='lazy' alt='dog breed' />
		</div>
	);
};

const Main = () => {
	return <DogImage />;
};

export default Main;
