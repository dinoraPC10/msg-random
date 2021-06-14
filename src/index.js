const messages = [
  "Ana",
  "Nicolas",
  "Yesica",
  "Diego",
  "Laura",
  "Karen",
  "Pedro",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
