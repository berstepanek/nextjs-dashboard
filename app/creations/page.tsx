import Link from "next/link";

async function getCreations() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/creations`
    );
    const posts = await response.json();
    return posts;
}

const CreationsPage = async () => {
    const creations = await getCreations();
    return (
        <div className="blog-page">
            <h2>All Creations</h2>
            <div className="posts">
                {creations.map((creation : any) => {
                    return (
                        <Link href={`/creations/${creation.id}`} className="post" key={creation.id}>
                            <h3>{creation.acf.creation_title}</h3>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default CreationsPage;
