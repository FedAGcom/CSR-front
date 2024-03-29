import { Box, Container } from '@mui/material';
import { AskQuestionBlock, HeaderAndFooter, PrizeBlock, ButtonBackToMain } from '../../components';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const PrivacyPolicyPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box>
      <HeaderAndFooter>
        <PrizeBlock />
        <Container sx={{ maxWidth: '1158px' }} maxWidth={false}>
          <Box className="privacy-policy">
            <ButtonBackToMain />
            {matches &&  <Box className="privacy-policy__title">Политика конфиденциальности</Box> }
            <ol className="privacy-policy__list">
              <li>
                {' '}
                Политика конфиденциальности
                <ol className="privacy-policy__sublist">
                  <li>
                    **************** *********** ****************** ******************* («Сайт» или «Сервис»).
                    Администратором персональных данных является **************** *********** ******************
                    *******************. Эта страница информирует вас о нашей политике в отношении сбора, использования
                    и раскрытия Личной информации, которую мы получаем от пользователей Сайта. Мы используем вашу Личную
                    информацию только для предоставления и улучшения Сайта. Используя Сайт, вы соглашаетесь на сбор и
                    использование информации в соответствии с этой политикой.
                  </li>
                </ol>
              </li>
              <li>
                {' '}
                Сбор и использование информации
                <ol className="privacy-policy__sublist">
                  <li>
                    При использовании нашего Сайта мы можем попросить вас предоставить нам определенную личную
                    информацию, которая может быть использована для связи или идентификации вас. Личная информация может
                    включать, помимо прочего, ваше имя («Личная информация»). Сервис также использует другие технологии,
                    которые могут следить за вашими действиями: Статистика Google Analytics и плагины из социальных
                    сетей - Facebook. Более подробную информацию об их политике конфиденциальности можно найти по
                    ссылкам ниже:
                  </li>
                </ol>
              </li>
              <li>
                {' '}
                Данные логов
                <ol className="privacy-policy__sublist">
                  <li>
                    Как и многие операторы сайта, мы собираем информацию, которую ваш браузер отправляет каждый раз,
                    когда вы посещаете наш Сайт («Данные журнала»). Эти данные журнала могут включать в себя такую
                    информацию, как адрес интернет-протокола («IP») вашего компьютера, тип браузера, версия браузера,
                    страницы нашего Сайта, которые вы посещаете, время и дата вашего посещения, время, проведенное на
                    этих страницах, и другую информацию. статистика. Мы собираем информацию для записи некоторых
                    статистических данных и улучшения Сервиса, чтобы вы могли еще более удобно пользоваться веб-сайтом.
                  </li>
                </ol>
              </li>
              <li>
                {' '}
                Как мы используем вашу информацию?
                <ol className="privacy-policy__sublist">
                  <li>
                    Мы будем использовать вашу личную информацию в наших законных интересах, чтобы отвечать на ваши
                    запросы, отправлять вам информацию, выполнять любые договорные обязательства перед вами, в
                    исследовательских целях, отправлять вам маркетинговую информацию о наших товарах, услугах и
                    связанных с ними возможностях, а также другие разумные виды использования на основании вашего
                    положительного согласия.
                  </li>
                </ol>
              </li>
              <li>
                {' '}
                Кому мы можем передавать ваши данные?
                <ol className="privacy-policy__sublist">
                  <li>
                    Все данные могут быть переданы некоторым субъектам, которые обрабатывают ваши персональные данные по
                    запросу нашего Сервиса, в том числе поставщикам ИТ-услуг, маркетинговым агентствам,
                    исследовательским компаниям, деловым партнерам, где такие лица обрабатывают данные на основании
                    договора с администратором и только в соответствии с выданными инструкциями.
                  </li>
                  <li>
                    В случае, если потребитель проживает в **************** *********** ******************
                    *******************.
                  </li>
                  <li>
                    Google Analytics (Google Inc.) — Google Analytics — это служба веб-анализа, предоставляемая Google
                    Inc. («Google»). Google использует собранные Данные для отслеживания и проверки использования этого
                    Приложения, для подготовки отчетов о его действиях и обмена ими с другими службами Google. Google
                    может использовать собранные Данные для контекстуализации и персонализации рекламы своей собственной
                    рекламной сети. Собранные персональные данные: файлы cookie и данные об использовании. Место
                    обработки: США – Политика конфиденциальности – Отказаться.
                  </li>
                  <li>
                    Отслеживание конверсий Google AdWords (Google Inc.) — отслеживание конверсий Google AdWords — это
                    аналитическая служба, предоставляемая Google Inc., которая связывает данные из рекламной сети Google
                    AdWords с действиями, выполняемыми в этом Приложении. Собранные персональные данные: файлы cookie и
                    данные об использовании. Место обработки: США – Политика конфиденциальности.
                  </li>
                  <li>
                    CloudFlare — CloudFlare — это служба оптимизации и распределения трафика, предоставляемая CloudFlare
                    Inc. Способ интеграции CloudFlare означает, что он фильтрует весь трафик через это Приложение, т. е.
                    связь между этим Приложением и браузером Пользователя, а также позволяет получать аналитические
                    данные из этого Приложения. быть собранным. Собранные персональные данные: файлы cookie и различные
                    типы данных, как указано в политике конфиденциальности службы. Место обработки: США – Политика
                    конфиденциальности.
                  </li>
                  <li>
                    Steam - загрузка информации о пользователе и предметах, позволяющая авторизоваться на Сайте -
                    https://store.steampowered.com/privacy_agreement/
                  </li>
                </ol>
              </li>
              <li>
                {' '}
                Cookies
                <ol className="privacy-policy__sublist">
                  <li>
                    Файлы cookie — это файлы с небольшим объемом данных, которые могут включать анонимный уникальный
                    идентификатор. Файлы cookie отправляются в ваш браузер с веб-сайта и сохраняются на жестком диске
                    вашего компьютера. Как и многие сайты, мы используем файлы cookie для сбора такой информации, как:
                  </li>
                  <li>(I) помню, как авторизовался на веб-сайте</li>
                  <li>(II) запоминание настроек отображения вашей страницы</li>
                  <li>
                    Вы можете указать своему браузеру отказаться от всех файлов cookie или указать, когда файл cookie
                    отправляется. Однако, если вы не принимаете файлы cookie, вы не сможете использовать некоторые
                    разделы нашего Сайта. Информацию о том, как это сделать, можно найти в файлах справки вашего
                    веб-браузера.
                  </li>
                </ol>
              </li>
            </ol>
            <AskQuestionBlock />
          </Box>
        </Container>
      </HeaderAndFooter>
    </Box>
  );
};
