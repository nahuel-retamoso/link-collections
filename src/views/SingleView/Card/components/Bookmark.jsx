import { useEffect } from "react";

function Bookmark (bookmark) {

    return (
        <div className="flex items-center mb-4">
            <div className="avatar mr-4">
                <div className="w-6 rounded">
                    <img src={bookmark?.bookmark.favicon} alt={`${bookmark?.bookmark.title} favicon`} />
                </div>
            </div>
            <a href={bookmark?.bookmark.url} className="link link-hover" target="_blank" rel="noopener noreferrer">
                {bookmark?.bookmark.title}
            </a>
        </div>
    )
}
export default Bookmark;