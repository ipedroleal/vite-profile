import Profile from "./components/Profile";

export default function App() {
    return (
        <div className="app">
            <Profile
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8p1JvDrQSMwyhwWVyhBmtCyCmCJ8umJpZQ&usqp=CAU"
                name="Pedro Leal"
                bio="Front-end Developer React jr"
                phone="+351 935192067"
                email="pedro.leal.miranda@gmail.com"
                githubUrl="https://github.com/ipedroleal"
                linkedinUrl="https://www.linkedin.com/in/ipedroleal/"
                twitterUrl="https://twitter.com/ipedromiranda"
            />
        </div>
    )
}