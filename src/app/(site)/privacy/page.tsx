import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-4xl px-5 2xl:px-0">
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <Icon icon="ph:arrow-left" width={20} height={20} />
            Вернуться на главную
          </Link>
          <h1 className="text-4xl font-bold text-dark mb-4">Политика конфиденциальности</h1>
          <p className="text-dark/60">Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>
        </div>

        <div className="space-y-8 text-dark/80 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">1. Введение</h2>
            <p>
              Компания Синертек уважает вашу приватность и обязуется защищать ваши личные данные. 
              Данная Политика конфиденциальности объясняет, как мы собираем, используем и защищаем информацию о вас.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">2. Какую информацию мы собираем</h2>
            <p className="mb-4">Мы можем собирать следующую информацию:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Имя и контактные данные (адрес электронной почты, номер телефона)</li>
              <li>Информацию о компании и характере вашего бизнеса</li>
              <li>Данные об использовании сайта (IP-адрес, тип браузера, время посещения)</li>
              <li>Любую другую информацию, которую вы добровольно предоставляете</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">3. Как мы используем вашу информацию</h2>
            <p className="mb-4">Ваша информация используется для:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ответа на ваши запросы и оказания услуг</li>
              <li>Улучшения нашего сайта и услуг</li>
              <li>Отправки вам информации о наших услугах (с вашего согласия)</li>
              <li>Соблюдения правовых требований</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">4. Защита ваших данных</h2>
            <p>
              Мы применяем технические, организационные и административные меры безопасности для защиты 
              ваших личных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">5. Ваши права</h2>
            <p className="mb-4">Вы имеете право:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Получить доступ к своим личным данным</li>
              <li>Исправить неточные или неполные данные</li>
              <li>Удалить свои данные</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">6. Контактная информация</h2>
            <p className="mb-4">
              Если у вас есть вопросы о нашей Политике конфиденциальности или ваших личных данных, 
              пожалуйста, свяжитесь с нами:
            </p>
            <div className="text-dark/80">
              <p>Email: synertech42@yandex.ru</p>
              <p>Телефон: +7 (995) 061-39-97</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
