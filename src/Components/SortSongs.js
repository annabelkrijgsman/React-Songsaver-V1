import React from "react"

function SortSongs(props) {
    return (
        <div>
            <input name="sort-songs" id="sort-AZ" type="radio" onClick={props.sortByAscending} />
            <label htmlFor="sort-AZ">Sort artists from A-Z</label>
            <input name="sort-songs" id="sort-ZA" type="radio" onClick={props.sortByDescending} />
            <label htmlFor="sort-ZA">Sort artists from Z-A</label>
        </div>
    )
}

export default SortSongs