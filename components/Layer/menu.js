import { HomeIcon, CalendarIcon, ChatAltIcon, UserIcon, UsersIcon, FolderIcon, CollectionIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Menu() {
  const [pageActive] = useState('calendar');
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <p className="text-xs font-medium text-gray-400">MAIN</p>
      {/* <!-- menu-item --> */}
      <Link href="/">
        <div
          className={`${router.pathname === "/" ? 'text-blue-500' : 'text-slate-500'} mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center`}>
            <HomeIcon className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" aria-hidden="true" />
            Dashboard
        </div>
      </Link>

      <p className="text-xs font-medium text-gray-400 mt-8">APPLICATIONS</p>
      <Link href="/calendar">
        <div className={`${router.pathname === "/calendar" ? 'text-blue-500' : 'text-slate-500'} mt-4 py-1.5 text-sm font-medium hover:text-blue-500 group cursor-pointer flex items-center`}>
          <CalendarIcon className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" aria-hidden="true" />
          Calendar
        </div>
      </Link>
      {/* <Link href="/messages">
        <div className={`${router.pathname === "/messages" ? 'text-blue-500' : 'text-slate-500'} mt-4 py-1.5 text-sm font-medium hover:text-blue-500 group cursor-pointer flex items-center`}>
          <ChatAltIcon className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" aria-hidden="true" />
          Messages
        </div>
      </Link> */}

      {/* <div
        className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
          <UserIcon className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" aria-hidden="true" />
          Contacts
      </div>

      <div
        className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
          <UsersIcon className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" aria-hidden="true" />
          Team Members
      </div>

      <div
          className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
          <FolderIcon className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" aria-hidden="true" />
          Projects
      </div>*/}

      {/* <Link href="/player">
        <div
          className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
            <CollectionIcon className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" aria-hidden="true" />
            Job Listing
        </div>
      </Link> */}
    </>
  )
}