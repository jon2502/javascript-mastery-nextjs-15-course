import SearchForm from "@/components/SearchForm"
import StartupCard from "@/components/StartupCard";

export default async function Home( { searchParams }: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAT: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: "Greg"
    },
    _id: 1,
    description: "this is a description",
    image: "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Y%27shtola%2C+Night%27s+Blessed&set=FIC&collector_number=215&language_code=en",
    category: "Cards",
    title: "MTG cards"
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query ={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for ${query}`: "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) =>(
              <StartupCard key={post?._id} post={post} />
            ))) : (
              <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
    
  );
}
