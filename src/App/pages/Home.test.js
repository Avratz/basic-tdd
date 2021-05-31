import React from 'react'
import {
	act,
	getAllByTestId,
	getByTestId,
	getNodeText,
	render,
} from '@testing-library/react'
import Home from './Home'
import api from '../server/api'

let container = null

beforeEach(async () => {
	jest.spyOn(api, 'getBook').mockImplementation(() => {
		return Promise.resolve({
			docs: [
				{ _id: '5cf5805fb53e011a64671582', name: 'The Fellowship Of The Ring' },
				{ _id: '5cf58077b53e011a64671583', name: 'The Two Towers' },
				{ _id: '5cf58080b53e011a64671584', name: 'The Return Of The King' },
			],
			total: 3,
			limit: 1000,
			offset: 0,
			page: 1,
			pages: 1,
		})
	})
	container = render(<Home />).container
	await act(async () => {})
})

it('should have at least one book', () => {
	const books = getAllByTestId(container, 'book')
	expect(books.length).toBeGreaterThan(0)
})

it('the books should have a title', () => {
	const booksTitle = getAllByTestId(container, 'book-title')
	expect(getNodeText(booksTitle[0])).toBe('The Fellowship Of The Ring')
})
