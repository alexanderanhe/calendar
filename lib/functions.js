import { TicketIcon, AcademicCapIcon, BookmarkIcon, MapIcon } from '@heroicons/react/outline';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const icons = {
  entertainment: () => (
   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white sm:mx-0 sm:h-10 sm:w-10">
     <TicketIcon className="w-5 h-5" aria-hidden="true" />
   </div>
  ),
  academic: () => (
   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
     <AcademicCapIcon className="w-5 h-5" aria-hidden="true" />
   </div>
  ),
  task: () => (
   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
     <BookmarkIcon className="w-5 h-5" aria-hidden="true" />
   </div>
  ),
  travel: () => (
   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white sm:mx-0 sm:h-10 sm:w-10">
     <MapIcon className="w-5 h-5" aria-hidden="true" />
   </div>
  ),
  none: () => (
   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
     <BookmarkIcon className="w-5 h-5" aria-hidden="true" />
   </div>
  )
};

export const DEFAULT_MEETING = {
  // imageUrl: 'https://iconarchive.com/download/i78247/igh0zt/ios7-style-metro-ui/MetroUI-Other-Task.ico',
  imageUrl: 'https://source.unsplash.com/300x300/?productivity,city',
  name: '',
  label: 'task',
  startDatetime: null,
  endDatetime: null,
  description: '',
  active: true,
};
