import * as API from '../../services/api';

export const App = () => {
  async function fetchImages() {
    try {
      const movies = await API.getMovieCredits(272);
      console.log(movies);
    } catch (error) {
      // toast.error(`Oops something went wrong, try again.`);
    }
  }

  fetchImages();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
