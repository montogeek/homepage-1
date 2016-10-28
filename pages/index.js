import React from 'react'
import Logo from '../components/logo'
import Head from 'next/head'
import css from 'next/css'

export default () => (
	<div className={container}>
		<Head>
			<title>Evil Rabbit</title>
			<link rel="shortcut icon" href="static/favicon.png" />
			<meta name="viewport" content="initial-scale=1.0" />
			<meta name="theme-color" content="black" />
		</Head>
		<div className={navbar}>
			<a href="https://twitter.com/evilrabbit_">Twitter</a>
			<a href="https://dribbble.com/evilrabbit">Dribble</a>
			<a href="https://github.com/evilrabbit">Github</a>
		</div>
		<div className={title}>
			<h1 className={h1}>Hi, I'm<br /><span>Evil Rabbit</span></h1>
			<h2>Designer from Buenos Aires</h2>
		</div>
	  <Logo />
	</div>
)

css.insertRule('html, body { background: black }')

let container = css({
	position: 'absolute',
	overflow: 'hidden',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	color: 'white',
	fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
})

let title = css.merge(
	{
		position: 'absolute',
		textAlign: 'center',
		top: '34%',
		width: '100%'
	},
	css.media('(max-width: 500px)', {
		top: '40%'
	}),
	css.$(' h2', {
		fontSize: '18px',
		fontWeight: 100,
		margin: 0
	})
)

let h1 = css.merge(
	{
		fontSize: '100px',
		fontWeight: 100,
		margin: '0 0 20px 0',
	},
	css.media('(max-width: 500px)', {
		fontSize: '50px'
	}),
	css.$(' span', {
		fontWeight: 500
	})
)

let navbar = css.merge(
	{
		textAlign: 'center',
		fontSize: '15px',
		paddingTop: '40px'
	},
	css.$(' a', {
		color: 'white',
		display: 'inline-block',
		margin: '0 10px',
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
