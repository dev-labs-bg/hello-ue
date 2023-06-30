import IconSpinner from '../Icons/Spinner'

export default function Loader() {
	return (
		<div className="flex items-center justify-center h-96 w-full">
			<div className="flex items-center gap-2">
				<IconSpinner />
				<span className="text-xl text-slate-700">Зареждане...</span>
			</div>
		</div>
	)
}
