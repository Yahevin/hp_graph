export const request = async () => {
  return await fetch('https://hp-api.onrender.com/api/characters/students')
    .then((res) => res.json())
    .catch(() => []);
};
