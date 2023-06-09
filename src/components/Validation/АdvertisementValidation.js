export function validateForm(formData, imageUrl) {
	const errors = {}

	if (formData.title.trim() === '') {
		errors.title = 'Моля, въведете име на книгата'
	}

	if (formData.category.trim() === '') {
		errors.category = 'Моля, изберете категория'
	}

	if (formData.description.trim() === '') {
		errors.description = 'Моля, въведете описание'
	}

	if (formData.price.trim() === '') {
		errors.price = 'Моля, въведете цена'
	} else if (isNaN(Number(formData.price))) {
		errors.price = 'Моля, въведете валидна цена'
	}

	if (!imageUrl) {
		errors.image = 'Моля, прикачете снимка'
	}

	return errors
}
