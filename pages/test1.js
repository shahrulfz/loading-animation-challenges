import List from "../src/components/list";
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then(res => res.json())

function fetchdata(last_element) {
    const { data } = useSWR(`https://jsonplaceholder.typicode.com/todos?_limit=${last_element}`, fetcher)

    return {
        data
    }
}

export default function Test1() {
    const router = useRouter()
    const last_element = router.query.last_element ? router.query.last_element : 20;
    const { data } = fetchdata(last_element);

    if (!data) return <h1>Loading...</h1>;

    return (
        <div>
            <button>
                <Link href="/">Home</Link>
            </button>
            <List data={data} />
        </div>
    )
}
