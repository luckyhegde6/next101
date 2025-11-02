'use client';

const ExploreBtn = () => {
  return (
    <div>
      <button type='button' id='exploreBtn' className="mt-7 mx-auto py-2 bg-blue-500 text-white rounded" onClick={() => console.log('Explore Click')}>
       <a href="#event" className="block">Explore Dev Events</a>
      </button>
    </div>
  )
}

export default ExploreBtn