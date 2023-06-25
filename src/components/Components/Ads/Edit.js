import React, { useState, useEffect, useMemo } from 'react'
import useProdavalnikAuth from '../../../hooks/useProdavalnikAuth'
import { validateForm } from '../../Validation/АdvertisementValidation'
import { fetchData, performFetch } from '../../utils'
import Alert from '../Alert'
import Input from '../HTML/Input'
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

			if (Object.keys(errors).length > 0) {
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
				<div className="flex items-center justify-center h-96 w-full">
					<div className="flex items-center gap-2">
						<svg
							aria-hidden="true"
							className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>

						<span className="text-xl text-slate-700">
							Зареждане...
						</span>
					</div>
				</div>
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

								<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
									<span className="font-semibold">
										Натиснете тук за да прикачите снимка
									</span>{' '}
									или я провлачете
								</p>

								<p className="text-xs text-gray-500 dark:text-gray-400">
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

