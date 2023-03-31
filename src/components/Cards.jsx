import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import add from '../assets/add.svg';
import ConnectPopup from './ConnectPopup';

export default function cards(props) {
  const { data, category, searchTerm } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(Math.ceil(data.length / 15));
  const [itemOffset, setItemOffset] = useState(0);

  //console.log(pageCount);

  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');

  const handleConnectClick = (name, desc, type, url) => {
    setShowPopup(true);
    setName(name);
    setDesc(desc);
    setType(type);
    setUrl(url);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const endOffset = itemOffset + 15;
    setCurrentItems(data.slice(itemOffset, endOffset));
    const pageCount = Math.ceil(data.length / 15);
  }, [itemOffset, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 15) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col pt-6">
      {
        <div className=" w-[100%] flex flex-1 flex-row flex-wrap gap-20 justify-center ">
          {currentItems.map((pic) => (
            <div
              className="p-4 flex flex-col justify-center gap-2"
              key={pic.id}>
              <img
                src={pic.card_images[0].image_url}
                alt={pic.name}
                className="w-[175.5px] h-[256px] cursor-pointer"
                onClick={() => {
                  handleConnectClick(
                    pic.name,
                    pic.desc,
                    pic.type,
                    pic.card_images[0].image_url
                  );
                }}
              />
              {showPopup && (
                <ConnectPopup
                  onClose={handleClosePopup}
                  name={name}
                  desc={desc}
                  type={type}
                  url={url}
                />
              )}
              <button className="font-poppins text-white flex justify-center items-center">
                <img src={add} alt="Add" className="w-[20px] h-[20px]" />
              </button>
            </div>
          ))}
        </div>
      }
      <div className=" flex justify-center items-center">
        <ReactPaginate
          className=" text-secondary flex gap-2 mt-16 mb-16 text-xs"
          breakLabel="....."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
