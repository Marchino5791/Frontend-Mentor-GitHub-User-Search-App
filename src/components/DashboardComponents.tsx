export const DashboardComponents = ({
  title,
  value,
}: {
  title: string
  value: number
}) => {
  return (
    <div className="text-center sm:text-left">
      <h2 className="text-[.6875rem] sm:text-[.8125rem] text-project-darksilver dark:text-white">
        {title}
      </h2>
      <p className="text-project-black dark:text-white font-bold sm:text-[1.375rem]">
        {value}
      </p>
    </div>
  )
}
