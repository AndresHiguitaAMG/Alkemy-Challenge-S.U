import React from 'react'

const Results = () => {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get("keyword");
  return (
    <div>
    <p>Results: {keyword}</p>
    </div>
  )
}

export default Results;