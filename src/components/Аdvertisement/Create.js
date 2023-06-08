import React, { useState, useEffect } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import Input from '../HTML/Input'
import Select from '../HTML/Select'
import Textarea from '../HTML/Textarea'
import Dropzone from 'react-dropzone'

export default function Create() {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [imagePreview, setImagePreview] = useState(null)
	const [category, setCategory] = useState([])
	const [formData, setFormData] = useState({
		book_name: '',
		category: '',
		description: '',
		price: '',
	})

	useEffect(() => {
		setFormData({
			book_name: '',
			category: '',
			description: '',
			price: '',
		})
	}, [])

	const handleInputChange = (name, value) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleImageUpload = (acceptedFiles) => {
		const file = acceptedFiles[0]
		const imageURL = URL.createObjectURL(file)
		setImagePreview(imageURL)

		console.log(URL.createObjectURL(file))

		const data = new FormData()
		data.append('image', file)
	}

	const fetchCategory = async () => {
		try {
			const response = await fetch(
				'https://prodavalnik-api.devlabs-projects.info/ads/categories',
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						user: prodavalnikAuth,
					},
				}
			)

			if (!response.ok) {
				throw new Error(response.statusText)
			}

			const data = await response.json()
			setCategory(data)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		if (prodavalnikAuth) fetchCategory()
	}, [prodavalnikAuth])

	return (
		<div>
			<Box m="6px">
				<Input
					label="Име на книгата"
					value={formData.name}
					type="text"
					id="book-name"
					name="bookName"
					placeholder="Име"
					onChange={(value) => handleInputChange('book_name', value)}
				/>
			</Box>

			<Box m="6px">
				<Select
					label="Избери категория"
					value={formData.category}
					id="category"
					name="category"
					placeholder="Категория"
					options={category}
					onChange={(value) => handleInputChange('category', value)}
				/>
			</Box>

			<Box m="6px">
				<Textarea
					label="Описание"
					value={formData.description}
					id="description"
					name="description"
					placeholder="Описание"
					row="4"
					onChange={(value) =>
						handleInputChange('description', value)
					}
				/>
			</Box>

			<Box m="6px">
				<Input
					label="Въведете цена"
					value={formData.price}
					type="text"
					id="price"
					name="price"
					placeholder="Цена"
					onChange={(value) => handleInputChange('price', value)}
				/>
			</Box>

			<Box m="6px">
				<Dropzone onDrop={handleImageUpload}>
					{({ getRootProps, getInputProps }) => (
						<div {...getRootProps()} className="dropzone">
							<input {...getInputProps()} />
							<p>Натиснете тук за да прикачете снимка</p>
						</div>
					)}
				</Dropzone>
			</Box>

			{imagePreview && (
				<Flex direction="column" align="center">
					<img
						src={imagePreview}
						alt="Preview"
						style={{
							width: '200px',
							height: '200px',
							objectFit: 'cover',
							borderRadius: '5px',
						}}
					/>
				</Flex>
			)}
		</div>
	)
}
