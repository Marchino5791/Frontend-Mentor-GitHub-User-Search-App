import { DashboardComponents } from './DashboardComponents'

export const Dashboard = ({
  repos,
  followers,
  following,
}: {
  repos: number
  followers: number
  following: number
}) => {
  return (
    <div className="col-start-1 lg:col-start-2 col-end-3 grid grid-cols-3 py-5 sm:py-4 px-4 sm:px-8 mb-6 sm:mb-8 rounded-2xl bg-project-almostwhite dark:bg-project-dark-black">
      <DashboardComponents title="Repos" value={repos} />
      <DashboardComponents title="Followers" value={followers} />
      <DashboardComponents title="Following" value={following} />
    </div>
  )
}
