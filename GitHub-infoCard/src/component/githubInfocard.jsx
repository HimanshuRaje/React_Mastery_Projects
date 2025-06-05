import React, { useState, useEffect } from "react";

const GitHubInfoCard = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error(`User not found (${response.status})`);
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={styles.card}>
      <img
        src={userData.avatar_url}
        alt={`${userData.login}'s avatar`}
        style={styles.avatar}
      />
      <h2>{userData.name || "Name not available"}</h2>
      <p>@{userData.login}</p>
      <p>{userData.bio || "No bio available"}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Public Repos: {userData.public_repos}</p>
      <a
        href={userData.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        View Profile
      </a>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
  },
  avatar: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginBottom: "15px",
  },
  button: {
    display: "inline-block",
    marginTop: "15px",
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "5px",
    fontSize: "14px",
  },
};

export default GitHubInfoCard;
