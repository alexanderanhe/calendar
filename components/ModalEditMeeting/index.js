import { useState, useEffect } from "react";
import { DEFAULT_MEETING } from '../../lib/functions';

export default function ModalEditMeeting({ meeting, show, setShow, update }) {
  const [ form, setForm ] = useState(DEFAULT_MEETING);
  const [ messageError, setMessageError ] = useState(false);

  const hanldeChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageError(false);
    const rawResponse = await fetch('/api/meetings', {
        method: meeting?._id ? 'PUT' : 'POST',
        body: JSON.stringify({...form, active: true})
      }
    );
    const { message, success } = await rawResponse.json();
    if (success) {
      setShow(null);
      update();
    } else {
      setMessageError(message);
    }
  };

  useEffect(() => {
    setForm(meeting);
  }, [ meeting ]);

  return show && (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <form className="w-full mx-auto max-w-lg" onSubmit={handleSubmit}>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">{ meeting?._id ? 'Edit' : 'New' } meeting</h3>
                    <div className="mt-2">

                      <div className="max-w-md mx-auto md:max-w-4xl">
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
                              required
                              defaultValue={form?.startDatetime}
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
                              required
                              defaultValue={form?.endDatetime}
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                              />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="label">
                              Label
                            </label>
                            <div className="relative">
                              <select
                                name="label"
                                onChange={hanldeChange}
                                required
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                                id="label"
                                defaultValue={meeting?.label}
                              >
                                <option hidden value="">Category</option>
                                <option value="task">
                                  Task
                                </option>
                                <option value="academic">
                                  Academic
                                </option>
                                <option value="entertainment">
                                  Entertainment
                                </option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                            </div>
                          </div>
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
                              defaultValue={form?.name}
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
                              defaultValue={form?.description}
                              placeholder="Write Something ... [Optional]"
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            />
                            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                          </div>
                        </div>
                        <p className="text-red-500 italic">{ messageError }</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShow(null)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}