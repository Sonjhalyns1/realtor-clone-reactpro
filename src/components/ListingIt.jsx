import React from 'react'
import { Link } from 'react-router-dom'

export default function ListingIt({listing, id}) {
  return (
  <li>
    <Link to= {`/category/${listing.type}/${id}`}>
        <img srs={listing.imgUrls[0]} alt='' />
    </Link>
    </li>
  )
}
