import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import { scroller, animateScroll } from 'react-scroll';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import es from 'react-intl/locale-data/es';
import id from 'react-intl/locale-data/id';
import enMessages from '../../constants/messages/enMessages';
import ruMessages from '../../constants/messages/ruMessages';
import esMessages from '../../constants/messages/esMessages';
import idMessages from '../../constants/messages/idMessages';

addLocaleData([...en, ...ru, ...es, ...id]);

class Layout extends PureComponent {

  componentDidMount() {
    if (document.location.hash === '#pool') {
      scroller.scrollTo('pool', {
        duration: 500,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#exchanges') {
      scroller.scrollTo('exchanges', {
        duration: 500,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#about') {
      scroller.scrollTo('about', {
        duration: 500,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#roadmap') {
      scroller.scrollTo('roadmap', {
        duration: 500,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#mining') {
      scroller.scrollTo('mining', {
        duration: 500,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#wallets') {
      scroller.scrollTo('wallets', {
        duration: 500,
        delay: 100,
        smooth: true,
      });
    } else if (document.location.hash === '#team') {
      scroller.scrollTo('team', {
        duration: 500,
        delay: 100,
        smooth: true,
      });
    } else {
      animateScroll.scrollToTop({ duration: 300 });
    }
  }

  getMessages = (lang) => {
    switch (lang) {
      case 'es':
        return esMessages;
      case 'en':
        return enMessages;
      case 'ru':
        return ruMessages;
      case 'id':
        return idMessages;
      default:
        return enMessages;
    }
  }

  render() {
    const { className, children, match } = this.props;
    const lang = (match.params && match.params.lang && match.params.lang !== 'en') ?
      match.params.lang : 'en';
    return (
      <IntlProvider
        locale={lang}
        messages={this.getMessages(lang)}
      >
        <div className={className}>
          {children}
        </div>
      </IntlProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  match: PropTypes.object,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: '',
};

export default Layout;
