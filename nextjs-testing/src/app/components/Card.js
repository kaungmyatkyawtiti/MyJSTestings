import styles from "./Card.module.css";

export default function Card(props) {
  console.log("Card props ", props);

  return (
    <div className={styles.card}>
      {props.header}
      {props.children}
    </div>
  )
}
