import { Layer, Loader } from '../components/';
import { DotsHorizontalIcon, UserAddIcon, PaperClipIcon, PhotographIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export default function Messages() {
  const [ tab, setTab ] = useState("chat-list");
  const [ loading, setLoading ] = useState(false);
  const [ chats, setChats ] = useState([
    {
      key: 1,
      name: "Yaroslav Zubkp",
      image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
      email: "somone@somewhere.com",
      lastMessage: "is is long ipsum avaliable...",
    },
    {
      key: 2,
      name:  "Alison Alison",
      image: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 ",
      email: "somone@somewhere.com",
      lastMessage: "Hello",
    },
    {
      key: 3,
      name:  "Mircel Jones",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500 ",
      email: "somone@somewhere.com",
      lastMessage: "Ok, Thanks.",
    },
    {
      key: 4,
      name: "Uran Poland",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
      email: "somone@somewhere.com",
      lastMessage: "We own hidden lake..",
    },
    {
      key: 5,
      name: "Yaroslav Zubkp",
      image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
      email: "somone@somewhere.com",
      lastMessage: "is is long ipsum avaliable...",
    },
    {
      key: 6,
      name:  "Alison Alison",
      image: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 ",
      email: "somone@somewhere.com",
      lastMessage: "Hello",
    },
  ]);

  return (
    <>
      { loading && <Loader message={loading}/>}
      <Layer>
        <div className={`${tab === "chat-list" ? '' : 'hidden'} w-full lg:flex h-full lg:w-96 bg-slate-50 border-r flex flex-col`}>
          <div className="h-16 border-b px-4 flex items-center justify-center space-x-4">
            <div className="px-4 py-4 border-b-4 border-b-blue-500">All</div>
            <div className="px-4 py-4 ">Archived</div>
          </div>
          <div className="h-full">
            {chats.map(({key, image, name, email, lastMessage }) => (
              <div
                key={key}
                onClick={() => setTab("chat")}
                className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                <img src={image} className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                <div className="ml-4">
                    <p className="text-md font-semibold text-slate-600 m-0 p-0">{ name }
                    </p>
                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold">{` `}{ lastMessage}</p>
                </div>
              </div>
            ))}
          </div>



      </div>
      <div className={`${tab === "chat" ? 'w-full' : 'hidden'} h-full flex flex-col`}>
          <div className="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
              <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setTab("chat-list")}
                    className="-my-1.5 flex md:hidden flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  >
                    <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <img className="h-10 w-10 overflow-hidden rounded-full"
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                      alt="" />
                  <p className="font-semibold ml-3 text-slate-600">Mircel Jones</p>
              </div>
              <div className="flex items-center space-x-5">
                <UserAddIcon className="h-9 bg-slate-50 rounded-full stroke-slate-400 p-2" aria-hidden="true" />

                <DotsHorizontalIcon className="h-6 w-6 stroke-slate-400" aria-hidden="true" />

              </div>
          </div>
          <div className="h-full px-10 py-4 overflow-x-auto">
              {/* <!-- message container --> */}
              <div className="text-center  my-5">
                  <hr className="-mb-3" />
                  <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Wednesday, Feburary
                      5</span>
              </div>
              {/* <!-- messages --> */}
              <div className="w-full flex flex-start overflow-y-auto">
                  <div className="w-full sm:w-10/12 xl:w-1/2">
                      <div className="flex items-center">
                          <img className="h-5 w-5 overflow-hidden rounded-full"
                              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                              alt="" />
                          <p className="font-semibold ml-3 text-sm text-slate-600">Mircel Jones <span
                                  className="text-slate-400 text-xs">3:21 PM</span></p>
                      </div>

                      <div className="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                          <p className=" text-sm text-slate-500">
                              Hey all, <br/>
                              There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which don't look even slightly believable.
                          </p>
                      </div>
                  </div>
              </div>
              {/* <!-- me --> */}
              <div className="w-full flex justify-end mt-3">
                  <div className="w-full sm:w-10/12 xl:w-1/2 ">
                      <div className="flex items-center justify-end">
                          <p className="font-semibold mr-3 text-sm text-slate-600">Me <span
                              className="text-slate-400 text-xs">3:25 PM</span></p>

                          <img className="h-5 w-5 overflow-hidden rounded-full"
                              src="https://source.unsplash.com/random/500x500/?face"
                              alt="" />
                        
                      </div>

                      <div className="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                          <p className=" text-sm text-white">
                              Hey, <br/>
                              we are own hidden lake forest which is netural lake are generaly found in mountain.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="text-center  my-5">
                  <hr className="-mb-3" />
                  <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Today, 2:15 AM
                      5</span>
              </div>
              {/* <!-- messages --> */}
              <div className="w-full flex flex-start">
                  <div className="w-full sm:w-10/12 xl:w-1/2">
                      <div className="flex items-center">
                          <img className="h-5 w-5 overflow-hidden rounded-full"
                              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                              alt="" />
                          <p className="font-semibold ml-3 text-sm text-slate-600">Mircel Jones <span
                                  className="text-slate-400 text-xs">3:21 PM</span></p>
                      </div>

                      <div className="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                          <p className=" text-sm text-slate-500">
                              ok, Thanks
                          </p>
                      </div>
                  </div>
              </div>


          </div>
          <div className="  w-full  px-5 py-3">
              <div
                  className="h-12 flex justify-between px-3 items-center border border-transparent bg-slate-50 focus-within:border-slate-300 rounded-lg">
                  <input type="text" className="w-full px-3 bg-transparent outline-none placeholder:text-slate-400"
                      placeholder="Type your message" />
                  <div className="flex items-center space-x-4">
                    <PaperClipIcon className="h-5 stroke-slate-300" aria-hidden="true" />
                    <PhotographIcon className="h-5 stroke-slate-300" aria-hidden="true" />
                  </div>
              </div>
          </div>
      </div>
      </Layer>
    </>
  )
}