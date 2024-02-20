async function fetchGitHubName(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.ok) {
      const data = await response.json();
      return data.name;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

console.log(fetchGitHubName("cipriancozma"));
