import styles from "./styles.module.css"

export default function ProfileSection (props) {
    return(
        <div className={styles.wapprer}>
            {props.children}
        </div>
    )
}