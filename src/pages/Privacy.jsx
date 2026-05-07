import { Shield } from "lucide-react";
import PolicyHeader from "../components/policy/PolicyHeader";
import PolicySection from "../components/policy/PolicySection";
import DecorativePattern from "../components/bio/DecorativePattern";

export default function Privacy() {
  return (
    <div className="relative min-h-screen bg-background">
      <DecorativePattern />
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 pb-12">
        <PolicyHeader icon={Shield} title="سياسة الخصوصية" />

        <div className="flex flex-col gap-4">
          <PolicySection title="مقدمة" index={0}>
            <p>
              نلتزم في مطعم عسيب بحماية خصوصية زوارنا وعملائنا. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمونها لنا عبر موقعنا الإلكتروني أو تطبيقاتنا أو خدماتنا.
            </p>
          </PolicySection>

          <PolicySection title="المعلومات التي نجمعها" index={1}>
            <p>قد نقوم بجمع المعلومات التالية:</p>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>الاسم الكامل ومعلومات الاتصال (رقم الهاتف، البريد الإلكتروني)</li>
              <li>تفاصيل الحجوزات والطلبات</li>
              <li>معلومات الدفع والفوترة</li>
              <li>بيانات التصفح واستخدام الموقع (ملفات تعريف الارتباط)</li>
              <li>الموقع الجغرافي عند استخدام خدمة تحديد الموقع</li>
            </ul>
          </PolicySection>

          <PolicySection title="كيفية استخدام المعلومات" index={2}>
            <p>نستخدم المعلومات المجمعة للأغراض التالية:</p>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>معالجة الحجوزات والطلبات وتأكيدها</li>
              <li>تحسين خدماتنا وتجربة العميل</li>
              <li>إرسال العروض والتحديثات (بموافقتكم المسبقة)</li>
              <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
              <li>تحليل البيانات لتطوير الخدمات</li>
            </ul>
          </PolicySection>

          <PolicySection title="مشاركة المعلومات" index={3}>
            <p>
              لا نبيع أو نؤجر أو نشارك معلوماتكم الشخصية مع أطراف ثالثة إلا في الحالات التالية:
            </p>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>بموافقتكم الصريحة</li>
              <li>لمقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل أعمالنا</li>
              <li>عند الاستجابة لطلب قانوني أو أمر قضائي</li>
              <li>لحماية حقوقنا وممتلكاتنا وسلامة عملائنا</li>
            </ul>
          </PolicySection>

          <PolicySection title="ملفات تعريف الارتباط (Cookies)" index={4}>
            <p>
              نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتخصيص المحتوى. يمكنكم التحكم في إعدادات ملفات تعريف الارتباط عبر متصفحكم، مع العلم أن تعطيلها قد يؤثر على بعض وظائف الموقع.
            </p>
          </PolicySection>

          <PolicySection title="حقوقكم" index={5}>
            <p>يحق لكم في أي وقت:</p>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>طلب الاطلاع على بياناتكم الشخصية المحفوظة لدينا</li>
              <li>طلب تصحيح أو تحديث بياناتكم</li>
              <li>طلب حذف بياناتكم الشخصية</li>
              <li>الاعتراض على معالجة بياناتكم لأغراض تسويقية</li>
              <li>سحب موافقتكم على معالجة البيانات</li>
            </ul>
          </PolicySection>

          <PolicySection title="الاحتفاظ بالبيانات" index={6}>
            <p>
              نحتفظ بمعلوماتكم الشخصية طالما كان ذلك ضرورياً لتحقيق الأغراض المذكورة في هذه السياسة، أو وفقاً لما تقتضيه القوانين واللوائح المعمول بها في المملكة العربية السعودية.
            </p>
          </PolicySection>

          <PolicySection title="التواصل معنا" index={7}>
            <p>
              لأي استفسارات حول سياسة الخصوصية أو لممارسة حقوقكم، يرجى التواصل معنا عبر:
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