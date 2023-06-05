import LinkButton from "../LinkButton"
import Button from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props) {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>
              <div className={styles.Links} >
                    <LinkButton href={props.githubUrl} >GitHub</LinkButton>
                    <LinkButton href={props.linkedinUrl} >LinkedIn</LinkButton>
                    <LinkButton href={props.twitterUrl} >Twiter</LinkButton>
                </div>
               
            </ProfileSection>
        </div>
    )
}