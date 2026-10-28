import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaUniversalAccess,
  FaShieldAlt,
  FaCookieBite,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import services from '../../data/services';
import styles from './ContactSection.module.css';

export default function ContactSection({ selectedService, onServiceChange, onOpenA11y }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'he';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const getSelectedServiceTitle = () => {
    if (!selectedService) return t('form.serviceAll');
    const found = services.find((s) => s.id === selectedService);
    if (!found) return t('form.serviceAll');
    return found.title[lang] || found.title.en;
  };

  const validateForm = () => {
    const trimmedName = name.trim();
    const trimmedPhone = phone.replace(/[\s()-]/g, '');
    if (trimmedName.length < 2 || trimmedPhone.length < 7) {
      setStatus('error');
      return false;
    }
    setStatus('success');
    return true;
  };

  const buildInquiryText = () => {
    const serviceLabel = getSelectedServiceTitle();
    const lines = [
      `LEV GROUP — ${t('form.title')}`,
      `${t('form.name')}: ${name.trim()}`,
      `${t('form.phone')}: ${phone.trim()}`,
      `${t('form.service')}: ${serviceLabel}`,
    ];
    if (message.trim()) {
      lines.push(`${t('form.message')}: ${message.trim()}`);
    }
    return lines.join('\n');
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const text = encodeURIComponent(buildInquiryText());
    window.open(`https://wa.me/972524388967?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = () => {
    if (!validateForm()) return;
    const subject = encodeURIComponent(
      `LEV GROUP Inquiry — ${getSelectedServiceTitle()}`
    );
    const body = encodeURIComponent(buildInquiryText());
    window.location.href = `mailto:levgroup.m@gmail.com?subject=${subject}&body=${body}`;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.contact} id="contact">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>{t('contact.badge')}</span>
          <h2 className={styles.bigTitle}>{t('contact.title')}</h2>
          <p className={styles.subtitle}>{t('contact.subtitle')}</p>
        </motion.div>

        <div className={styles.grid}>
          {/* Contact Information Card */}
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.cardTitle}>{t('contact.infoTitle')}</h3>

            <div className={styles.infoList}>
              <a href="tel:+972524388967" className={styles.infoItem}>
                <span className={styles.iconBox}>
                  <FaPhoneAlt />
                </span>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>
                    {t('contact.phoneLabel')}
                  </span>
                  <span className={styles.infoValue} dir="ltr">
                    052-438-8967
                  </span>
                </div>
              </a>

              <a
                href="mailto:levgroup.m@gmail.com"
                className={styles.infoItem}
              >
                <span className={styles.iconBox}>
                  <FaEnvelope />
                </span>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>
                    {t('contact.emailLabel')}
                  </span>
                  <span className={styles.infoValue} dir="ltr">
                    levgroup.m@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=שדרות+ירושלים+18,+אשדוד"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoItem}
              >
                <span className={styles.iconBox}>
                  <FaMapMarkerAlt />
                </span>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>
                    {t('contact.addressLabel')}
                  </span>
                  <span className={styles.infoValue}>
                    {t('contact.addressValue')}
                  </span>
                </div>
              </a>

              <div className={styles.infoItem}>
                <span className={styles.iconBox}>
                  <FaClock />
                </span>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>
                    {t('contact.hoursLabel')}
                  </span>
                  <span className={styles.infoValue}>
                    {t('contact.hoursValue')}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.socialsRow}>
              <a
                href="https://wa.me/972524388967"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={styles.socialIcon}
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/share/16gqkJDfob/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialIcon}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/lev.group1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialIcon}
              >
                <FaInstagram />
              </a>
            </div>

            <div className={styles.legalLinks}>
              <button
                type="button"
                onClick={onOpenA11y}
                className={styles.legalBtn}
              >
                <FaUniversalAccess />
                <span>{t('a11y.title')}</span>
              </button>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))}
                className={styles.legalBtn}
              >
                <FaCookieBite />
                <span>{t('cookies.settingsLink')}</span>
              </button>
              <a
                href="/accessibility.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.legalLink}
              >
                <FaExternalLinkAlt className={styles.smallIcon} />
                <span>{t('contact.accessibility')}</span>
              </a>
              <a
                href="/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.legalLink}
              >
                <FaShieldAlt />
                <span>{t('contact.privacy')}</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Inquiry Form Card */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.cardTitle}>{t('form.title')}</h3>

            <form onSubmit={handleWhatsAppSubmit} noValidate className={styles.form}>
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  {t('form.name')} *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (status) setStatus(null);
                  }}
                  placeholder={t('form.namePlaceholder')}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="contact-phone" className={styles.label}>
                  {t('form.phone')} *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (status) setStatus(null);
                  }}
                  placeholder={t('form.phonePlaceholder')}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="contact-service" className={styles.label}>
                  {t('form.service')}
                </label>
                <select
                  id="contact-service"
                  value={selectedService || ''}
                  onChange={(e) =>
                    onServiceChange && onServiceChange(e.target.value)
                  }
                  className={styles.select}
                >
                  <option value="">{t('form.serviceAll')}</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title[lang] || s.title.en}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  {t('form.message')}
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('form.messagePlaceholder')}
                  className={styles.textarea}
                />
              </div>

              {status === 'error' && (
                <div className={styles.statusError} role="alert">
                  {t('form.error')}
                </div>
              )}

              {status === 'success' && (
                <div className={styles.statusSuccess} role="status">
                  {t('form.success')}
                </div>
              )}

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitPrimary}>
                  <FaWhatsapp className={styles.btnIcon} />
                  <span>{t('form.send')}</span>
                </button>
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className={styles.submitSecondary}
                >
                  <FaEnvelope className={styles.btnIcon} />
                  <span>{t('form.sendEmail')}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className={styles.bottomBar}>
          <span>
            © {currentYear} LEV GROUP — {t('footer.rights')}
          </span>
        </div>
      </div>
    </footer>
  );
}
