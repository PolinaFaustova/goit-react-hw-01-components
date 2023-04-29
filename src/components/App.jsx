// Компоненты всех заданий рендерятся на одной странице, 
// внутри общего контейнера - корневого компонента <App>.
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
