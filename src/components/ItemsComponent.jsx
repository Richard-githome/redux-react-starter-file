import styles from "../styles/App.module.css";

const ItemComponent = () => {

  return (
    <>
      <div className={styles.item_wrapper}>
          <div className={styles.no_todo_container}>
            <p className={styles.no_todo_item}>No Todo Added</p>
          </div>
      </div>
    </>
  );
};

export default ItemComponent;