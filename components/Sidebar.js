import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session, status } = useSession();
  // console.log(session);
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="flex flex-col space-y-4">
        <button>
          <span className="flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>
            <HomeIcon className="h-5 w-5" />
            <p>Logout</p>
          </span>
        </button>
        <button>
          <span className="flex items-center space-x-2 hover:text-white">
            <HomeIcon className="h-5 w-5" />
            <p>Home</p>
          </span>
        </button>
        <button>
          <span className="flex items-center space-x-2 hover:text-white">
            <SearchIcon className="h-5 w-5" />
            <p>Search</p>
          </span>
        </button>
        <button>
          <span className="flex items-center space-x-2 hover:text-white">
            <LibraryIcon className="h-5 w-5" />
            <p>Your Library</p>
          </span>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button>
          <span className="flex items-center space-x-2 hover:text-white">
            <PlusCircleIcon className="h-5 w-5" />
            <p>Create Playlist</p>
          </span>
        </button>
        <button>
          <span className="flex items-center space-x-2 hover:text-white">
            <HeartIcon className="h-5 w-5" />
            <p>Liked Songs</p>
          </span>
        </button>
        <button>
          <span className="flex items-center space-x-2 hover:text-white">
            <RssIcon className="h-5 w-5" />
            <p>Your episodes</p>
          </span>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        {/* Playlists */}
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      </div>
    </div>
  );
}

export default Sidebar;
