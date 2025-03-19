import styles from '../styles/portfolio.module.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import furryFriendsImg from '/images/furry-friends.png'
import brainBoostImg from '/images/brain-boost.png'
import Project from '../components/project.jsx'

export default function Home() {
    return (
        <>
        <Header />
        <main className={styles.main}>
            <h2>Portfolio</h2>
            <div className={styles.projectsBackground}>
                <div className={styles.projectsContainer}>
                    <Project 
                        hrefLive="https://brain-boost-sawyer-6ebf05ed6f61.herokuapp.com/"
                        hrefGithub="#"
                        imgSrc={brainBoostImg}
                        title="Brain Boost"
                        description="The Brain Boost Study Application is a website to help enhance a users study efficiency with study sets and flashcards."
                    />
                    <Project 
                        hrefLive="https://krsawyer100.github.io/com6338-10-10-sawyer-spets/"
                        hrefGithub="#" 
                        imgSrc={furryFriendsImg}
                        title="Furry Friends"
                        description="Furry Friends is a website that shows dogs and cats that are available for adoption in your area."
                    />
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}
