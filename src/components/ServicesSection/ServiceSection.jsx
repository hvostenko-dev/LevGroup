import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import services from '../../data/services';
import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './ServiceSection.module.css';

export default function ServicesSection({ onSelectService }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'he';

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>{t('services.badge')}</span>
          <h2 className={styles.title}>{t('services.title')}</h2>
          <p className={styles.subtitle}>{t('services.subtitle')}</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.gridItem}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title[lang] || service.title.en}
                description={
                  service.description[lang] || service.description.en
                }
                icon={service.icon}
                ctaLabel={t('services.inquire')}
                onSelect={() => onSelectService && onSelectService(service.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
