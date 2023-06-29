import React, { useState, useEffect, useMemo } from 'react'
import useProdavalnikAuth from '../../../hooks/useProdavalnikAuth'
import { validateForm } from '../../Validation/АdvertisementValidation'
import { fetchData, performFetch } from '../../utils'
import Alert from '../Alert'
import Input from '../HTML/Input'
import Loader from '../Loader'
import Select from '../HTML/Select'
import Textarea from '../HTML/Textarea'
import IconUpload from '../../Icons/Upload'
import Dropzone from 'react-dropzone'

export default function Edit(props) {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [isLoading, setIsLoading] = useState(true)
	const [isSaving, setIsSaving] = useState(false)
	const [imagePreview, setImagePreview] = useState(null)
	const [imageUrl, setImageUrl] = useState(null)
	const [messageBagError, setMessageBagError] = useState(null)
	const [advertisement, setAdvertisement] = useState(null)
	const [category, setCategory] = useState([])
	const [formData, setFormData] = useState({
		title: '',
		category: '',
		description: '',
		price: '',
	})

	const headers = useMemo(
		() => ({
			user: prodavalnikAuth,
		}),
		[prodavalnikAuth]
	)

	const headersJSON = useMemo(
		() => ({
			'Content-Type': 'application/json',
			user: prodavalnikAuth,
		}),
		[prodavalnikAuth]
	)

	useEffect(() => {
		if (advertisement !== null) {
			setFormData({
				title: advertisement.title || '',
				category: advertisement.category || '',
				description: advertisement.description || '',
				price: advertisement.price || '',
			})

			setImagePreview(advertisement.imageUrl)
			setImageUrl(advertisement.imageUrl)
		}
	}, [advertisement])

	const handleInputChange = (name, value) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const update = async () => {
		try {
			setIsSaving(true)
			const errors = validateForm(formData, imageUrl)

			if (Object.keys(errors).length) {
				setMessageBagError(errors)
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

			await performFetch(
				`https://prodavalnik-api.devlabs-projects.info/ads/${props.id}`,
				'PATCH',
				headersJSON,
				JSON.stringify(payload)
			)

			props.onUpdateSuccess()
			setIsSaving(false)
		} catch (err) {
			setIsSaving(false)
			setMessageBagError({
				error: 'Възникна грешка при обновяването на обявата.',
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

			const response = await performFetch(
				'https://prodavalnik-api.devlabs-projects.info/upload',
				'POST',
				headers,
				data
			)

			const responseData = await response.json()
			setImageUrl(responseData.imageUrl)
		} catch (err) {
			setMessageBagError({
				error: 'Възникна грешка при добавянето на снимката.',
			})
		}
	}

	useEffect(() => {
		if (prodavalnikAuth) {
			const fetchAdvertisement = async () => {
				const advertisementUrl = `https://prodavalnik-api.devlabs-projects.info/ads/${props.id}`
				await fetchData(advertisementUrl, headers, setAdvertisement)
			}

			const fetchCategories = async () => {
				const categoriesUrl = `https://prodavalnik-api.devlabs-projects.info/ads/categories`
				await fetchData(categoriesUrl, headers, setCategory)
			}

			Promise.all([fetchAdvertisement(), fetchCategories()]).then(() => {
				setIsLoading(false)
			})
		}
	}, [prodavalnikAuth, props.id, headers])

	return (
		<div>
			<Alert error={messageBagError} />

			{isLoading ? (
				<Loader />
			) : (
				<>
					<Input
						label="Име на книгата"
						value={formData.title}
						type="text"
						id="title"
						name="title"
						placeholder="Име"
						onChange={(value) => handleInputChange('title', value)}
					/>

					<Select
						label="Избери категория"
						value={formData.category}
						id="category"
						name="category"
						placeholder="Категория"
						options={category}
						onChange={(value) =>
							handleInputChange('category', value)
						}
					/>

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

					<Input
						label="Въведете цена"
						value={formData.price}
						type="text"
						id="price"
						name="price"
						placeholder="Цена"
						onChange={(value) => handleInputChange('price', value)}
					/>

					<div className="flex items-center justify-center w-full">
						<label
							htmlFor="dropzone-file"
							className="flex flex-col items-center justify-center w-full h-40 border border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 mt-5"
						>
							<div className="flex flex-col items-center justify-center pt-5 pb-6">
								<IconUpload
									stroke="2"
									className="w-10 h-10 mb-3 text-gray-400"
								/>

								<p className="mb-2 text-sm text-gray-500">
									<span className="font-semibold">
										Натиснете тук за да прикачите снимка
									</span>{' '}
									или я провлачете
								</p>

								<p className="text-xs text-gray-500">
									PNG, JPG или JPEG (MAX. 10MB)
								</p>
							</div>

							<Dropzone onDrop={handleImageUpload}>
								{({ getRootProps, getInputProps }) => (
									<div {...getRootProps()} className="">
										<input
											id="dropzone-file"
											type="file"
											className="hidden"
											{...getInputProps()}
										/>
									</div>
								)}
							</Dropzone>
						</label>
					</div>

					{imagePreview && (
						<img
							src={imagePreview}
							alt="Preview"
							className="w-40 h-40 mt-3 object-cover rounded-md mx-auto"
						/>
					)}

					<button
						onClick={update}
						disabled={isSaving}
						type="button"
						className="absolute bottom-4 left-4 text-white bg-blue-500 hover:opacity-80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center transition active:scale-95"
					>
						Обнови
					</button>
				</>
			)}
		</div>
	)
}
