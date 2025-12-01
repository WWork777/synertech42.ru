import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-4xl px-5 2xl:px-0">
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <Icon icon="ph:arrow-left" width={20} height={20} />
            Вернуться на главную
          </Link>
          <h1 className="text-4xl font-bold text-dark mb-4">Условия использования</h1>
          <p className="text-dark/60">Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>
        </div>

        <div className="space-y-8 text-dark/80 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">1. Общие положения</h2>
            <p>
              Эти Условия использования регулируют отношения между компанией Синертек и пользователями веб-сайта. 
              Используя сайт, вы принимаете все условия, изложенные в данном документе.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">2. Использование сайта</h2>
            <p className="mb-4">Пользователи имеют право использовать сайт в личных и информационных целях. Запрещается:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Воспроизводить, распространять или передавать содержимое сайта</li>
              <li>Изменять, адаптировать или создавать производные работы на основе контента сайта</li>
              <li>Использовать автоматические средства для сбора информации со сайта без разрешения</li>
              <li>Нарушать работу или безопасность сайта</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">3. Интеллектуальная собственность</h2>
            <p>
              Весь контент на сайте, включая текст, графику, логотипы, изображения и программное обеспечение, 
              является собственностью Компании или её лицензиаров и защищен законами об авторском праве.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">4. Ограничение ответственности</h2>
            <p className="mb-4">Сайт предоставляется &quot;как есть&quot; без каких-либо гарантий. Компания не несет ответственность за:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Потерю данных или перебои в работе сайта</li>
              <li>Убытки, возникшие в результате использования или невозможности использования сайта</li>
              <li>Действия третьих лиц или события, находящиеся вне контроля Компании</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">5. Связь с нами</h2>
            <p className="mb-4">
              Если у вас есть вопросы о Условиях использования, пожалуйста, свяжитесь с нами:
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
