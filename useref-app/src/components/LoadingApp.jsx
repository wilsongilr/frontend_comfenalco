import { useState } from "react"
import Card from "./Card"

const LoadingApp = () => {

    const [show, setShow] = useState(false);
    return (
        <div>
            <div >

                <button onClick={() => setShow(!show)}>
                    Show/Hide
                </button>
            </div>
            {
                show &&
                <Card />
            }

        </div>
    )
}
export default LoadingApp