import React, {useState} from 'react'

const ShowHide = () => {
	const [show,setShow] = useState(false);

	const showFn = () =>{
		setShow(true);
	}

	const hideFn = () =>{
		setShow(false);
	}

	return (
		<>
		<button onClick = {showFn}>Show</button>
		{show && <h2> Hidden Data</h2>}
		</>
	)
}

export default ShowHide
