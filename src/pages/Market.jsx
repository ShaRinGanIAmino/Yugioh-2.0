import PacmanLoader from 'react-spinners/PacmanLoader';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards.jsx';

const Market = () => {
  const [value, setValue] = useState('All');
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getAllNotes = () => {
      fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then((response) => response.json())
        .then((json) => {
          setPics(json.data);
          console.log(pics[0]);
          const totalPosts = json.data.length;
          console.log(totalPosts);
          setLoading(false);
        });
    };
    getAllNotes();
  }, []);

  const HandleChange = () => {
    setCards_number();
  };

  return (
    <div className="h-full  w-[90%] flex-col gap-4 ">
      <div className=" w-full h-[10%] flex gap-4 md:gap-8 justify-center items-center">
        <select
          id="Filter"
          className="h-[45%] w-[140px] outline-none  bg-transparent border-solid border-2 border-secondary text-gray-400 font-poppins text-xs rounded-sm tracking-wide"
          onChange={() => setFilter(event.target.value)}>
          <option value="All" className=" text-secondary bg-primary p-2">
            All
          </option>
          <option value="Monster" className=" text-secondary bg-primary">
            Monster Cards
          </option>
          <option value="Spell Card" className=" text-secondary bg-primary">
            Spell Cards
          </option>
          <option value="Trap Card" className=" text-secondary bg-primary">
            Trap Cards
          </option>
        </select>
        <input
          className="h-[45%] outline-none p-1 bg-transparent border-solid border-2 border-secondary text-gray-400 font-poppins text-xs rounded-sm tracking-wide w-[300px]"
          type="text"
          placeholder="Seach for a card ..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="bg-gray-900 w-full h-[90%] overflow-y-scroll">
        {loading ? (
          <div className="w-[100%] h-[100%] flex justify-center items-center pt-[400px] pb-[400px] md:p-[300px] ">
            <PacmanLoader color={'#6E85FF'} loading={loading} />
          </div>
        ) : (
          <div className="flex justify-center items-center ">
            <Cards
              data={pics.filter((pic) => {
                if (
                  pic.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                  (pic.type.includes(filter) || filter == 'All')
                ) {
                  return true;
                }
                return false;
              })}
              category={filter}
              searchTerm={searchTerm}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Market;
