import Link from "next/link";
export default async function searchAnime({ params }) {
    const { keyword } = params;
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}anime?q=${keyword}`);
    const searchAnime = await data.json();
    return (
        <>
            <div className="grid grid-cols-4 w-full  justify-items-center mt-6">
                {searchAnime.data.map((data, index) => (
                    <Link href={data.url} target="_blank" key={index}>
                        <div className="h-auto flex flex-col items-center p-2 mb-6">
                            <img src={data.images.jpg.image_url} className="h-[23em] w-60" />
                            <h1 className="text-orange-500 font-bold w-40 text-center text-lg mt-2">{data.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </>

    )
}
