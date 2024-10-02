import "./Page.css"

export default function Page() {
    return (
        <div className="w-full flex justify-center">
            <div className="md:size-[60rem]  md:flex md:flex-col md:content-center md:justify-center" >
            <div className="px-5 md:flex md:flex-row md:justify-between ">
                <h1 className="font-bold text-start text-2xl py-6">The creative crew</h1>
                <div className="md:w-64">
                <h2 className="font-bold text-start text-lg py-3">WHO WE ARE</h2>
                <p>we are team of creatively diverse. driven, innovative individuals wordking in various locations from the world.</p>
                </div>
            </div>
            <div className="grid gap-4 md:gap-10 grid-cols-2 md:grid-cols-3 py-6">
                <div className="flex flex-row w-44 md:w-56 px-3">
                    <figure className="border rounded-md mx-auto  w-40 h-60 md:h-72 shadow-md overflow-hidden relative text-black">
                        <img src="photo/photo1.png" className="w-full object-cover" />
                        <figcaption className="absolute bottom-0 left-0 w-full py-4">Bill Mahoney</figcaption>
                    </figure>
                    <h4 className="[writing-mode:vertical-rl]">PRODUCT OWNER</h4>
                </div>
                <div className="flex flex-row w-44 md:w-56 px-3">
                    <figure className="border rounded-md mx-auto shadow-md w-40 h-60 md:h-72 overflow-hidden relative text-black">
                        <img src="photo/photo2.png" className="w-full object-cover" />
                        <figcaption className="absolute bottom-0 left-0 w-full py-4">Saba Cabrera</figcaption>
                    </figure>
                    <h4 className="[writing-mode:vertical-rl]">ART DIRECTOR</h4>
                </div>
                <div className="flex flex-row w-44 md:w-56 px-3">
                    <figure className="border rounded-md mx-auto shadow-md w-40 h-60 md:h-72 overflow-hidden relative text-black">
                        <img src="photo/photo3.png" className="w-full object-cover" />
                        <figcaption className="absolute bottom-0 left-0 w-full py-4">Shae Le</figcaption>
                    </figure>
                    <h4 className="[writing-mode:vertical-rl]">TECH LEAD</h4>
                </div>
                <div className="flex flex-row w-44 md:w-56 px-3">
                    <figure className="border rounded-md mx-auto shadow-md w-40 h-60 md:h-72 overflow-hidden relative text-black">
                        <img src="photo/photo4.png" className="w-full object-cover" />
                        <figcaption className="absolute bottom-0 left-0 w-full py-4">Skylah LU</figcaption>
                    </figure>
                    <h4 className="[writing-mode:vertical-rl]">UX DESIGNER</h4>
                </div>
                <div className="flex flex-row w-44 md:w-56 px-3">
                    <figure className="border rounded-md mx-auto shadow-md w-40 h-60 md:h-72 overflow-hidden relative text-black">
                        <img src="photo/photo5.png" className="w-full object-cover" />
                        <figcaption className="absolute bottom-0 left-0 w-full py-4">Griff Richards</figcaption>
                    </figure>
                    <h4 className="[writing-mode:vertical-rl]">DEVELOPER</h4>
                </div>

                <div className="flex flex-row w-44 md:w-56 px-3">
                    <figure className="border rounded-md mx-auto shadow-md w-40 h-60 md:h-72 overflow-hidden relative text-black">
                        <img src="photo/photo6.png" className="w-full object-cover" />
                        <figcaption className="absolute bottom-0 left-0 w-full py-4">Stan John</figcaption>
                    </figure>
                    <h4 className="[writing-mode:vertical-rl]">DEVELOPER</h4>
                </div>
            </div>
        </div>
        </div>

    )
}