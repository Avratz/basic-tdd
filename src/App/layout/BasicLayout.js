import React from 'react'
import Header from '../components/Header'

function BasicLayout({ children }) {
	return (
		<React.Fragment>
			<Header />
			<main>{children}</main>
		</React.Fragment>
	)
}

export default BasicLayout
