import "./App.css";
import Card from "./components/Card";

function App() {
  // JSON string format
  const jsonData = `[
    "https://d2wSzd...Showcase-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ...",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR...",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT...",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR..."
  ]`;

  // JSON.parse se array banana
  const imageArray = JSON.parse(jsonData);

  return (
    <section className="card">
      <div className="container">
        <div className="row">
          {imageArray.map((img, index) => (
            <Card key={index} image={img} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
