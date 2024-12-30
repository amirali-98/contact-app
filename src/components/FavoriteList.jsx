import styles from "./FavoriteList.module.css";

function FavoriteList({ favoriteList }) {
  return (
    <div className={styles.favoriteList}>
      <h3>Favorites</h3>
      <ul>
        {favoriteList.map(f => (
          <li key={f.id}>
            <img src={f.image} alt={f.title} />
            <span>{f.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteList;
