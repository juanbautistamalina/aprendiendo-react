import { TwitterFollowCard } from "./TwitterFollowCard.jsx"
import "./App.css"

const users = [
    {
        userName: "juanbautistamalina",
        name: "Juan Bautista Malina",
        isFollowing: true
    },
    {
        userName: "soydalto",
        name: "Lucas Dalto",
        isFollowing: true
    },
    {
        userName: "midudev",
        name: "Miuguel Ángel Durán",
        isFollowing: true
    },
    {
        userName: "elonmusk",
        name: "Elon Musk",
        isFollowing: true
    },
]

export function App() {
    return (
        <section className="App">
            {users.map(user =>{
                const {userName, name, isFollowing} = user
                return(
                    <TwitterFollowCard 
                    key={userName}
                    userName={userName}
                    isFollowing = {isFollowing}
                    name={name}  />
                )
            })}
        </section>
    )
}
