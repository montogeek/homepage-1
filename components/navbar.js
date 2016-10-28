import React from 'react'
import css from 'next/css'

export default class extends React.Component {
  render () {
    return (
			<div className={container}>
				<a href="https://github.com/evilrabbit">Github</a>
				<a href="https://dribbble.com/evilrabbit">Dribble</a>
				<a href="https://twitter.com/evilrabbit_">Twitter</a>
			</div>
		)
	}
}

let container = css.merge(
	{
		textAlign: 'center',
		fontSize: '15px',
		paddingTop: '40px'
	},
	css.$(' a', {
		color: 'white',
		display: 'inline-block',
		margin: '0 20px',
		position: 'relative',
		textDecoration: 'none',
	}),
	css.$(' a:after', {
		content: '""',
		height: '1px',
		background: 'white',
		position: 'absolute',
		pointerEvents: 'none',
		bottom: '-5px',
		left: 0,
		right: 0,
		opacity: 0,
		transform: 'scale(0, 1)',
		transition: 'all 200ms'
	}),
	css.$(' a:hover:after', {
		opacity: 1,
		transform: 'scale(1, 1)'
	})
)
