
import { useState } from 'react';

import QRCode from "qrcode.react";

export default function Example() {

	const [value, setValue] = useState('https://portfolio-kunal-rho.vercel.app/');
	const [back, setBack] = useState("transparent");
	const [fore, setFore] = useState('black');
	const [size, setSize] = useState(200);

	const downloadQR = () => {
		const canvas = document.getElementById("qr-code-download");
		const ctx = canvas.getContext("2d");
		const pngUrl = canvas
			.toDataURL("image/png")
			.replace("image/png", "image/octet-stream");
		let downloadLink = document.createElement("a");
		downloadLink.href = pngUrl;
		downloadLink.download = "qr-code-download.png";
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	};

	return (

		<div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
			<div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 pb-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 flex content-center justify-center items-center flex-wrap">
				<svg
					viewBox="0 0 1024 1024"
					className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
					aria-hidden="true"
				>
					<circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
					<defs>
						<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
							<stop stopColor="#7775D6" />
							<stop offset={1} stopColor="#E935C1" />
						</radialGradient>
					</defs>
				</svg>
				<div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Create Your QR Code
						<br />
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						Put Your URL below and get the QR code
					</p>
					<div className="relative mt-2 rounded-md shadow-sm flex content-center justify-center items-center flex-wrap">
						<input
							type="text"
							name="price"
							id="price"
							onChange={(e) => setValue(e.target.value)}
							className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Enter Your URL"
						/>
					</div>
					<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
						<a
							href="#"
							className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							onClick={downloadQR}
						>
							Download
						</a>
					</div>
				</div>
				<div className="relative mt-16 h-80 lg:mt-8 w-1/2 bg-clip-content bg-white sm:rounded-3xl flex content-center justify-center items-center">
					<div>
						{value && (
							<QRCode
								id="qr-code-download"
								value={value}
								bgColor={back}
								fgColor={fore}
								size={size === '' ? 0 : size}
								level={"H"}
								includeMargin={true}
							/>
						)}
					</div>
				</div>
			</div>
		</div>

	)
}