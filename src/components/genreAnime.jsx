import Link from "next/link"

const getData = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}genres/anime`);

    return data.json();
};


export default async function genreAnime() {
    const seasonsNowAnime = await getData();
    return (
        <>
            <div className="flex justify-center items-center px-12 mt-4 mb-12">
                <h1 className="text-white bg-neutral-800 p-2 rounded-full">Genre Anime</h1>
            </div>

            <div className="grid grid-cols-4 w-full  justify-items-center">
                {seasonsNowAnime.data.map((data, index) => (
                    <Link href={data.url} target="_blank" key={index}>
                        <div className="h-auto flex flex-col items-center p-2 mb-6">
                            <h1 className="text-white font-bold">{data.name}</h1>
                            <h1 className="text-orange-500 font-bold w-40 text-center text-lg mt-2">{data.count}</h1>
                        </div>
                    </Link>
                ))}
            </div >
        </>

    )
}
