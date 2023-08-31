import { MainSection } from './components/MainSection'
import { SearchBar } from './components/SearchBar'
import { Header } from './components/Header'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState<any>('https://api.github.com/users/octocat')
  const [count, setCount] = useState<number>(1)

  function up() {
    setCount(count + 1)
  }

  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, [count])

  function getName(nameFromSearch: string) {
    setData('https://api.github.com/users/' + nameFromSearch)
  }

  return (
    <div className="w-full sm:w-4/5 max-w-[45.5rem] mx-6 sm:mx-auto ">
      <Header />
      <SearchBar
        message={data.message}
        handleCallBack={getName}
        countFromChild={up}
      />
      <MainSection
        image={data.avatar_url}
        name={data.name}
        login={data.login}
        url={data.html_url}
        joined={data.created_at}
        bio={data.bio}
        repos={data.public_repos}
        followers={data.followers}
        following={data.following}
        location={data.location}
        site={data.blog}
        twitter={data.twitter_username}
        company={data.company}
      />
    </div>
  )
}

export default App
