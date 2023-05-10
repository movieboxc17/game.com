const appData = [
  {
    name: 'Fake Calculator',
    price: 0.99,
    iconUrl: 'https://via.placeholder.com/150',
    downloadUrl: 'https://example.com/fake-calculator.exe'
  },
  // repeat for each app
];

const appContainer = document.querySelector('main');

appData.forEach(app => {
  const appElement = document.createElement('div');
  appElement.className = 'app';

  const iconElement = document.createElement('img');
  iconElement.src = app.iconUrl;
  iconElement.alt = `${app.name} icon`;
  appElement.appendChild(iconElement);

  const nameElement = document.createElement('h2');
  nameElement.textContent = app.name;
  appElement.appendChild
