

export const Header = () => {
  return (
    <header className="bg-gray-700 text-white h-10 shadow px-y px-6 flex 
    justify-between items-center">
        <h1 className="text-xl font-semibold">Contestants & Battles</h1>
        <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">
                My Profile
            </span>
            <img src="https://media.tenor.com/hM7hZLP8hwgAAAAe/cooked-dog-meme.png" 
            width={40}
            height={40}
            className="rounded-full border"
            alt="avatar" />
        </div>
    </header>
  )
}
