import { Dashboard } from './Dashboard'
import { LinkSection } from './LinkSection'

export const MainSection = ({
  image,
  name,
  url,
  login,
  joined,
  bio,
  repos,
  followers,
  following,
  location,
  site,
  twitter,
  company,
}: {
  image: string
  name: string | null
  url: string
  login: string
  joined: string
  bio: string | null
  repos: number
  followers: number
  following: number
  location: string | null
  site: string
  twitter: string | null
  company: string | null
}) => {
  // transform date
  const date: Date = new Date(joined)
  const options: { year: string; month: string; day: string } = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return (
    <main className="gap-x-5 sm:gap-x-10 lg:gap-x-9 bg-white rounded-2xl pt-8 px-6 pb-12 sm:p-10 lg:p-12 shadow-xl dark:bg-project-dark-darkgray">
      <img
        src={image}
        alt={`${name}'s avatar`}
        className="bg-project-almostwhite dark:bg-project-dark-black rounded-full border-none w-[4.375rem] sm:w-[7.25rem] h-[4.375rem] sm:h-[7.25rem] row-start-1 lg:row-end-3"
      />
      <div className="col-start-2 lg:flex lg:justify-between">
        <div>
          <h1 className="font-bold text-project-black dark:text-white sm:text-[1.625rem] ">
            {name == null ? login : name}
          </h1>
          <a
            href={url}
            target="_blank"
            className="text-[0.8125rem] text-project-cyan mb-2 lg:mb-0 sm:text-base hover:underline"
          >
            @{login}
          </a>
        </div>
        <p className="text-[0.8125rem] text-project-gray dark:text-white sm:text-[0.9375rem]">
          Joined {date.toLocaleDateString('en-GB', options)}
        </p>
      </div>
      <p className="col-start-1 lg:col-start-2 col-end-3 mt-8 sm:mt-6 lg:mt-5 mb-6 sm:mb-8 text-[0.8125rem] text-project-gray leading-6 dark:text-white sm:text-[0.9375rem]">
        {bio == null ? (
          <span className="opacity-50">This profile has no bio</span>
        ) : (
          bio
        )}
      </p>

      {/* dashboar */}
      <Dashboard repos={repos} followers={followers} following={following} />

      {/* Links section*/}
      <LinkSection
        location={location}
        site={site}
        twitter={twitter}
        company={company}
      />
    </main>
  )
}
