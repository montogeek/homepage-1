import React from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Greeting from '../components/greeting'
import Logo from '../components/logo'
import css from 'next/css'

export default () => (
	<div className={container}>
		<Head>
			<title>Evil Rabbit</title>
			<link rel="shortcut icon" href="static/favicon.png" />
			<meta name="viewport" content="initial-scale=1.0" />
			<meta name="theme-color" content="black" />
		</Head>
		<Navbar />
		<Greeting />
	  <Logo />
	</div>
)

css.insertRule('html, body { background: black }')

let fadeIn = css.keyframes({ 
  from: { opacity: 0 },
  to: { opacity: 1 }
})

let container = css({
	animation: `${fadeIn} 3s`,
	position: 'absolute',
	overflow: 'hidden',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	color: 'white',
	fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
})
