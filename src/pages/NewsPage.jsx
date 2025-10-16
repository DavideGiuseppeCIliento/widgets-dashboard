// # IMPORT DEPENDENCES

// # IMPORT HOOKS
import useRequest from "../hooks/useRequest";

// # IMPORT COMPONENTS
import Card from "../components/Card";

export default function NewsPage() {
  const { news, RequestUserNews } = useRequest();
  console.log(news);
  return (
    <div className="container">
      <div className="row">
        {news.map((n) => (
          <Card
            key={n.id}
            title={n.title}
            likes={n.reactions.likes}
            tags={n.tags}
            views={n.views}
            idUser={n.userId}
          />
        ))}
      </div>
    </div>
  );
}
