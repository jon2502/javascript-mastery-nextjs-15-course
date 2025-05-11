
async function Home(){
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) throw new Error("failed to fetch")
    const albums = await response.json()

    return(
        <div>
            {albums.map((album: {id: number, title: string}) => (
                <div key={album.id}>
                    <h3>{album.title}</h3>
                    <p>Album ID: {album.id}</p>
                </div>
            ))}
        </div>
    )
}


export default Home;