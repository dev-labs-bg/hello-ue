import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect } from 'react'
import '../../App.css'

const qrcodeRegionId = 'html5qr-code-full-region'
// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
	let config = {}
	if (props?.fps) {
		config.fps = props?.fps
	}
	if (props?.qrbox) {
		config.qrbox = props?.qrbox
	}
	if (props?.aspectRatio) {
		config.aspectRatio = props?.aspectRatio
	}
	if (props?.disableFlip) {
		config.disableFlip = props?.disableFlip
	}
	return config
}

const QrScannerPlugin = (props) => {
	let html5QrcodeScanner
	useEffect(() => {
		// when component mounts
		const config = createConfig(props)
		const verbose = props?.verbose === true
		if (!html5QrcodeScanner?.getState()) {
			// Suceess callback is required.
			if (!props.qrCodeSuccessCallback) {
				console.error('qrCodeSuccessCallback is required callback.')
			}
			/* eslint-disable */
			html5QrcodeScanner = new Html5QrcodeScanner(
				qrcodeRegionId,
				config,
				verbose
			)
		}
		html5QrcodeScanner.render(
			props.qrCodeSuccessCallback,
			props.qrCodeErrorCallback
		)
		// cleanup function when component will unmount
		return () => {
			html5QrcodeScanner.clear().catch((error) => {
				console.error('Failed to clear html5QrcodeScanner. ', error)
			})
		}
	}, [])

	return <div id={qrcodeRegionId} />
}

export default QrScannerPlugin
