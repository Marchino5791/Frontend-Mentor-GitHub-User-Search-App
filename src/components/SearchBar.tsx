import React from 'react'
import searchIcon from '../assets/icon-search.svg'

export const SearchBar = ({
  message,
  handleCallBack,
  countFromChild,
}: {
  message: string
  handleCallBack: any
  countFromChild: any
}) => {
  const [search, setSearch] = React.useState('')

  function go() {
    handleCallBack(search)
    countFromChild()
  }

  return (
    <nav className="bg-white flex justify-between items-center py-2 pl-4 pr-2 mb-4 gap-2 rounded-2xl shadow-xl dark:bg-project-dark-darkgray sm:mb-6 sm:pl-8 sm:pr-[.625rem] sm:py-[.625rem]">
      <div className="flex gap-2 w-full items-center">
        <img src={searchIcon} alt="search icon" />
        <input
          name="search"
          type="text"
          placeholder="Search GitHub username…"
          className="focus:outline-none w-full text-[.8125rem] leading-6 bg-white dark:bg-project-dark-darkgray placeholder:text-project-darksilver dark:text-white dark:placeholder:text-white sm:text-lg"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          autoFocus
          autoComplete="off"
        />
        {message == 'Not Found' && (
          <p className="text-project-error whitespace-nowrap mr-4">
            No results
          </p>
        )}
      </div>
      <div className="flex gap-4">
        <button
          className="w-[5.25rem] h-[2.875rem] leading-6 bg-project-cyan rounded-xl text-sm font-bold text-white sm:text-base"
          onClick={go}
        >
          Search
        </button>
      </div>
    </nav>
  )
}
