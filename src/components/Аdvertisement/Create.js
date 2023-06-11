import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Alert, AlertIcon, Button, Box, Flex } from '@chakra-ui/react'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import { validateForm } from '../Validation/АdvertisementValidation'
import { fetchData, performFetch } from '../utils.js'
import Input from '../HTML/Input'
import Select from '../HTML/Select'
import Textarea from '../HTML/Textarea'
import Dropzone from 'react-dropzone'

export default function Create() {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const headers = {
		user: prodavalnikAuth,
	}
	const headersJSON = {
		'Content-Type': 'application/json',
		user: prodavalnikAuth,
	}
	const [isSaving, setIsSaving] = useState(false)
	const [imagePreview, setImagePreview] = useState(null)
	const [imageUrl, setImageUrl] = useState(null)
	const [messageBag, setMessageBag] = useState(null)
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
				setMessageBag(errors)
				setIsSaving(false)
				return
			}

			const payload = {
				title: formData.title,
				description: formData.description,
				category: formData.category,
				imageUrl: imageUrl,
				price: Number(formData.price),
			}

			const response = await performFetch(
				'https://prodavalnik-api.devlabs-projects.info/ads/create',
				'POST',
				headersJSON,
				JSON.stringify(payload)
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
			setMessageBag({ success: 'Обявата е добавена успешно!' })
			setIsSaving(false)
		} catch (err) {
			setIsSaving(false)
			setMessageBag({
				error: 'Възникна грешка при добавянето на обявата.',
			})
		}
	}

	const handleImageUpload = async (acceptedFiles) => {
		try {
			const imageURL = URL.createObjectURL(acceptedFiles[0])
			setImagePreview(imageURL)

			const data = new FormData()
			data.append('file', acceptedFiles[0])

			const response = await performFetch(
				'https://prodavalnik-api.devlabs-projects.info/upload',
				'POST',
				headers,
				data
			)

			const responseData = await response.json()
			setImageUrl(responseData.imageUrl)
		} catch (err) {
			setMessageBag({
				error: 'Възникна грешка при добавянето на снимката.',
			})
		}
	}

	useEffect(() => {
		if (prodavalnikAuth) {
			const fetchCategories = async () => {
				const categoriesUrl = `https://prodavalnik-api.devlabs-projects.info/ads/categories`
				await fetchData(categoriesUrl, headers, setCategory)
			}

			fetchCategories()
		}
	}, [prodavalnikAuth])

	return (
		<Box>
			{messageBag &&
				Object.keys(messageBag).map((key) => (
					<Alert
						status={key === 'success' ? 'success' : 'error'}
						key={key}
					>
						<AlertIcon />
						{messageBag[key]}
					</Alert>
				))}

			<Link to="/sales/list">
				<Button marginTop="1rem">Обратно към списъка</Button>
			</Link>

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
					isLoading={isSaving}
					width="470px"
					colorScheme="green"
					size="md"
					marginTop="3rem"
					onClick={saveAdvertisement}
				>
					Добави
				</Button>
			</Flex>
		</Box>
	)
}
