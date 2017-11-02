import * as React from 'react'
import { render } from 'react-dom'
import { CSSProperties,  Button } from 'glamorous';

function App() {
	return (
		<div>
			<Button css={ buttonStyle } onClick={() => console.log('Hello World')} >
				File error
			</Button>
		</div>
	)
}

const buttonStyle: CSSProperties = {
	padding: '0.5em 2em',
	borderRadius: '100em',
	fontSize: '1.5em',
	
	':focus': {
		outline: 0,
	},
	
};

render(<App />, document.getElementById('root'))
