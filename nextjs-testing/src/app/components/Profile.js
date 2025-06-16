import styles from './Profile.module.css';

export default function Profile({ profile }) {
  // console.log("props ", props)
  console.log("profile ", profile);

  return (
    <div className={styles.profile}>
      <img
        className={styles['profile-image']}
        width={150}
        height={150}
        src={profile.imgUrl}
        alt={profile.name}
      />

      <div>{profile.name}</div>

      {/* {console.log("hello")} */}
    </div>

  )
}
