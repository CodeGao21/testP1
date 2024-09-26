import Profile from "./profile";
import { Gallery } from "./gallery";
import { CardGallery } from "./cardgallery";
import { Sidebar } from "./sidebar";

export function Home() {
  return (
    <div className="flex p-5"> {/* Use flex to create two columns */}
      
      {/* Left Column: Main content (Profile and CardGallery) */}
      <div className="flex-1 space-y-4"> 
        <div className="p-5">
          <Profile />
        </div>
        <div className="p-5 bg-gray-300">
          <CardGallery />
        </div>
      </div>

      {/* Right Column: Sidebar */}
      <div className="w-1/4 p-5 bg-gray-100"> {/* Sidebar takes 1/4 of the width */}
        <Sidebar />
      </div>
    </div>
  );
}
