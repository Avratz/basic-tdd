import React from 'react'
import { getByTestId, render } from '@testing-library/react'
import Header from './Header'

let container = null

beforeEach(() => {
	container = render(<Header />).container
})

it('should show the logo', () => {
	expect(getByTestId(container, 'logo')).toBeTruthy()
})

it('should show the search', () => {
	expect(getByTestId(container, 'search')).toBeTruthy()
})

it('should show the menu', () => {
	expect(getByTestId(container, 'menu')).toBeTruthy()
})
