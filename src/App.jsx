import Profile from "./components/Profile";




export default function App(){
    return(
        <div className="app">
            <Profile
            avatar="https://static.vecteezy.com/ti/vecteur-libre/t1/2002332-ablack-man-avatar-character-isolated-icon-gratuit-vectoriel.jpg"
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