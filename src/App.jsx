import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <header>
        <h1>Episodes</h1>
      </header>
      <main>
        <Roster episodes={episodes} setSelectedEpisode={setSelectedEpisode} />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}

function EpisodeDetails({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <section className="details">
        <h2>Episode</h2>
        <p>Select an episode to learn more.</p>
      </section>
    );
  }

  return (
    <section className="details">
      <h2>Episode {selectedEpisode.id}</h2>
      <h3>{selectedEpisode.title}</h3>
      <p>{selectedEpisode.description}</p>
      <button>Watch now</button>
    </section>
  );
}

function Roster({ episodes, setSelectedEpisode }) {
  return (
    <section className="roster">
      <h2>Episodes</h2>
      <ul className="roster">
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
