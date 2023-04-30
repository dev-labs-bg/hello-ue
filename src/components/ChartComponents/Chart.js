import { useState, useEffect } from 'react'
import { ResponsivePie } from '@nivo/pie'

const Chart = ({ data /* see data tab */ }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	const getLegendOrientation = () => {
		if (windowWidth < 490) {
			return 'column'
		} else {
			return 'row'
		}
	}

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const data2 = [
		{
			id: 'Ongoing',
			label: 'Ongoing',
			value: 540,
			color: 'hsl(334, 70%, 50%)',
		},
		{
			id: 'erlang',
			label: 'erlang',
			value: 255,
			color: 'hsl(174, 70%, 50%)',
		},
		{
			id: 'lisp',
			label: 'lisp',
			value: 380,
			color: 'hsl(24, 70%, 50%)',
		},
		{
			id: 'sass',
			label: 'sass',
			value: 119,
			color: 'hsl(274, 70%, 50%)',
		},
		{
			id: 'rust',
			label: 'rust',
			value: 424,
			color: 'hsl(229, 70%, 50%)',
		},
	]

	const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
		let total = 0
		dataWithArc.forEach((datum) => {
			total += datum.value
		})

		return (
			<text
				x={centerX}
				y={centerY}
				textAnchor="middle"
				dominantBaseline="central"
				style={{
					color: '#FFFFFF',
					fontSize: '24px',
				}}
			>
				{total}
			</text>
		)
	}

	return (
		<ResponsivePie
			data={data2}
			margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			activeInnerRadiusOffset={20}
			activeOuterRadiusOffset={5}
			borderWidth={1}
			borderColor={{
				from: 'color',
				modifiers: [['darker', 0.2]],
			}}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextOffset={8}
			arcLinkLabelsTextColor="#333333"
			arcLinkLabelsDiagonalLength={12}
			arcLinkLabelsThickness={3}
			arcLinkLabelsColor={{ from: 'color' }}
			arcLabelsSkipAngle={20}
			arcLabelsTextColor={{
				from: 'color',
				modifiers: [['darker', 2]],
			}}
			layers={[
				'arcs',
				'arcLabels',
				'arcLinkLabels',
				'legends',
				CenteredMetric,
			]}
			defs={[
				{
					id: 'dots',
					type: 'patternDots',
					background: 'inherit',
					color: 'rgba(255, 255, 255, 0.3)',
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: 'rgba(255, 255, 255, 0.3)',
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			fill={[
				{
					match: {
						id: 'ruby',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'c',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'go',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'python',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'scala',
					},
					id: 'lines',
				},
				{
					match: {
						id: 'lisp',
					},
					id: 'lines',
				},
				{
					match: {
						id: 'elixir',
					},
					id: 'lines',
				},
				{
					match: {
						id: 'javascript',
					},
					id: 'lines',
				},
			]}
			motionConfig="wobbly"
			transitionMode="centerRadius"
			tooltip={() => <></>}
			legends={[
				{
					anchor: 'bottom',
					direction: getLegendOrientation(),
					justify: false,
					translateX: 0,
					translateY: 50,
					itemsSpacing: 25,
					itemWidth: 70,
					itemHeight: 15,
					itemTextColor: '#999',
					itemDirection: 'left-to-right',
					itemOpacity: 1,
					symbolSize: 18,
					symbolShape: 'circle',
					effects: [
						{
							on: 'hover',
							style: {
								itemTextColor: '#000',
							},
						},
					],
				},
			]}
		/>
	)
}

export default Chart
