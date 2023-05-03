import { useState, useEffect } from 'react'
import { ResponsivePie } from '@nivo/pie'

const Chart = ({ data }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [clickedData, setClickedData] = useState(null)

	//const fillColors = ['#3ABCE6', '#D96E26', '#DC143C', '#808080']

	const legendColor = [
		{
			id: '1',
			label: 'В момента',
			color: '#D96E26',
		},
		{
			id: '2',
			label: 'Приключил',
			color: '#3ABCE6',
		},
		{
			id: '3',
			label: 'Предстои',
			color: '#DC143C',
		},
		{
			id: '4',
			label: 'Няма часове',
			color: '#808080',
		},
	]
	const data2 = [
		{
			id: 'Math',
			label: 'В момента',
			value: 540,
			color: '#3ABCE6',
		},
		{
			id: 'Почиква ',
			label: 'Няма часове',
			value: 255,
			color: '#808080',
		},
		{
			id: 'Икономика',
			label: 'Предстои',
			value: 380,
			color: '#3ABCE6',
		},
		{
			id: 'Почиква',
			label: 'Няма часове',
			value: 119,
			color: '#808080',
		},
		{
			id: 'Програмиране',
			label: 'Приключил',
			value: 424,
			color: '#3ABCE6',
		},
	]

	const newData2 = data2.map((item) => {
		const found = legendColor.find(
			(legendItem) => legendItem.label === item.label
		)
		return { ...item, color: found.color }
	})

	const labelColors = () => {
		const colorArray = newData2.map((item) => item.color)
		return colorArray
	}

	const getLegendWidth = () => {
		if (windowWidth < 490) {
			return 'column'
		} else {
			return 'row'
		}
	}

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

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<ResponsivePie
			data={newData2}
			onClick={onSliceClick}
			colors={labelColors()}
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
						id: 'Math',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'Програмиране',
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
					data: legendColor,
				},
			]}
		/>
	)
}

export default Chart
