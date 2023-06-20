import { useState, useEffect } from 'react'
import { ResponsivePie } from '@nivo/pie'
import { format, parseISO, differenceInMinutes } from 'date-fns'

const Chart = ({ data }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [clickedData, setClickedData] = useState(null)

<<<<<<< HEAD
	const eventData = data.VCALENDAR[0].VEVENT
	//console.log(eventData)

	const currentDayOfWeek = new Date().getDay()
	const uniqueIds = new Set()

	const currentHour = new Date().getHours()
	const classHours = {}
	let displayedObjectCount = 0

	const data3 = eventData.reduce((result, event, index, array) => {
		const { SUMMARY, DTSTART, DTEND, DESCRIPTION, LOCATION } = event

		// Check if the event ID is already in the set
		if (uniqueIds.has(SUMMARY)) {
			return result // Skip this event
		}

		uniqueIds.add(SUMMARY)

		const cleanedId = SUMMARY.replace('(Изборна дисциплина)', '').trim()

		const startDate = parseISO(DTSTART)
		const endDate = parseISO(DTEND)

		const startHour = startDate.getHours()

		let label
		if (startHour <= currentHour) {
			label = 'В момента'
		} else {
			label = 'Предстои'
		}

		const duration = differenceInMinutes(endDate, startDate)

		// Get the day of the week for the event start date (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
		const eventDayOfWeek = startDate.getDay()

		if (eventDayOfWeek === currentDayOfWeek) {
			const classId = cleanedId
			const classHoursString = `${format(startDate, 'HH:mm')} - ${format(
				endDate,
				'HH:mm'
			)}`

			result.push({
				id: classId,
				label,
				value: duration,
				description: DESCRIPTION,
				location: LOCATION,
			})

			classHours[classId] = classHoursString

			displayedObjectCount++

			// Add additional object with label 'Няма часове' and duration based on previous and next events
			if (displayedObjectCount % 2 !== 0 && index < array.length - 1) {
				const nextEvent = array[index + 1]
				const nextStartDate = parseISO(nextEvent.DTSTART)
				const nextDuration = differenceInMinutes(nextStartDate, endDate)

				if (nextDuration >= 0) {
					const nextCleanedId = nextEvent.SUMMARY.replace(
						'(Изборна дисциплина)',
						''
					).trim()
					const nextClassId = `Почиква ${displayedObjectCount}`
					const nextClassHoursString = `${format(
						endDate,
						'HH:mm'
					)} - ${format(nextStartDate, 'HH:mm')}`

					result.push({
						id: nextClassId,
						label: 'Няма часове',
						value: nextDuration,
						description: '',
						location: '',
					})

					classHours[nextCleanedId] = nextClassHoursString
					classHours[nextClassId] = nextClassHoursString
				}
			}
		}
		return result
	}, [])

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

	const readyData = data3.map((item) => {
		const found = legendColor.find(
			(legendItem) => legendItem.label === item.label
		)
		return { ...item, color: found.color }
	})

	const labelColors = () => {
		const colorArray = readyData.map((item) => item.color)
		return colorArray
	}

=======
>>>>>>> 8657f85 (Added onClick to display each label with its colored text and static legend)
	const getLegendWidth = () => {
		if (windowWidth < 490) {
			return 'column'
		} else {
			return 'row'
		}
	}
<<<<<<< HEAD

	//

	const onSliceClick = (data) => {
		console.log(data)
		setClickedData({
			id: `${data.id + '-' + data.data.description + '-' + data.data.location
				}`,
			label: data.label,
			value: data.value,
			description: data.description,
			location: data.location,
			color: data.color,
		})
	}

	const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
		let displayed = clickedData ? clickedData['id'] : 'Изберете...'
		let color = clickedData ? clickedData['color'] : '#0'

		const textLines = displayed.split('-')

		return (
			<text
				x={centerX}
				y={centerY - 30}
				textAnchor="middle"
				dominantBaseline="central"
				style={{
					color: '#FF0000',
					fontSize: '14px',
					fill: color,
				}}
			>
				{textLines.map((line, index) => (
					<tspan key={index} x={centerX} dy="1.2em">
						{line}
					</tspan>
				))}
			</text>
		)
	}

=======
>>>>>>> 8657f85 (Added onClick to display each label with its colored text and static legend)
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

<<<<<<< HEAD
	return (
		<ResponsivePie
			data={readyData}
			onClick={onSliceClick}
			colors={labelColors()}
=======
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
>>>>>>> 8657f85 (Added onClick to display each label with its colored text and static legend)
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
<<<<<<< HEAD
			enableArcLabels={true}
			arcLabel={(data) => `${classHours[data.id]}`}
			enableArcLinkLabels={false}
=======
			enableArcLabels={false}
>>>>>>> 8657f85 (Added onClick to display each label with its colored text and static legend)
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
<<<<<<< HEAD
					data: legendColor,
=======
					data: legendData,
>>>>>>> 8657f85 (Added onClick to display each label with its colored text and static legend)
				},
			]}
		/>
	)
}

export default Chart
