import { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState("Dennis Ng'ang'a Mbugua");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = "http://localhost:5000";

  const fetchUserData = async (url) => {
    setLoading(true);

    setTimeout(async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    fetchUserData(URL);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <h3>Software Developer in Nairobi</h3>

      {loading && <p>Loading members...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {data.map((member) => (
          <li key={member.memberId || member.id}>
            Name: {member.fullName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
