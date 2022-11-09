import dataFile from "../public/files/dataFile.json";
import Lottie from 'react-lottie';
import Link from "next/link";

export default function Test2a() {
    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: dataFile,
        renderer: 'svg'
    }

    return <div>
        <div>
            <button>
                <Link href="/">Home</Link>
            </button>
            <p style={{
                textAlign: 'center',
            }}>Click to play animation</p>
            <Lottie
                options={defaultOptions}
                height={500}
                width={500}
            />
        </div>
    </div>
}