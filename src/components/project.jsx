import styles from '../styles/project.module.css'

export default function Project({ hrefLive, hrefGithub, imgSrc, title, description }) {
    return (
        <div className={styles.projectLink}>
            <img src={imgSrc} alt={title} className={styles.projectImg} />
            <div className={styles.projectLinkText}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <div className={styles.projectLinkLinks}>
                <a href={hrefLive} target='_BLANK'>Live Site</a>
                <a href={hrefGithub} target='_BLANK'>Github Repository</a>
            </div>
        </div>
    )
}