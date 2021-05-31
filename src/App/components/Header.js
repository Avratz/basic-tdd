import React from 'react'

function Header() {
	return (
		<header>
			<h1 data-testid='logo'>Logo</h1>
			<form data-testid='search'>
				<input type='text' />
			</form>
			<nav data-testid='menu'>
				<a>Home</a>
			</nav>
		</header>
	)
}

export default Header
