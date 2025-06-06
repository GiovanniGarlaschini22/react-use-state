// IMPORT //
import { useState } from "react";
import languages from "./data/languages";

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <>
      <div className="container py-3 --bs-secondary-bg-rgb">
        <h1>Learn Web development</h1>
        <div className="my-4">
          {languages.map((curLanguage, index) => (
            <button
              key={curLanguage.id}
              className={`btn mx-1 ${
                selectedLanguage && curLanguage.id === selectedLanguage.id
                  ? "btn-warning"
                  : "btn-primary"
              }`}
              onClick={() => {
                setSelectedLanguage(curLanguage);
              }}
            >
              {curLanguage.title}
            </button>
          ))}
        </div>
        <div classname="card">
          <div className="card-body">
            {selectedLanguage ? (
              <>
                <h2>{selectedLanguage.title}</h2>
                <p>{selectedLanguage.description}</p>
              </>
            ) : (
              <p>Nessun Linguaggio selezionato</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;