export const Link = ({
  icon,
  title,
  link,
  hover,
}: {
  icon: JSX.Element
  title: string | undefined | null
  link: string | undefined
  hover: string | null
}) => {
  return (
    <li className="list-none grid grid-cols-[2rem_1fr] text-[.8125rem] sm:text-[.9375rem]">
      {icon}

      {title == null || title == '' ? (
        <p className="opacity-50 text-project-darksilver dark:text-white">
          Not Available
        </p>
      ) : (
        <a
          href={link}
          target="_blank"
          className={`text-project-darksilver dark:text-white break-all ${hover}`}
        >
          {title}
        </a>
      )}
    </li>
  )
}
