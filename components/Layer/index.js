import { CubeIcon, MenuIcon, CogIcon, DotsHorizontalIcon, UserAddIcon, SearchIcon, PaperClipIcon, PhotographIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import { useEffect, useRef, useState } from "react";
import Menu from './menu';

export default function Layer({ children }) {
  const [ search, setSearch ] = useState();
  const [ tab, setTab ] = useState("");
  const [ searchResult, setSearchResult ] = useState();
  const searchRef = useRef();

  const handleSearch = async (event) => {
    console.log(event.target.value);
    const rawResponse = await fetch(`/api/search?q=${event.target.value}`);
    const { data, message, success } = await rawResponse.json();
    if (success) {
      setSearchResult(data);
    } else {
      console.log(message);
    }
  }

  useEffect(() => {
    if (!children) {
      setTab("menu");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
     <div className="p-1 h-screen w-full bg-slate-400">
      <div className=" h-full bg-white overflow-hidden flex flex-col rounded-xl overflow-hidden shadow-xl"  >
        {/* <!-- navbar --> */}
        <div className=" border-b px-5 py-1 flex justify-between items-center">
            <span>
              <button type='button' onClick={() => setTab((prevTab) => prevTab === "menu" ? "" : "menu")}>
                <CubeIcon className="w-10 h-10 text-blue-400" aria-hidden="true" />
              </button>
              {/* <MenuIcon className="w-5 h-5 text-blue-400" aria-hidden="true" /> */}
            </span>
            {/* <!-- search --> */}
            <div className=" w-2/3 md:w-1/2 relative focus-within:shadow-lg">
                <div className="flex items-center w-full focus-within:border px-3 py-2  focus-within:border-b-0">
                  <SearchIcon className="h-5 stroke-slate-300 mr-5" aria-hidden="true" />
                  <input
                    type="text"
                    ref={searchRef}
                    onFocus={() => setSearch(true)}
                    onBlur={() => setSearch(false)}
                    onChange={handleSearch} placeholder="Search.."
                    className=" w-full outline-none placeholder:text-slate-300 font-semibold"
                  />
                </div>
                {/* <!-- alpine js  --> */}
                {(search) && (
                  <div className="absolute w-full border bg-white">
                      <div className="px-4 py-1 flex justify-between items-center border-b">
                          <p className="text-sm font-medium text-slate-600">Recent Search</p>
                          <p
                            onClick={(e) => {
                              if (searchRef.current) {
                                searchRef.current.value = '';
                              }
                            }}
                            className="text-xs text-slate-400 cursor-pointer"
                          >Clear All</p>
                      </div>

                      { searchResult?.users.map((user) => (
                        <div
                          key={user.id}
                          className="w-full px-4 py-3 border-b last:border-b-0 flex items-start hover:bg-slate-50 cursor-pointer">
                          <img src={user.image} className="h-12 w-12 border rounded-full" alt="" />
                          <div className="ml-4">
                              <p className="text-md font-semibold text-slate-600 m-0 p-0">{ user.name }</p>
                              <p className="text-xs text-slate-400 -mt-0.5">{ user.email }</p>
                          </div>
                        </div>
                      ))}
                      { searchResult?.blog.map((note) => (
                        <div
                          key={note.id}
                          className="w-full px-4 py-3 border-b last:border-b-0 flex items-start hover:bg-slate-50 cursor-pointer">
                          {/* <img src={note.image} className="h-12 w-12 border rounded-full" alt="" /> */}
                          <div className="ml-4">
                              <p className="text-md font-semibold text-slate-600 m-0 p-0">{ note.title }</p>
                              <p className="text-xs text-slate-400 -mt-0.5">{ note.description }</p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
            </div>
            {/* <!-- profile --> */}
            <div className="flex space-x-4 items-center">
              {/* <CogIcon className="h-6 w-6 stroke-slate-400" aria-hidden="true" /> */}
              {/* <img src="https://source.unsplash.com/random/500x500/?face" className="h-10 w-10 rounded-full" alt="" /> */}

            </div>

        </div>
        {/* <!-- body --> */}
        <div className="h-full flex">
            {/* <!-- slidebar 1 --> */}
            <div className={`${tab === "menu" ? '' : 'hidden'} w-full lg:block h-full lg:w-64 border-r pt-10 px-5`}>
              <Menu/>
            </div>
            <div className={`${tab === "menu" ? 'hidden' : ''} w-full lg:block h-full`}>
              { children }
            </div>
        </div>
      </div>
    </div>
  )
}