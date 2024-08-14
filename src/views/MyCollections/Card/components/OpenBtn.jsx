import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function OpenBtn(id) {

  return (
    <Link to={`/collection/${id.id}`} className="text-xs h-fit w-fit flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </Link>
  )
}

export default OpenBtn