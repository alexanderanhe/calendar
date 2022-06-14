import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';
import { Fragment } from 'react';
import { classNames, icons } from '../../lib/functions';

export default function Meeting({ meeting, update, editting }) {
  let startDateTime = parseISO(meeting.startDatetime)
  let endDateTime = parseISO(meeting.endDatetime);

  const fetchMeeting = async (event, {_id, active}, method) => {
    // event.preventDefault();
    const rawResponse = await fetch('/api/meetings', {
        method,
        body: method === 'PUT' ? JSON.stringify({_id, active}) : _id
      }
    );
    const { message, success } = await rawResponse.json();
    if (success) {
      update();
    } else {
      console.log(message);
    }
  }

  const handleCancel = (data) => (event) => fetchMeeting(event, { ...data, active: false }, 'PUT');

  const handleDelete = (data) => (event) => fetchMeeting(event, data, 'DELETE');

  const handleEdit = (meeting) => (event) => {
    event.preventDefault();
    editting(meeting)
  };

  return (
    <li className={`flex items-center pr-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 ${meeting.active || 'line-through'}`}>
      {/* <Image
        src={meeting.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
        width={45}
        height={45}
      /> */}
      { icons[meeting.label || 'none']() }
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, 'h:mm a')}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-50 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 z-10">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={handleEdit(meeting)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={handleCancel(meeting)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={handleDelete(meeting)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Delete
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  )
}