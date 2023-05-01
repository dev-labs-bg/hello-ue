import { useState, useEffect } from 'react'
import { ResponsivePie } from '@nivo/pie'

const Chart = ({ data }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [clickedData, setClickedData] = useState(null)

	const getLegendWidth = () => {
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
			id: 'Math',
			label: 'В момента',
			value: 540,
			color: 'hsl(334, 70%, 50%)',
		},
		{
			id: 'Почиква',
			label: 'Няма часове',
			value: 255,
			color: 'hsl(174, 70%, 50%)',
		},
		{
			id: 'Икономика',
			label: 'Предстои',
			value: 380,
			color: 'hsl(24, 70%, 50%)',
		},
		{
			id: 'Почиква',
			label: 'Няма часове',
			value: 119,
			color: 'hsl(274, 70%, 50%)',
		},
		{
			id: 'Програмиране',
			label: 'Приключил',
			value: 424,
			color: 'hsl(229, 70%, 50%)',
		},
	]

	const legendData = data2
		.filter((item, index, self) => {
			return index === self.findIndex((t) => t.id === item.id)
		})
		.slice(0, 4)
		.map((item) => {
			return {
				id: item.id,
				label: item.label,
				color: item.color,
			}
		})

	const onSliceClick = (data) => {
		console.log(data)
		setClickedData({ ...data, color: data.color })
	}

	const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
		let displayed = clickedData ? clickedData['id'] : 'Изберете...'
		let color = clickedData ? clickedData['color'] : '#0'

		return (
			<text
				x={centerX}
				y={centerY}
				textAnchor="middle"
				dominantBaseline="central"
				style={{
					color: '#FF0000',
					fontSize: '14px',
					fill: color,
				}}
			>
				{displayed}
			</text>
		)
	}

	return (
		<ResponsivePie
			data={data2}
			onClick={onSliceClick}
			margin={{ top: 15, right: 80, bottom: 70, left: 80 }}
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
			enableArcLabels={false}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextOffset={8}
			arcLinkLabelsTextColor="#333333"
			arcLinkLabelsDiagonalLength={5}
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
					direction: getLegendWidth(),
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
					data: legendData,
				},
			]}
		/>
	)
}

export default Chart
