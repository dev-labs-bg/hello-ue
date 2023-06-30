export function validateForm(formData, imageUrl) {
	const errors = {}

	if (formData.title.trim() === '') {
		errors.title = 'Моля, въведете име на книгата'
	} else if (
		formData.title.trim().length < 2 ||
		formData.title.trim().length > 40
	) {
		errors.title = 'Дължината на името трябва да бъде между 2 и 40 символа'
	}

	if (formData.category.trim() === '') {
		errors.category = 'Моля, изберете категория'
	}

	if (formData.description.trim() === '') {
		errors.description = 'Моля, въведете описание'
	} else if (
		formData.description.trim().length < 10 ||
		formData.description.trim().length > 255
	) {
		errors.description =
			'Дължината на описанието трябва да бъде между 10 и 255 символа'
	}

	if (formData.price.toString().trim() === '') {
		errors.price = 'Моля, въведете цена'
	} else if (isNaN(Number(formData.price))) {
		errors.price = 'Моля, въведете валидна цена'
	} else if (Number(formData.price) >= 100) {
		errors.price = 'Цената трябва да бъде по-малка от 100 лева'
	}

	if (!imageUrl) {
		errors.image = 'Моля, прикачете снимка'
	}

	return errors
}
