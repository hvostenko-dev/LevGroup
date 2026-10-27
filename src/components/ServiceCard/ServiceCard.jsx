import styles from './ServiceCard.module.css';

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  ctaLabel,
  onSelect,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} aria-hidden="true" />
      </div>

      <h3 className={styles.title}>{title}</h3>

      {description && <p className={styles.description}>{description}</p>}

      {ctaLabel && (
        <button type="button" className={styles.cardAction} onClick={onSelect}>
          <span>{ctaLabel}</span>
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </button>
      )}
    </article>
  );
}
