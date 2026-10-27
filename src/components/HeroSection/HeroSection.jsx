import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa';
import Logo from './Logo';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { t } = useTranslation();

  const stats = [
    {
      value: t('stats.support.value'),
      label: t('stats.support.label'),
    },
    {
      value: t('stats.transparency.value'),
      label: t('stats.transparency.label'),
    },
    {
      value: t('stats.services.value'),
      label: t('stats.services.label'),
    },
    {
      value: t('stats.location.value'),
      label: t('stats.location.label'),
    },
  ];

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      >
        <span className={styles.badge}>{t('hero.badge')}</span>

        <div className={styles.logoWrapper}>
          <Logo className={styles.logo} />
        </div>

        <h1 className={styles.slogan}>{t('hero.slogan')}</h1>

        <p className={styles.subtitle}>{t('hero.subtitle')}</p>

        <div className={styles.ctaGroup}>
          <a
            href="https://wa.me/972524388967"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            <FaWhatsapp className={styles.ctaIcon} />
            <span>{t('hero.button')}</span>
          </a>

          <a href="#services" className={styles.ctaSecondary}>
            <span>{t('hero.secondaryButton')}</span>
            <FaArrowDown className={styles.arrowIcon} />
          </a>
        </div>

        <motion.div
          className={styles.statsBar}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className={styles.softFade} />
    </section>
  );
}
