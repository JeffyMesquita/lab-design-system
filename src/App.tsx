import './styles/global.css';

const App = () => {
  return (
    <>
      <h1 className="text-bold text-5xl text-violet-500">Hello World!</h1>

      <button className="bg-violet-500 font-medium px-4 py-2 rounded text-white hover:bg-violet-800">
        Enviar
      </button>
    </>
  );
};

export { App };
