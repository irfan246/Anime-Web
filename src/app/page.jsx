import TopAnimeCard from "@/components/topAnimeCard"
import SeasonsNowAnimeCard from "@/components/seasonsNowAnimeCard"
import GenreAnime from "@/components/genreAnime"
export default function Home() {
  return (
    <div>
      <TopAnimeCard classname="mb-2" />
      <SeasonsNowAnimeCard />
      <GenreAnime />
    </div>
  )
}
