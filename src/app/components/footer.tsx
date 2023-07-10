import Image from "next/image";


export default function Footer() {
    return (
        <header>
            <div className="w-screen h-auto flex flex-col bg-whiteanqtique-500 text-vermilion-500 px-8 lg:px-32 py-8">
                <div className="flex flex-1 justify-center mb-10">
                    Enjoy the best vegan hotdogs in Vienna with us!
                </div>
                <div className="flex w-full lg:w-3/5 flex-col space-y-4 mb-8">
                    <h2 className="text-lg font-bold">Let us know what you think!</h2>
                    <form className="flex flex-col">
                        <label>Your Email:</label>
                        <input type="text" name="email" className="submitform-input"/>
                        <label>Your Message:</label>
                        <input type="text" name="message" className="submitform-input"/>
                        <button>Send</button>
                    </form>
                </div>
                <div className="flex flex-1 justify-end text-pastellblue-500">
                    © René Schultheis & Tiffany Ast-Turner
                </div>
            </div>
        </header>)
}