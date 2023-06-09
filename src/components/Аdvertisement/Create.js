import React, { useState, useEffect } from 'react'
import { Button, Box, Flex, Alert, AlertIcon } from '@chakra-ui/react'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import { validateForm } from '../Validation/АdvertisementValidation'
import Input from '../HTML/Input'
import Select from '../HTML/Select'
import Textarea from '../HTML/Textarea'
import Dropzone from 'react-dropzone'

export default function Create() {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [isSaving, setIsSaving] = useState(false)
	const [imagePreview, setImagePreview] = useState(null)
	const [imageUrl, setImageUrl] = useState(null)
	const [errorBag, setErrorBag] = useState(null)
	const [category, setCategory] = useState([])
	const [formData, setFormData] = useState({
		title: '',
		category: '',
		description: '',
		price: '',
	})

	const handleInputChange = (name, value) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const saveAdvertisement = async () => {
		try {
			setIsSaving(true)
			const errors = validateForm(formData, imageUrl)

			if (Object.keys(errors).length > 0) {
				setErrorBag(errors)
				return
			}

			const data = new FormData()
			data.append('title', formData.title)
			data.append('description', formData.description)
			data.append('category', formData.category)
			data.append('imageUrl', imageUrl)
			data.append('price', Number(formData.price))

			const response = await fetch(
				'https://prodavalnik-api.devlabs-projects.info/ads/create',
				{
					method: 'POST',
					body: data,
					headers: {
						user: prodavalnikAuth,
					},
				}
			)

			if (!response.ok) {
				throw new Error(response.statusText)
			}

			setFormData({
				title: '',
				category: '',
				description: '',
				price: '',
			})
			setImagePreview(null)
			setImageUrl(null)
			setErrorBag({ success: 'Обявата е добавена успешно!' })
			setIsSaving(false)
		} catch (err) {
			setErrorBag({
				error: 'Възникна грешка при добавянето на обявата.',
			})
		}
	}

	const handleImageUpload = async (acceptedFiles) => {
		try {
			const file = acceptedFiles[0]
			const imageURL = URL.createObjectURL(file)
			setImagePreview(imageURL)

			const data = new FormData()
			data.append('file', file)

			const response = await fetch(
				'https://prodavalnik-api.devlabs-projects.info/upload',
				{
					method: 'POST',
					body: data,
					headers: {
						user: prodavalnikAuth,
					},
				}
			)

			if (!response.ok) {
				throw new Error(response.statusText)
			}

			const responseData = await response.json()
			setImageUrl(responseData.imageUrl)
		} catch (err) {
			setErrorBag({
				error: 'Възникна грешка при добавянето на снимката.',
			})
		}
	}

	const fetchCategory = async () => {
		try {
			const response = await fetch(
				'https://prodavalnik-api.devlabs-projects.info/ads/categories',
				{
					method: 'GET',
					headers: {
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
			{errorBag &&
				Object.keys(errorBag).map((key) => (
					<Alert status="error" key={key}>
						<AlertIcon />
						{errorBag[key]}
					</Alert>
				))}

			<Box m="6px">
				<Input
					label="Име на книгата"
					value={formData.title}
					type="text"
					id="title"
					name="title"
					placeholder="Име"
					onChange={(value) => handleInputChange('title', value)}
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

			<Flex direction="column" align="center">
				<Button
					disabled={isSaving}
					width="470px"
					colorScheme="green"
					size="md"
					marginTop="4rem"
					onClick={saveAdvertisement}
				>
					Добави
				</Button>
			</Flex>
		</div>
	)
}
