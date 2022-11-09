import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";

const List = ({ data }) => {
    const [posts, setPosts] = useState(data);
    const [hasMore, setHasMore] = useState(true);

    const getMorePost = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=20`
        );
        const newPosts = await res.json();
        setPosts((post) => [...post, ...newPosts]);
    };

    return (
        <>
            <InfiniteScroll
                dataLength={posts.length}
                next={getMorePost}
                hasMore={hasMore}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            >
                {posts.map((data) => (
                    <div key={data.id}>
                        <div className="back">
                            <strong> {data.id} </strong>
                            <Link href={{ pathname: '/test1/view', query: { id: data.id, last_element: posts.length} }}>View Details</Link>
                        </div>
                        {data.completed}
                    </div>
                ))}
            </InfiniteScroll>
            <style jsx>
                {`
                    .back {
                        padding: 10px;
                        border-style: solid;
                        border-color: coral;
                        color: dodgerblue;
                        margin: 10px;
                    }
                `}
            </style>
        </>
    );
};

export default List;
