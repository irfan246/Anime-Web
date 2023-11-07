import Link from "next/link"

export default async function Page() {

    const getData = async () => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}top/anime`);
        return data.json();
    };

    const topAnime = await getData()

    return (
        <>
            <div className="flex justify-between items-center px-12 mt-6">
                <h1 className="text-white bg-neutral-800 p-2 rounded-full">Top Anime</h1>
                <Link href="/" className="text-white bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 hover:text-orange-500">Back</Link>
            </div>

            <div className="grid grid-cols-4 w-full  justify-items-center mt-6">
                {topAnime.data?.map((data, index) => (
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
