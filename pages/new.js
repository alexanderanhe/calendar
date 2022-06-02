import { useState } from 'react';
import { useRouter } from 'next/router';

const DEFAULT_FORM = {
  name: '',
  // imageUrl: 'https://iconarchive.com/download/i78247/igh0zt/ios7-style-metro-ui/MetroUI-Other-Task.ico',
  imageUrl: 'https://source.unsplash.com/300x300/?productivity,city',
  description: '',
  startDatetime: '',
  endDatetime: '',
};

export default function New() {
  const router = useRouter();
  const [ form, setForm ] = useState(DEFAULT_FORM);
  const [ messageError, setMessageError ] = useState(false);

  const hanldeChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleBack = (e) => {
    e.preventDefault();
    router.push('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageError(false);
    const rawResponse = await fetch('/api/meetings', {
      method: 'POST',
      body: JSON.stringify({...form})
      }
    );
    const { message, success } = await rawResponse.json();
    if (success) {
      router.push('/');
    } else {
      setMessageError(message);
    }
  }

  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <form className="w-full mx-auto max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-date-start">
                Date Start
              </label>
              <input
                id="grid-date-start"
                type="datetime-local"
                name="startDatetime"
                onChange={hanldeChange}
                placeholder="2022-05-20T09:00"
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-date-end">
                Date End
              </label>
              <input
                id="grid-date-end"
                type="datetime-local"
                name="endDatetime"
                onChange={hanldeChange}
                placeholder="2022-05-20T11:30"
                required
                defaultValue={form?.startDatetime}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-title">
                Title
              </label>
              <input
                id="grid-title"
                type="text"
                name="name"
                onChange={hanldeChange}
                placeholder="Meeting with ..."
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
                Description
              </label>
              <input
                id="grid-description"
                type="text"
                name="description"
                onChange={hanldeChange}
                placeholder="Write Something ... [Optional]"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
              {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
          {/* <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
                Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-description"
                type="text"
                name="imageUrl"
                onChange={hanldeChange}
                placeholder="Put and Image URL"
                required
                value="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-city" type="text"
                placeholder="Albuquerque"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                State
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                  id="grid-state">
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-zip" type="text"
                placeholder="90210"
              />
            </div>
          </div> */}
          <p className="text-red-500 italic">{ messageError }</p>
          <div className="flex items-center justify-between">
            <a
              href="#"
              onClick={handleBack}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Cancel
            </a>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}