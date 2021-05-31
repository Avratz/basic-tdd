import React from 'react'
import api from '../server/api'
export default function Home() {
	const [books, setBooks] = React.useState([])

	React.useEffect(() => {
		async function fectchBooks() {
			const res = await api.getBook()
			setBooks(res.docs)
		}
		fectchBooks()
	}, [])

	return (
		<div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
			{books.map((book) => (
				<div
					data-testid='book'
					key={book._id}
					style={{ width: 300, height: 300, textAlign: 'center' }}
				>
					<h2 data-testid='book-title'>{book.name}</h2>
				</div>
			))}
		</div>
	)
}
