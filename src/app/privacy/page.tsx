import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности - Family Cook",
  description: "Политика конфиденциальности Family Cook. Узнайте, как мы собираем, используем и защищаем вашу персональную информацию.",
  keywords: "политика конфиденциальности, защита данных, персональные данные, family cook",
};

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Политика конфиденциальности" },
];

export default function PrivacyPolicy() {
  return (
    <div className="py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div>
        <h1 className="text-4xl font-black mb-6 text-green-900 uppercase">Политика конфиденциальности</h1>
        <p className="text-gray-600 mb-8">
          Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="uppercase">1. Общие положения</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Настоящая Политика конфиденциальности регулирует порядок обработки и защиты информации 
                о физических лицах (далее — Пользователи), использующих сервисы, информацию, сайты, 
                функциональные возможности сайта Family Cook (далее — Сайт).
              </p>
              <p className="text-gray-700">
                Целью настоящей Политики конфиденциальности является обеспечение надлежащей защиты 
                информации о Пользователях, в том числе их персональных данных, от несанкционированного 
                доступа и разглашения.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="uppercase">2. Персональная информация пользователей</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Персональная информация Пользователей включает в себя:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Имя и фамилию</li>
                <li>Адрес электронной почты</li>
                <li>Информацию, предоставленную при заполнении форм на Сайте</li>
                <li>Данные о просмотренных страницах и рецептах</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="uppercase">3. Цели сбора и обработки персональной информации</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Мы собираем и обрабатываем персональную информацию Пользователей в следующих целях:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Предоставление доступа к функциональным возможностям Сайта</li>
                <li>Связь с Пользователем, включая направление уведомлений, запросов и информации</li>
                <li>Улучшение качества Сайта, удобства его использования</li>
                <li>Проведение статистических и иных исследований</li>
                <li>Рассылка новостей и информации о новых рецептах (с согласия Пользователя)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="uppercase">4. Условия обработки персональной информации</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Мы обрабатываем персональную информацию Пользователя только в случае ее заполнения 
                и/или отправки Пользователем самостоятельно через специальные формы, расположенные на Сайте.
              </p>
              <p className="text-gray-700">
                Мы храним персональную информацию Пользователей в соответствии с внутренними регламентами.
              </p>
              <p className="text-gray-700">
                В отношении персональной информации Пользователя сохраняется ее конфиденциальность, 
                кроме случаев добровольного предоставления Пользователем информации о себе для общего доступа.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="uppercase">5. Защита персональной информации</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Мы принимаем необходимые и достаточные организационные и технические меры для защиты 
                персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, 
                изменения, блокирования, копирования, распространения, а также от иных неправомерных действий 
                с ней третьих лиц.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="uppercase">6. Изменение Политики конфиденциальности</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Мы имеем право вносить изменения в настоящую Политику конфиденциальности. 
                При внесении изменений в актуальной редакции указывается дата последнего обновления. 
                Новая редакция Политики вступает в силу с момента ее размещения, если иное не предусмотрено 
                новой редакцией Политики.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="uppercase">7. Обратная связь</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Все предложения или вопросы по поводу настоящей Политики конфиденциальности следует 
                направлять на страницу <a href="/contacts" className="text-green-900 hover:underline font-semibold">Контакты</a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
