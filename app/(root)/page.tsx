import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: { searchParams: Promise  < {query?:string}>}) {
  const query =(await searchParams).query
    const posts = [{
      _createdAt: new Date(),
        veiws: 55,
        author: {_id:1},
        description: "Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.",
        image:  "https://robbreport.com/wp-content/uploads/2024/10/teslabot.jpg",
        category: "Robots",
        title: "We Robots"
    }]
  return (
      <>
        <section className="pink_container">
          <h1 className="heading">
            Pitch Your Startup, <br/>
            Connect With Entrepreneurs
          </h1>

          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions.
          </p>

          <SearchForm query={query}/>
        </section>

          <section className="blue_container">
              <ul className="mt-7 card_grid ">
                  {
                      posts?.length > 0 ? (
                          posts.map((post: startupCardType) => (
                              <StartupCard  key={post?. _id} post={post}/>
                          ))
                      ) :(
                          <p className="no-results">No startups Found</p>
                      )
                  }
              </ul>
          </section>

      </>
  );
}
