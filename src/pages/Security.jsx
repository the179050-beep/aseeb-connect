import { Lock } from "lucide-react";
import PolicyHeader from "../components/policy/PolicyHeader";
import PolicySection from "../components/policy/PolicySection";
import DecorativePattern from "../components/bio/DecorativePattern";

export default function Security() {
  return (
    <div className="relative min-h-screen bg-background">
      <DecorativePattern />
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 pb-12">
        <PolicyHeader icon={Lock} title="قواعد الأمان" />

        <div className="flex flex-col gap-4">
          <PolicySection title="التزامنا بالأمان" index={0}>
            <p>
              يولي مطعم عسيب أهمية قصوى لأمان بيانات عملائنا. نطبق أحدث المعايير والتقنيات لضمان حماية معلوماتكم الشخصية والمالية من أي اختراق أو استخدام غير مصرح به.
            </p>
          </PolicySection>

          <PolicySection title="التشفير وحماية البيانات" index={1}>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>نستخدم بروتوكول SSL/TLS لتشفير جميع البيانات المنقولة</li>
              <li>تُشفّر بيانات الدفع وفقاً لمعايير PCI-DSS العالمية</li>
              <li>تُخزّن كلمات المرور بتقنيات تشفير متقدمة لا يمكن عكسها</li>
              <li>نطبق تشفير البيانات في حالة السكون (At Rest) وأثناء النقل</li>
            </ul>
          </PolicySection>

          <PolicySection title="التحكم في الوصول" index={2}>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>صلاحيات وصول محدودة وفق مبدأ الحاجة للمعرفة</li>
              <li>مصادقة متعددة العوامل للأنظمة الحساسة</li>
              <li>مراجعة دورية لصلاحيات المستخدمين</li>
              <li>تسجيل ومراقبة جميع عمليات الوصول للبيانات</li>
            </ul>
          </PolicySection>

          <PolicySection title="أمان الشبكة والبنية التحتية" index={3}>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>جدران حماية متقدمة وأنظمة كشف الاختراقات</li>
              <li>تحديثات أمنية منتظمة لجميع الأنظمة والبرمجيات</li>
              <li>فحص دوري للثغرات الأمنية واختبارات الاختراق</li>
              <li>نسخ احتياطية منتظمة للبيانات في مواقع آمنة</li>
            </ul>
          </PolicySection>

          <PolicySection title="حماية معلومات الدفع" index={4}>
            <p>
              نتعامل مع معلومات الدفع بأعلى مستويات الأمان:
            </p>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>لا نخزّن بيانات بطاقات الائتمان على خوادمنا</li>
              <li>نعتمد على بوابات دفع معتمدة ومرخصة من مؤسسة النقد</li>
              <li>جميع المعاملات المالية مشفرة ومحمية</li>
              <li>مراقبة فورية لأي نشاط مشبوه في المعاملات</li>
            </ul>
          </PolicySection>

          <PolicySection title="الاستجابة للحوادث الأمنية" index={5}>
            <p>
              لدينا خطة استجابة شاملة للحوادث الأمنية تتضمن:
            </p>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>فريق متخصص للاستجابة للحوادث الأمنية على مدار الساعة</li>
              <li>إشعار العملاء المتأثرين فوراً في حالة أي اختراق</li>
              <li>التعاون مع الجهات المختصة في المملكة العربية السعودية</li>
              <li>تحليل ما بعد الحادث لمنع تكراره</li>
            </ul>
          </PolicySection>

          <PolicySection title="نصائح أمنية للعملاء" index={6}>
            <p>نوصي عملاءنا الكرام باتباع النصائح التالية:</p>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>استخدام كلمات مرور قوية وفريدة لكل حساب</li>
              <li>عدم مشاركة بيانات الدخول مع أي شخص</li>
              <li>التحقق من صحة الروابط قبل إدخال أي بيانات شخصية</li>
              <li>تحديث المتصفح والأجهزة بشكل منتظم</li>
              <li>الإبلاغ الفوري عن أي نشاط مشبوه على حسابكم</li>
            </ul>
          </PolicySection>

          <PolicySection title="الامتثال التنظيمي" index={7}>
            <p>نلتزم بجميع الأنظمة واللوائح المعمول بها، بما في ذلك:</p>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>نظام حماية البيانات الشخصية في المملكة العربية السعودية</li>
              <li>معايير أمان بيانات صناعة بطاقات الدفع (PCI-DSS)</li>
              <li>ضوابط الهيئة الوطنية للأمن السيبراني</li>
              <li>متطلبات مؤسسة النقد العربي السعودي (ساما)</li>
            </ul>
          </PolicySection>

          <PolicySection title="التواصل الأمني" index={8}>
            <p>
              للإبلاغ عن أي مخاوف أمنية أو نشاط مشبوه، يرجى التواصل معنا فوراً:
            </p>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>الهاتف: 920028226</li>
              <li>الموقع الإلكتروني: aseeb.com.sa</li>
            </ul>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}