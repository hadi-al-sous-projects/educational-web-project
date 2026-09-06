//  H L E S S O N  —  HTML
let Hlesson = [

  // ---------- تاغات أساسية ----------
  {
    head: "تاغات أساسية",
    lesson: "تاغات أساسية بتستخدمها كتير: <tag> بحدد التاغ العام، <br> لسطر جديد، <hr> لخط أفقي، <p> للفقرة، بالإضافة لتاغات التنسيق مثل <strong> للتغميق، <em> للمائل، <b> و <i> بنفس الفكرة، <small> للنص الصغير، <big> للنص الكبير، <blockquote> للاقتباس، <cite> للإشارة لمصدر، <h1> لـ <h6> للعناوين.",
    code: `<p>هذه فقرة</p>
<br>
<hr>
<strong>نص غامق</strong>
<em>نص مائل</em>
<small>نص صغير</small>
<h1>عنوان كبير</h1>
<h6>عنوان صغير</h6>
<blockquote>اقتباس</blockquote>`
  },

  // ---------- تاغ الـ tag و class و id ----------
  {
    head: "الـ tag والـ class والـ id",
    lesson: "كل عنصر (tag) ممكن يحمل (class) للتعامل معه بالـ CSS أو JS، و(id) يكون فريد لكل صفحة. الـ (id) بنستخدمه للوصول لعنصر محدد.",
    code: `<div class="box" id="main">محتوى</div>`
  },

  // ---------- الـ div و span ----------
  {
    head: "الـ div والـ span",
    lesson: "الـ (div) عنصر (block) بيأخذ سطر كامل، والـ (span) عنصر (inline) بيبقى ضمن السطر. بنستخدمهم كحاويات للتنظيم والتنسيق.",
    code: `<div class="container">
  <span class="highlight">نص</span>
</div>`
  },

  // ---------- تاغات Semantic ----------
  {
    head: "تاغات (Semantic)",
    lesson: "تاغات بتعطي معنى للمحتوى وبتساعد بالـ (SEO) وإمكانية الوصول. منها: <header>، <nav>، <main>، <section>، <article>، <aside>، <footer>، <details>، <summary>، <figure>.",
    code: `<header>الرأس</header>
<nav>التنقل</nav>
<main>
  <section>قسم</section>
  <article>مقالة</article>
  <aside>جانبي</aside>
</main>
<footer>التذييل</footer>`
  },

  // ---------- تاغات داخل التاغات بأمثلة ----------
  {
    head: "تاغات داخلية ومثال (class)",
    lesson: "بنقدر نحط تاغات داخل بعض، وفي مثال على كيف بنستخدم الـ (class) لتحديد العناصر: مثلاً div.post، n = \"post\"، n = \"sidebar\".",
    code: `<div class="post">
  <p>مقالة</p>
</div>
<div class="sidebar">
  <p>جانبي</p>
</div>`
  },

  // ---------- الـ data-name attribute ----------
  {
    head: "الـ (data) attribute",
    lesson: "الـ (data-name) بخليك تخزن بيانات خاصة مباشرة على العنصر، وبتوصلها من الـ JS. الـ (contenteditable) بيخلي العنصر قابل للتعديل من المستخدم مباشرة بالصفحة، قيمته (true) أو (false) أو (inherit).",
    code: `<div data-name="value">محتوى</div>
<p contenteditable="true">نص قابل للتعديل</p>`
  },

  // ---------- الـ data-s و @media ----------
  {
    head: "الـ (data-s) و (media.css)",
    lesson: "الـ (data-s) يساوي (td) ويُستخدم لتخزين بيانات. الـ (@media) هي قاعدة CSS بتخلي الصفحة تتكيف مع أحجام الشاشات المختلفة، رح تتعلمها بقسم الـ CSS.",
    code: `<td data-s="value">خلية</td>`
  },

  // ---------- تاغ الـ a ----------
  {
    head: "تاغ الـ (a) للروابط",
    lesson: "تاغ الـ (a) للروابط، وله صفات مهمة: (href) لتحديد الوجهة، (rel) مثل \"noopener\"، (target) مثل \"_blank\" لفتح بتاب جديد، (title) للوصف، (id) للتعريف، (class) للتنسيق. الـ (Path) بيكون إما (relative) أو (absolute url).",
    code: `<a href="https://example.com" target="_blank" rel="noopener" title="وصف">
  رابط
</a>

<!-- relative -->
<a href="./about.html">عن الموقع</a>`
  },

  // ---------- تاغ الـ img ----------
  {
    head: "تاغ الـ (img)",
    lesson: "تاغ الـ (img) يعرض صورة، وصفاته الأساسية: (src) لمسار الصورة، (alt) للنص البديل، (width) و (height) للأبعاد، (style) للتنسيق المباشر.",
    code: `<img src="photo.jpg" alt="وصف الصورة" width="300" height="200">`
  },

  // ---------- تاغ الـ table ----------
  {
    head: "تاغ الـ (table)",
    lesson: "الجدول بيتكون من: <table> الحاوية، <thead> رأس الجدول، <tbody> الجسم، <tfoot> التذييل، <tr> للصف، <th> لعنوان الخلية، <td> للخلية العادية.",
    code: `<table>
  <thead>
    <tr><th>الاسم</th><th>العمر</th></tr>
  </thead>
  <tbody>
    <tr><td>هادي</td><td>21</td></tr>
  </tbody>
</table>`
  },

  // ---------- تاغ الـ UL و OL و LI ----------
  {
    head: "القوائم (UL) و (OL) و (LI)",
    lesson: "الـ (UL) قائمة غير مرتبة، الـ (OL) قائمة مرتبة، والـ (LI) هو العنصر داخلهما. الـ (List-Style) خاصية الـ CSS للتحكم بشكل النقاط، و(List-Position) لتحديد موقعها: (inside) أو (outside). الـ (Properties) ترث القيم بـ (inherit).",
    code: `<ul>
  <li>عنصر</li>
  <li>عنصر</li>
</ul>

<ol>
  <li>أول</li>
  <li>ثاني</li>
</ol>`
  },

  // ---------- الـ Form ----------
  {
    head: "تاغ الـ (Form)",
    lesson: "الـ (Form) هو حاوية الإدخال، وله صفات: (action) لتحديد وجهة الإرسال، (method) إما (get) أو (post)، (enctype) لتحديد نوع الترميز بالغالب مع رفع الملفات، (novalidate) لإلغاء التحقق، (target) لتحديد مكان الاستجابة، (autocomplete) تشغيل أو إيقاف الإكمال التلقائي.",
    code: `<form action="/submit" method="post" autocomplete="on">
  <!-- حقول الإدخال هون -->
</form>`
  },

  // ---------- الـ Input و صفاته ----------
  {
    head: "الـ (Input) وصفاته",
    lesson: "الـ (input) له أنواع كتيرة بالـ (type): text، password، email، number، search، date، url، tel، color، file، datetime-local، month، week، range، radio، checkbox، submit، reset، hidden، button. وله صفات: (name)، (id)، (value)، (placeholder)، (required)، (disabled)، (readonly)، (autofocus)، (autocomplete)، (minlength)، (maxlength)، (min)، (max)، (pattern)، (multiple).",
    code: `<input type="text" name="username" id="username" placeholder="اسم المستخدم" required>
<input type="email" placeholder="البريد الإلكتروني">
<input type="password" placeholder="كلمة السر">
<input type="number" min="1" max="100">
<input type="submit" value="إرسال">`
  },

  // ---------- تاغات الـ label و datalist ----------
  {
    head: "الـ (label) والـ (datalist)",
    lesson: "الـ (label) بيربط النص بحقل إدخال عبر الـ (for) اللي بيساوي الـ (id) للـ (input). الـ (datalist) بيعطي قائمة اقتراحات للمستخدم وبيربط بالـ (input) عبر (list) يساوي (id) الـ (datalist). الـ (select) قائمة اختيار بداخلها (option).",
    code: `<label for="name">الاسم:</label>
<input type="text" id="name">

<input list="cities" placeholder="اختر مدينة">
<datalist id="cities">
  <option value="دمشق">
  <option value="بيروت">
</datalist>

<select>
  <option value="1">خيار 1</option>
  <option value="2" selected>خيار 2</option>
</select>`
  },

];


//  C L E S S O N  —  CSS Sheet 1
let Clesson = [

  // ---------- طرق إضافة الـ CSS ----------
  {
    head: "طرق إضافة الـ CSS",
    lesson: "في 3 طرق: (inline) مباشرة على العنصر، (internal) داخل تاغ <style> في الـ HTML، (external) بربط ملف .css خارجي عبر <link>.",
    code: `<!-- inline -->
<p style="color: red;"></p>

<!-- internal -->
<style> p { color: red; } </style>

<!-- external -->
<link rel="stylesheet" href="style.css">`
  },

  // ---------- الـ Selectors ----------
  {
    head: "الـ (Selectors)",
    lesson: "الـ (Selectors) بتحدد أي عنصر بتحكيه: (tag) مباشرة، (class) بنقطة، (id) بـ #، (attribute) بين قوسين مربعين. كمان في (element.Attribute) للوصول لعنصر بصفة محددة، و(Inspecting) للاطلاع على الـ CSS عبر أدوات المطور. الـ (Specificity) هي قوة الـ selector.",
    code: `p { color: blue; }
.myClass { color: red; }
#myId { color: green; }
[href] { color: orange; }
input[type="text"] { border: 1px solid; }`
  },

  // ---------- الـ Pseudo-classes ----------
  {
    head: "الـ (Pseudo-classes)",
    lesson: "بتحدد حالة معينة للعنصر. منها: :hover، :focus، :checked، :disabled، :empty، :root، :not(). والهيكلية: :first-child، :last-child، :nth-of-type()، :first-of-type()، :last-of-type()، :only-child، :nth-last-child(). كمان في :Placeholder، :selection، :hover-active.",
    code: `a:hover { color: red; }
input:focus { border: 2px solid blue; }
li:first-child { font-weight: bold; }
li:nth-of-type(2) { color: green; }
p:not(.special) { opacity: 0.5; }
li:last-child { color: gray; }`
  },

  // ---------- الـ Pseudo-elements ----------
  {
    head: "الـ (Pseudo-elements)",
    lesson: "بتخليك تحكي على جزء من العنصر مش العنصر كله. منها: ::before، ::after، ::first-child، ::last-child. وكمان ::selection للنص المحدد، ::placeholder لنص الـ placeholder في الـ input.",
    code: `p::before { content: ">> "; }
p::after  { content: " <<"; }
p::first-line { font-weight: bold; }
::selection { background: yellow; }`
  },

  // ---------- الـ Combinators ----------
  {
    head: "الـ (Combinators)",
    lesson: "بتحدد العلاقة بين العناصر: (Descendant) بمسافة يستهدف كل الأبناء، (Child >) يستهدف الابن المباشر فقط، (Adjacent +) يستهدف الأخ اللي بعده مباشرة، (General ~) يستهدف كل الأخوة اللي بعده.",
    code: `div p { }
div > p { }
h1 + p { }
h1 ~ p { }`
  },

  // ---------- الـ String selectors ----------
  {
    head: "محددات النص (String selectors)",
    lesson: "بتستهدف عناصر بناءً على قيمة صفة معينة: (=) مساواة تامة، (^=) يبدأ بـ، ($=) ينتهي بـ، (*=) يحتوي على.",
    code: `[href="https://example.com"] { }
[href^="https"] { }
[href$=".pdf"] { }
[href*="google"] { }`
  },

  // ---------- الـ Background ----------
  {
    head: "الـ (Background)",
    lesson: "خصائص الخلفية: (background-color) للون، (background-image) للصورة بـ url()، (background-repeat) للتكرار: repeat / repeat-x / repeat-y / no-repeat، (background-size): cover / contain / auto، (background-position): left / right / center / top / bottom أو بالقيم XY، (background-attachment): local / scroll / fixed، (clip-path) لقص الخلفية بشكل معين مثل polygon().",
    code: `div {
  background-color: #000;
  background-image: url("bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}`
  },

  // ---------- الـ Gradients ----------
  {
    head: "الـ (Gradients)",
    lesson: "ثلاثة أنواع للتدرجات: (linear-gradient) خطي من اليسار لليمين أو بزاوية، (radial-gradient) دائري من المركز، (conic-gradient) مخروطي يدور بزوايا.",
    code: `div {
  background: linear-gradient(to right, red, blue);
  background: radial-gradient(circle, red, blue);
  background: conic-gradient(red 0deg, blue 180deg);
}`
  },

  // ---------- الـ Filters ----------
  {
    head: "الـ (Filters)",
    lesson: "الـ (filter) بطبق تأثيرات بصرية على العنصر. منها: blur() للضبابية، grayscale() للتحويل للرمادي. الصيغة: background(Color)(Size)(Position)(Content).",
    code: `img {
  filter: blur(5px);
  filter: grayscale(100%);
  filter: brightness(1.5);
}`
  },

  // ---------- الـ Box Model ----------
  {
    head: "الـ (Box Model)",
    lesson: "كل عنصر HTML هو صندوق بيتكون من: المحتوى (content)، الـ (padding) المسافة الداخلية من كل الجهات (top, right, bottom, left)، الـ (border) الحدود، الـ (margin) المسافة الخارجية. الترتيب: top / right / bottom / left.",
    code: `div {
  padding: 10px 20px 10px 20px;
  margin: 5px 10px;
  border: 1px solid black;
}`
  },

  // ---------- الـ border ----------
  {
    head: "الـ (border)",
    lesson: "الـ (border) له 3 قيم: (width) العرض، (style) النوع مثل solid، (color) اللون. وفي (border-top)، (border-right)، (border-bottom)، (border-left) للتحكم بكل جهة لحالها، و(border-radius) لتدوير الأركان.",
    code: `div {
  border: 2px solid red;
  border-top: 1px dashed blue;
  border-radius: 10px;
}`
  },

  // ---------- الـ box-sizing ----------
  {
    head: "الـ (box-sizing)",
    lesson: "الـ (box-sizing) بحدد طريقة حساب حجم العنصر. (content-box) القيمة الافتراضية، الـ padding والـ border بتتضاف على العرض. (border-box) الـ padding والـ border بتتحسب ضمن العرض المحدد.",
    code: `* {
  box-sizing: border-box;
}`
  },

  // ---------- الـ aspect-ratio ----------
  {
    head: "الـ (aspect-ratio) والقيم الديناميكية",
    lesson: "الـ (aspect-ratio) بحدد نسبة العرض للارتفاع. وعندنا قيم ديناميكية: (width/min-width/max-width) و (height/min-height/max-height) و (px, %).",
    code: `div {
  aspect-ratio: 16 / 9;
  min-width: 200px;
  max-width: 800px;
  min-height: 100px;
}`
  },

  // ---------- الـ outline ----------
  {
    head: "الـ (Outline)",
    lesson: "الـ (outline) مشابه للـ (border) بس بييجي بره الـ box model وما بأثر على المساحة. له صفات: (outline-offset) لتحديد المسافة عنه.",
    code: `button:focus {
  outline: 2px solid blue;
  outline-offset: 4px;
}`
  },

  // ---------- الـ border-top ----------
  {
    head: "الـ (border-top)",
    lesson: "بتتحكم بحدود كل جهة لحالها: (border-top)، (border-right)، (border-bottom)، (border-left). كل منهم بيقبل (width)، (style)، (color).",
    code: `div {
  border-top: 3px solid red;
  border-bottom: 1px dashed gray;
}`
  },

  // ---------- الـ BOX Shadow ----------
  {
    head: "الـ (Box-Shadow)",
    lesson: "الـ (box-shadow) بضيف ظل للعنصر. الصيغة: (x-offset y-offset blur-radius spread-radius color). ممكن يكون (inset) للداخل، وممكن تضيف أكثر من ظل بفاصلة.",
    code: `div {
  box-shadow: 2px 4px 8px 0px rgba(0,0,0,0.3);
  box-shadow: inset 0 0 10px gray;
}`
  },

  // ---------- الـ Opacity ----------
  {
    head: "الـ (Opacity)",
    lesson: "الـ (opacity) بتحكم بشفافية العنصر كله بما فيه المحتوى، من 0 (شفاف كامل) لـ 1 (ظاهر كامل).",
    code: `div {
  opacity: 0.5;
}`
  },

  // ---------- الـ mix-blend-mode ----------
  {
    head: "الـ (mix-blend-mode)",
    lesson: "بتحدد كيف يمتزج العنصر مع الخلفية خلفه. من قيمه: (normal)، (multiply)، (screen)، (overlay)، (soft-light)، (hard-light)، (difference)، (exclusion).",
    code: `div {
  mix-blend-mode: multiply;
}`
  },

  // ---------- الـ Cursor ----------
  {
    head: "الـ (Cursor)",
    lesson: "بتحدد شكل مؤشر الماوس فوق العنصر. من قيمه: (move)، (pointer)، و(caret-color) بتغير لون المؤشر النصي.",
    code: `div {
  cursor: pointer;
}
input {
  caret-color: red;
}`
  },

  // ---------- الـ Typography ----------
  {
    head: "الـ (Typography) والنصوص",
    lesson: "خصائص النص: (font-weight) من 100 لـ 900 أو normal/bold/lighter، (font-size) بالـ px أو rem أو %، (font-family) لنوع الخط، (font-style) مثل italic، (text-decoration) مثل underline، (text-align) يمين أو يسار أو وسط، (vertical-align) للمحاذاة العمودية، (line-height) لارتفاع السطر، (letter-spacing) للمسافة بين الحروف، (word-spacing) للمسافة بين الكلمات، (overflow) مثل hidden، (word-break) و(white-space) للتحكم بكسر النص.",
    code: `p {
  font-size: 16px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  text-align: center;
  line-height: 1.6;
  letter-spacing: 2px;
  text-decoration: underline;
}`
  },

  // ---------- الـ Pseudo-elements للـ Typography ----------
  {
    head: "الـ (Pseudo-elements) للنصوص",
    lesson: "الـ (pseudo-elements) للنصوص: (font-size) ممكن بالـ %, em, rem. وفي عناصر مرتبطة بالنص زي: a:link، a:visited، a:preconnect-fetch، b (bold) و strong.",
    code: `a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: orange; }`
  },

  // ---------- الـ List-Style ----------
  {
    head: "الـ (List-Style)",
    lesson: "الـ (List-Style) بتتحكم بشكل النقاط في القوائم. من قيمه: (none) لإزالتها، (disc)، (circle)، (square)، (decimal). الـ (List-Position): (inside) أو (outside). الـ (Properties: inherit) للوراثة. قيم الـ (px) مثل: صورة بـ box = -16px.",
    code: `ul {
  list-style: none;
}
ul {
  list-style-type: disc;
  list-style-position: inside;
}`
  },

  // ---------- الـ display ----------
  {
    head: "الـ (display)",
    lesson: "الـ (display) بتحدد طريقة عرض العنصر. من قيمه: (block) سطر كامل، (inline) يبقى بنفس السطر، (inline-block) يجمع الاثنين، (none) يخفي العنصر تماماً. وكمان (flex) و(grid) لنظام التخطيط.",
    code: `div { display: block; }
span { display: inline; }
button { display: inline-block; }
.hidden { display: none; }`
  },

  // ---------- الـ Visibility ----------
  {
    head: "الـ (visibility)",
    lesson: "الـ (visibility) بتخفي العنصر لكن بيبقى ياخذ مساحته. قيمه: (hidden) إخفاء، (visible) ظاهر، (collapse) للجداول. مختلف عن (display: none) اللي بيزيل العنصر من التدفق.",
    code: `div {
  visibility: hidden;
}
div {
  visibility: visible;
}`
  },

  // ---------- الـ overflow ----------
  {
    head: "الـ (overflow)",
    lesson: "الـ (overflow) بتتحكم بمحتوى العنصر اللي بيطلع عن حدوده. قيمه: (visible) الافتراضي، (hidden) قص المحتوى الزائد، (scroll) شريط تمرير، (auto) شريط تمرير بس لما يلزم، (ellipsis) للنص الطويل نقاط ...",
    code: `div {
  overflow: hidden;
}
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`
  },

  // ---------- الـ position ----------
  {
    head: "الـ (position)",
    lesson: "الـ (position) بتتحكم بطريقة تموضع العنصر بالصفحة. قيمه: (static) الافتراضي لا يتأثر بـ top/left، (relative) بيتحرك بالنسبة لموقعه الأصلي وما يزاله منه، (absolute) بيتأثر بأقرب أب عنده (position: relative) وبيطلع من التدفق الطبيعي، (fixed) بيبقى ثابت بالشاشة حتى عند الـ scroll، (sticky) بيمشي مع الـ scroll لحد ما يوصل لحد معين وبيتثبت هناك.",
    code: `div { position: relative; }
.child { position: absolute; top: 0; left: 0; }
header { position: fixed; top: 0; }
nav { position: sticky; top: 20px; }`
  },

  // ---------- الـ z-index ----------
  {
    head: "الـ (z-index)",
    lesson: "الـ (z-index) بتتحكم بأولوية ظهور العناصر فوق بعض. الأعلى قيمة بيطلع فوق. بيشتغل بس على العناصر اللي عندها (position) غير (static).",
    code: `div {
  position: relative;
  z-index: 10;
}
.overlay {
  position: absolute;
  z-index: 100;
}`
  },

  // ---------- الـ float و clear ----------
  {
    head: "الـ (float) والـ (clear)",
    lesson: "الـ (float) بتعوم العنصر لليمين أو اليسار وبيطلع من التدفق الطبيعي. الـ (clear) بتوقف تأثير الـ float على العناصر التالية. الـ (display: inline-block) مع (overflow: hidden) أو (both) بتوقف الـ float.",
    code: `img { float: left; }
.clear { clear: both; }
.container { overflow: hidden; }`
  },

  // ---------- الـ Flex Box ----------
  {
    head: "الـ (Flex Box)",
    lesson: "نظام التخطيط المرن. بيُفعَّل بـ (display: flex). قيمه بتأثر على الحاوية: (flex-direction) row/column/row-reverse/column-reverse، (flex-wrap) لتحديد ما إذا كانت العناصر تتكسر لسطر جديد nowrap/wrap/wrap-reverse، (flex-flow) اختصار للاثنين، (justify-content) لمحاذاة المحور الرئيسي، (align-items) لمحاذاة المحور الثانوي، (align-content) لمحاذاة الصفوف، (gap) للمسافة بين العناصر.",
    code: `div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}`
  },

  // ---------- خصائص ابن الـ Flex ----------
  {
    head: "خصائص ابن الـ (Flex)",
    lesson: "الخصائص اللي بتطبق على العناصر الأبناء داخل الـ flex: (flex-grow) كم يكبر، (flex-shrink) كم يصغر، (flex-basis) الحجم الأساسي، (flex) اختصار للثلاثة، (order) لتغيير الترتيب، (align-self) لمحاذاة فردية مختلفة عن بقية الأبناء.",
    code: `div { display: flex; }
.child {
  flex: 1;
  order: 2;
  align-self: flex-end;
}`
  },

  // ---------- قيم justify-content و align-items ----------
  {
    head: "قيم (justify-content) و(align-items)",
    lesson: "قيم محاذاة الـ flex: (flex-start) من البداية، (flex-end) من النهاية، (center) بالمنتصف، (space-between) مسافات بين العناصر، (space-around) مسافات محيطة، (space-evenly) مسافات متساوية. الـ (align-items) نفس القيم بالإضافة لـ (stretch) و(baseline).",
    code: `div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`
  },

  // ---------- الـ Grid ----------
  {
    head: "الـ (Grid)",
    lesson: "نظام الشبكة ثنائي الأبعاد. بيُفعَّل بـ (display: grid). الخصائص: (grid-template-columns) لتحديد الأعمدة، (grid-template-rows) للصفوف، (grid-template-areas) لتسمية المناطق، (column-gap) و(row-gap) للمسافات، (justify-items) و(align-items) للمحاذاة، (justify-content) و(align-content) لمحاذاة الشبكة كلها، (auto-fill) و(auto-fit) للأعمدة التلقائية.",
    code: `div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
}`
  },

  // ---------- خصائص ابن الـ Grid ----------
  {
    head: "خصائص ابن الـ (Grid)",
    lesson: "العناصر داخل الـ grid بتتحكم بموقعها بـ: (grid-column) و(grid-row) بتحدد مكان العنصر باستخدام أرقام الخطوط أو (span) لتمديد على أكثر من خلية. الـ (grid-area) بتعطيه اسم للاستخدام مع (grid-template-areas). الـ (shorthand): grid-column/row-start: grid-column-start.",
    code: `div { display: grid; grid-template-columns: repeat(3, 1fr); }
.item {
  grid-column: 1 / 3;
  grid-row: span 2;
}`
  },

  // ---------- الـ repeat و fr ----------
  {
    head: "الـ (repeat) والـ (fr)",
    lesson: "الـ (repeat(n, size)) بختصر تكرار الأعمدة. الـ (fr) وحدة نسبية بالـ grid تقسّم المساحة المتاحة. الـ (repeat(auto-fill, minmax())) بتخلي الأعمدة تتكيف تلقائياً مع حجم الشاشة.",
    code: `div {
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}`
  },

  // ---------- الـ Transitions ----------
  {
    head: "الـ (Transitions)",
    lesson: "بتضيف انتقال سلس لتغيير خاصية CSS. الصيغة: (property duration timing-function delay). الـ (timing-function) قيمه: ease، linear، ease-in، ease-out، ease-in-out. الـ (transition-property) بتحدد الخاصية اللي رح تتأثر، (all) لكل الخصائص.",
    code: `div {
  transition: background-color 0.3s ease;
  transition: all 0.5s ease-in-out 0.1s;
}`
  },

  // ---------- الـ Animations ----------
  {
    head: "الـ (Animations)",
    lesson: "الـ (animation) بتحدد: (name) اسم الحركة، (duration) المدة، (timing-function) نوع التوقيت، (delay) التأخير، (iteration-count) عدد المرات أو (infinite)، (direction) الاتجاه: normal/reverse/alternate/alternate-reverse، (fill-mode): forwards/backwards/both، (play-state): running/paused. والـ (@keyframes) بيعرف مراحل الحركة.",
    code: `div {
  animation: slide 1s ease-in-out infinite alternate;
}
@keyframes slide {
  from { transform: translateX(0); }
  to   { transform: translateX(100px); }
}`
  },

  // ---------- الـ Transform 2D ----------
  {
    head: "الـ (Transform) ثنائي الأبعاد (2D)",
    lesson: "الـ (transform) بطبق تحولات هندسية: (translate(x,y)) للتحريك، (scale(x,y)) للتكبير والتصغير، (rotate(deg)) للدوران، (skew(x,y)) للإمالة. وفي نسخ منفردة مثل scaleX، translateY.",
    code: `div {
  transform: translate(50px, 20px);
  transform: scale(1.5);
  transform: rotate(45deg);
  transform: skew(10deg, 5deg);
}`
  },

  // ---------- الـ Transform 3D ----------
  {
    head: "الـ (Transform) ثلاثي الأبعاد (3D)",
    lesson: "الـ (transform) الثلاثي: (rotateX)، (rotateY)، (rotateZ)، (rotate3d)، (scale3d)، (translate3d)، (matrix(6values)) للتحكم الكامل. (perspective) بتحدد عمق الزاوية، (transform-origin) لتغيير نقطة التحول.",
    code: `div {
  transform: rotateY(45deg);
  transform: translate3d(10px, 20px, 30px);
  perspective: 500px;
  transform-origin: top left;
}`
  },

  // ---------- الـ shorthand للـ transform ----------
  {
    head: "الـ (shorthand) للـ transform",
    lesson: "بعد / قبل طريقة التحول بأثر على النتيجة. الـ (transform-style: preserve-3d) بيخلي الأبناء يتأثروا بالـ 3D. الـ (backface-visibility) بتتحكم بظهور الوجه الخلفي.",
    code: `div {
  transform: translateX(100px) rotate(45deg) scale(1.2);
  transform-style: preserve-3d;
  backface-visibility: hidden;
}`
  },

  // ---------- CSS Sheet 2 — الـ Layout ----------
  {
    head: "الـ (Layout) وقيم الـ display",
    lesson: "قيم الـ (display) الكاملة: (block)، (inline)، (inline-block)، (none)، (flex)، (inline-flex)، (grid)، (inline-grid).",
    code: `div { display: flex; }
span { display: inline-flex; }
section { display: grid; }`
  },

];


//  J L E S S O N  —  JS Sheet 1
let Jlesson = [
  // ---------- التعليقات والمعاملات ----------
  {
    head: "التعليقات والمعاملات",
    lesson: "في JS التعليق بسطر بـ // والتعليق بأكثر من سطر بـ /* */. المعاملات الحسابية: ++ و-- و+= و-= وباقيها. مقارنات: == للمساواة بالقيمة بس، === للمساواة بالقيمة والنوع، != و!==. قيم خاصة: NaN يساوي False، null و\"\" و0 وundefined كلهم بيتحولوا لـ false.",
    code: `// تعليق سطر واحد
/* تعليق
   متعدد */

let x = 5;
x++;
console.log(x === 5);
console.log(null == undefined);`
  },

  // ---------- الـ Variables و Scope ----------
  {
    head: "الـ (Variables) والـ (Scope)",
    lesson: "في JS ثلاثة أنواع للـ Scope: (1) الـ (global scope) متغيرات متاحة بكل مكان، (2) الـ (function scope) متغيرات متاحة داخل الدالة فقط، (3) الـ (block scope) متاحة داخل {} فقط بـ let وlet. (4) الـ (module scope) لما تستخدم import/export بيصير كل ملف scope خاص فيه. True في JS: الأرقام، string، []، {}. False: null، undefined، 0، \"\"، NaN.",
    code: `var x = "global";

function test() {
  let y = "function scope";
  if (true) {
    let z = "block scope";
  }
}`
  },

  // ---------- الـ Type Conversion ----------
  {
    head: "الـ (Type Conversion) والـ (Coercion)",
    lesson: "تحويل الأنواع: String() لتحويل لنص، Number() وBoolean() لتحويل للأرقام والمنطق، parseInt() لتحويل نص لعدد صحيح مع إمكانية تحديد الأساس (5 → 5، '5.5' → 5).",
    code: `String(123);
Number("42");
Boolean(0);
parseInt("10px");
parseInt("FF", 16);`
  },

  // ---------- الـ Template Literals ----------
  {
    head: "الـ (Template Literals)",
    lesson: "بديل عن الـ string العادي، بيستخدم backtick بدل الأقواس المفردة والمزدوجة. بتقدر تحط متغيرات مباشرة بـ ${}، وبتدعم الأسطر المتعددة مباشرة بدون \\n. مختلف عن الـ string العادي بالـ concatenation بـ +.",
    code: `let name = "هادي";
let msg = \`مرحبا \${name}!\`;
let multiLine = \`سطر 1
سطر 2\`;`
  },

  // ---------- الـ Conditions ----------
  {
    head: "الشروط (Conditions)",
    lesson: "if وelse if وelse لتحديد مسارات التنفيذ. Switch لاختبار قيمة واحدة مقابل حالات متعددة، كل حالة بتنتهي بـ break ما عدا default.",
    code: `if (x > 5) {
  console.log("كبير");
} else if (x === 5) {
  console.log("مساوي");
} else {
  console.log("صغير");
}

switch(x) {
  case 1: break;
  case 2: break;
  default: break;
}`
  },

  // ---------- الـ Loops ----------
  {
    head: "الحلقات (Loops)",
    lesson: "for للتكرار عدد محدد من المرات. while يتكرر طالما الشرط صحيح. do...while بيتنفذ مرة على الأقل قبل فحص الشرط. continue بتتخطى التكرار الحالي. break بتوقف الحلقة.",
    code: `for (let i = 0; i < 5; i++) { }

while (x > 0) {
  if (x === 3) continue;
  if (x === 1) break;
  x--;
}

do {
  x++;
} while (x < 5);`
  },

  // ---------- الـ for...of ----------
  {
    head: "الـ (for...of)",
    lesson: "الـ (for...of) بتمشي على القيم مباشرة من أي قائمة أو iterable. الـ (for...in) بتمشي على الـ keys. الـ (forEach) دالة متاحة على الـ Array. الشرط اللي بيستخدمهم: not، !، of، ||، &&، |، and، if.",
    code: `for (let item of [1, 2, 3]) { }

for (let key in obj) { }

[1, 2, 3].forEach(item => { });`
  },

  // ---------- الـ Ternary Operator ----------
  {
    head: "الـ (Ternary Operator)",
    lesson: "اختصار لـ if/else بسطر واحد. الصيغة: (الشرط ? القيمة إذا صح : القيمة إذا غلط). الـ (??) الـ (Nullish Coalescing) بيرجع القيمة اليمنى لو اليسرى null أو undefined.",
    code: `let x = age > 18 ? "كبير" : "صغير";
console.log(name ?? "hadi");
console.log(x || "hadi");`
  },

  // ---------- الـ Logical في JS ----------
  {
    head: "الـ (Logical) في JS",
    lesson: "الـ (let x = true) ثم (x && console.log(' ')) بشتغل بس إذا x كانت true. الـ || بشغل إذا كانت القيمة اليسرى false أو فارغة. شرط من سطر واحد ممكن يستخدم &&. كي لا يُطبع أنها null يمكن استخدام ??.",
    code: `let x = true;
x && console.log("صح");
console.log(x || "hadi");
console.log(null ?? "default");`
  },

  // ---------- الـ Function ----------
  {
    head: "الـ (Function)",
    lesson: "الدالة بتعرف بـ function وبتأخذ (parameters)، وعندها return لإرجاع قيمة. الـ return بتوقف تنفيذ الكود اللي بعدها. في JS الدالة بتقدر ترجع دالة ثانية. الـ (Hoisting) بيخلي الدالة المعرفة بـ function تُستدعى قبل تعريفها. الدالة ممكن تستلم قائمة كـ (filter, map) وترجع أي قيمة.",
    code: `function hadi(name, age) {
  return name;
}

let result = hadi("هادي", 21);`
  },

  // ---------- الـ Anonymous و Arrow Function ----------
  {
    head: "الـ (Anonymous) والـ (Arrow Function)",
    lesson: "الـ (Anonymous function) دالة بدون اسم بتتعين لمتغير. الـ (Arrow function) اختصار لها بـ =>. لو في سطر واحد ما محتاج أقواس {}، ولو parameter واحد ما محتاج أقواس ().",
    code: `let greet = function() { return "مرحبا"; };
let greet2 = () => "مرحبا";
let add = (a, b) => a + b;
let double = n => n * 2;`
  },

  // ---------- الـ IIFE ----------
  {
    head: "الـ (IIFE)",
    lesson: "الـ (IIFE) دالة بتتنفذ فور ما تتعرف، بدون الحاجة لاستدعائها. بتستخدم للعزل وحماية الـ scope.",
    code: `(function() {
  console.log("تنفذت فوراً");
})();

(() => {
  console.log("arrow IIFE");
})();`
  },

  // ---------- الـ Closure ----------
  {
    head: "الـ (Closure)",
    lesson: "الـ (Closure) دالة داخل دالة، الداخلية بتقدر توصل لمتغيرات الخارجية حتى بعد انتهائها. بتستخدم لحفظ حالة (state) خاصة. الـ (Higher Order Function) هي دالة بتستلم دالة أخرى كـ argument أو بترجع دالة.",
    code: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
let add = outer();
add();`
  },

  // ---------- الـ this ----------
  // ---------- الـ Spread Operator ----------
  {
    head: "الـ (Spread Operator)",
    lesson: "الـ (...) بتفرد القائمة أو الـ object عناصراً منفصلة. إذا كانت list بتعطيك كل العناصر، وإذا كانت object بتعطيك كل الـ keys. بتستخدمها لدمج قوائم أو نسخ objects.",
    code: `let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5];

let obj1 = { a: 1 };
let obj2 = { ...obj1, b: 2 };

function sum(...args) { return args; }`
  },

  // ---------- الـ In JS (بيانات) ----------
  {
    head: "بحالة وجود دالة في JS",
    lesson: "الدالة بتاخذ parameter واحد وتحتاج {} تحتاج return وتحتاج 8 arguments. وحالة سطر كود واحد ما تحتاج {} ولا return. بحالة arrow function تاخذ 4 كـ arguments.",
    code: `let fn = (x) => x * 2;
let fn2 = (x) => { return x * 2; };`
  },

  // ============================================================
  //  JS Sheet 2 — Objects, Arrays, Map, Set
  // ============================================================

  // ---------- الـ (Object) — تعريف وأساسيات ----------
  {
    head: "الـ (Object) — تعريف وأساسيات",
    lesson: "طريقة تعريف Object: إما بالطريقة الحرفية {} أو بالـ letructor بـ new Object(). كل عنصر عبارة عن (key: value). بنوصل للقيم بالنقطة A.Name أو بالأقواس المربعة A[\"Name\"]. لو استخدمنا متغير كـ key نحطه بين أقواس مربعة A[x].",
    code: `let A = { Name: "hadi", age: 21 };

console.log(A.Name);
console.log(A["Name"]);

let x = "Name";
console.log(A[x]);`
  },

  // ---------- تعديل وحذف خصائص الـ (Object) ----------
  {
    head: "تعديل وحذف خصائص الـ (Object)",
    lesson: "بنقدر نغير قيمة أي key مباشرة بالنقطة أو الأقواس، وبنحذف أي خاصية بكلمة delete. أي key غير موجود بيرجع undefined.",
    code: `A.Name = "NewName";
A["age"] = 25;
delete A.age;
console.log(A.x);`
  },

  // ---------- دوال داخل الـ (Object) وعلاقتها بـ (this) ----------
  {
    head: "دوال داخل الـ (Object) وعلاقتها بـ (this)",
    lesson: "بنقدر نحط دالة داخل الـ Object وهيك بتصير method. داخلها بنستخدم this للوصول لخصائص نفس الـ Object. الـ Operator بشتغل مع الـ Object.",
    code: `let A = {
  Name: "hadi",
  Tabe: function() {
    return this.Name;
  }
};
A.Tabe();`
  },

  // ---------- دوال الـ (Object) — keys وvalues وentries ----------
  {
    head: "دوال الـ (Object) — keys وvalues وentries",
    lesson: "ثلاث دوال جاهزة لاستخراج بيانات من Object: Object.keys() بترجع قائمة بالـ keys، Object.values() بترجع قائمة بالقيم، Object.entries() بترجع قائمة من أزواج [key, value].",
    code: `let H = { name: "hadi", age: 21 };
Object.keys(H);
Object.values(H);
Object.entries(H);`
  },

  // ---------- الـ (Spread Syntax) مع الـ Object ----------
  {
    head: "الـ (Spread Syntax) مع الـ Object",
    lesson: "بنستخدم ... لدمج أو نسخ الـ objects. في حالة تكرار الـ key بيفوز الأخير (overwriting).",
    code: `let A = { name: "hadi" };
let B = { age: 21 };
let C = { ...A, ...B };
let D = { ...A, name: "override" };`
  },

  // ---------- الـ (Destructuring) للـ Object ----------
  {
    head: "الـ (Destructuring) للـ Object",
    lesson: "بتسمح لك تسحب قيم من Object مباشرة لمتغيرات. بنستخدم {} ونحط أسماء الـ keys. ممكن تعطي قيمة افتراضية وممكن تغير اسم المتغير.",
    code: `let A = { Name: "hadi", age: 21 };
let { Name, age } = A;

let { Name: myName, age: myAge = 0 } = A;`
  },

  // ---------- الـ (Arrays) — تعريف وأساسيات ----------
  {
    head: "الـ (Arrays) — تعريف وأساسيات",
    lesson: "قائمة لتخزين بيانات متعددة. بنعرفها إما بالطريقة الحرفية [] أو بالـ letructor بـ new Array(). بنوصل للعناصر بالـ index يبدأ من 0. الـ Dynamic: بنقدر نضيف وبنعدل وبنحذف.",
    code: `let fruits = ["Apple", "Banana"];
let fruits2 = new Array("Apple", "Banana");

console.log(fruits[0]);
fruits[1] = "Tomato";`
  },

  // ---------- دوال الـ (Array) — إضافة وحذف ----------
  {
    head: "دوال الـ (Array) — إضافة وحذف",
    lesson: "دوال للتعديل على القائمة: push() لإضافة للنهاية، pop() لحذف من النهاية، unshift() لإضافة للبداية، shift() لحذف من البداية، splice(index, count) لحذف من مكان محدد أو إضافة، length لمعرفة الطول.",
    code: `fruits.push("Mango");
fruits.pop();
fruits.unshift("Cherry");
fruits.shift();
fruits.splice(1, 1);
console.log(fruits.length);`
  },

  // ---------- دوال الـ (Array) — بحث ----------
  {
    head: "دوال الـ (Array) — بحث",
    lesson: "دوال للبحث في القائمة: indexOf(item) بيرجع رقم موقعه أو -1، find() بيرجع أول عنصر يحقق الشرط، findIndex() بيرجع موقعه، includes(item) بيرجع true أو false، slice(start, end) بيرجع نسخة جزئية بدون تعديل الأصل، reverse() لعكس الترتيب، sort() لترتيب.",
    code: `fruits.indexOf("Apple");
fruits.find(f => f === "Apple");
fruits.findIndex(f => f === "Apple");
fruits.includes("Apple");
fruits.slice(0, 2);
fruits.reverse();
fruits.sort();`
  },

  // ---------- الـ (Destructuring) للـ Array ----------
  {
    head: "الـ (Destructuring) للـ Array",
    lesson: "بتسمح لك تسحب قيم من القائمة مباشرة لمتغيرات بنفس الترتيب. ممكن تتخطى عنصر بفاصلة فارغة. Swap للتبادل بين متغيرين.",
    code: `let [a, b] = [1, 2];
let [first, , third] = [1, 2, 3];

let x = 1, y = 2;
[x, y] = [y, x];`
  },

  // ---------- الـ (Spread) للـ Arrays ----------
  {
    head: "الـ (Spread) للـ Arrays",
    lesson: "بنستخدم ... لدمج قوائم أو نسخها أو تمريرها كـ arguments. الـ flat() لتسوية القوائم المتداخلة، flatMap(n) لتسوية بعمق محدد.",
    code: `let arr = [...fruits, "Vegetable"];
let merged = [...fruits, ...arr];
[[1, 2], [3, 4]].flat();`
  },

  // ---------- الـ (Arrays) مع الشروط ----------
  {
    head: "الـ (Arrays) مع الشروط",
    lesson: "دوال تعمل على كل عنصر وتحقق شروط: filter() بترجع قائمة بالعناصر اللي تحقق الشرط، some() بترجع true لو عنصر واحد على الأقل حقق الشرط، every() بترجع true لو كل العناصر حققت الشرط.",
    code: `let nums = [1, 2, 3, 4, 5];
nums.filter(n => n > 50);
nums.some(n => n > 3);
nums.every(n => n > 0);`
  },

  // ---------- الـ (Map) على القوائم ----------
  {
    head: "الـ (Map) على القوائم",
    lesson: "الـ map() بترجع قائمة جديدة بنفس الطول بعد تطبيق دالة على كل عنصر. الـ reduce() بتجمع كل العناصر لقيمة واحدة، متقدمة.",
    code: `[1, 2, 3].map(n => n * 2);
[1, 2, 3].reduce((acc, n) => acc + n, 0);`
  },

  // ---------- الـ (Arrays and Objects Nesting) ----------
  {
    head: "الـ (Arrays and Objects Nesting)",
    lesson: "بنقدر نحط objects داخل arrays والعكس. للوصول: بالـ index للقائمة ثم بالنقطة أو الأقواس للـ object. الـ key[?] بترجع undefined لو ما وُجد.",
    code: `let data = [{ key: [1, 2] }, { key: [3, 4] }];
console.log(data[0].key[1]);`
  },

  // ---------- الـ (Map) كبنية بيانات ----------
  {
    head: "الـ (Map) كبنية بيانات",
    lesson: "الـ Map بنية بيانات زي الـ Object بس الـ key يكون أي نوع. دوالها: set(key, value) لإضافة، get(key) للقراءة، has(key) للتحقق، delete(key) للحذف، clear() لمسح الكل، size للحجم. للمرور عليها بنستخدم for...of مع [key, value] أو forEach. Object.fromEntries() لتحويل Map لـ Object، والعكس بـ new Map(Object.entries(obj)).",
    code: `let hello = new Map();
hello.set("name", "hadi");
hello.get("name");
hello.has("name");
hello.delete("name");
console.log(hello.size);

for (let [key, value] of hello) { }
hello.forEach((value, key) => { });`
  },

  // ---------- الـ (Set) كبنية بيانات ----------
  {
    head: "الـ (Set) كبنية بيانات",
    lesson: "الـ Set قائمة بدون تكرار. بنشيلها بـ new Set(). دوالها: add() لإضافة، delete() لحذف، has() للتحقق، clear() للمسح، size للحجم. لتحويلها لـ array بنستخدم [...set] أو Array.from(). لتحويل array لـ Set وإزالة التكرار: new Set(array.values()).",
    code: `let x = new Set([1, 2, 3]);
x.add(4);
x.delete(1);
x.has(2);
let arr = [...x];`
  },

  // ---------- الـ (RegEx) ----------
  {
    head: "الـ (RegEx)",
    lesson: "الـ (Regular Expression) للبحث في النصوص بأنماط. الـ .test() بترجع true أو false. الـ .match() بيجلب التطابقات. الـ x بيرمز للنمط في الأمثلة.",
    code: `let x = /hello/;
x.test("say hello");
"say hello".match(/hello/);`
  },

  // ---------- الـ (String Methods) ----------
  {
    head: "الـ (String Methods)",
    lesson: "دوال النصوص: length للطول، split(',') لتقسيم النص لـ array، concat() لدمج نصين، replace(old, new) للاستبدال، indexOf() لإيجاد موقع، lastIndexOf() آخر موقع، startsWith() هل يبدأ بـ (بيرجع true)، endsWith() هل ينتهي بـ (بيرجع false). flat() وmap() متاحة على الـ arrays.",
    code: `"hello".length;
"a,b,c".split(",");
"hello".replace("l", "r");
"hello".indexOf("l");
"hello".startsWith("he");
"hello".endsWith("lo");`
  },

  // ============================================================
  //  JS Sheet 3 — Classes
  // ============================================================

  // ---------- الـ (Classes) — تعريف وأساسيات ----------
  {
    head: "الـ (Classes) — تعريف وأساسيات",
    lesson: "الـ class تعريف نموذج للـ objects. فيها (letructor) بيشتغل تلقائياً عند إنشاء كل object جديد ببناء البيانات الأولية. بنستخدم this.property لتعيين الخصائص. الـ methods بنكتبها مباشرة بدون function keyword.",
    code: `class User {
  letructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() { return this.name; }
}
let hadi = new User("hadi", 21);`
  },

  // ---------- الـ (Private Properties) ----------
  {
    head: "الـ (Private Properties)",
    lesson: "الـ Private Properties بنعرفها بـ # قبل الاسم. ما يمكن الوصول إليها من خارج الكلاس. بس من داخل الكلاس. بنوصلها بـ this.#property.",
    code: `class User {
  #name;
  letructor(name) { this.#name = name; }
  getName() { return this.#name; }
}
let u = new User("hadi");
u.getName();`
  },

  // ---------- الـ (Static) variables والـ methods ----------
  {
    head: "الـ (Static) variables والـ methods",
    lesson: "الـ (static) متغير أو method مرتبط بالـ class نفسه مش بالـ object. ما بتقدر توصله بـ this من داخل methods العادية. بنوصله بـ ClassName.property. الـ letructor ما بيقدر يكون static.",
    code: `class User {
  static count = 0;
  static getCount() { return User.count; }
}
User.getCount();`
  },

  // ---------- الـ (Inheritance) — الوراثة ----------
  {
    head: "الـ (Inheritance) — الوراثة",
    lesson: "بنورث من كلاس ثاني بـ extends. الـ letructor بالابن لازم يستدعي super() أولاً لتمرير البيانات للأب. الـ super.method() بتستدعي method الأب من الابن. بنقدر نضيف properties ومethods جديدة بالابن. وبنقدر نكتب overwrite لـ property أو method موجودة بالأب.",
    code: `class Animal {
  letructor(name) { this.name = name; }
  speak() { return this.name; }
}
class Dog extends Animal {
  letructor(name, age) {
    super(name);
    this.age = age;
  }
  speak() { return super.speak() + " woof"; }
}`
  },

  // ---------- الـ (Setters and Getters) ----------
  {
    head: "الـ (Setters and Getters)",
    lesson: "الـ get دالة بتشتغل عند قراءة خاصية. الـ set دالة بتشتغل عند تعيين قيمة لخاصية. بيخليك تتحكم بالقراءة والكتابة وتضيف validations.",
    code: `class User {
  #name;
  get name() { return this.#name; }
  set name(value) {
    if (value) this.#name = value;
  }
}
let u = new User();
u.name = "hadi";`
  },

  // ---------- الـ (Prototypal Inheritance) في JS ----------
  {
    head: "الـ (Prototypal Inheritance) في JS",
    lesson: "كل object بـ JS عنده prototype. الـ extends وsuper بيعتمدوا عليه داخلياً. الترتيب: 1 class / 2 obj / 3 class بتستخدمها مع 3 وبنبلش الـ object.Prototype. 4 هي كيف نصل لـ methods الـ object الرئيسي. بنستخدم Object.create() لإنشاء object بـ prototype محدد: let/let obj-name = Object.create(). الـ Object.create(null) بيعطيك object بدون أي prototype.",
    code: `let proto = { greet() { return "مرحبا"; } };
let obj = Object.create(proto);
obj.greet();
console.log(Object.getPrototypeOf(obj));`
  },

  // ---------- الـ (this) ----------
  {
    head: "الـ (this)",
    lesson: "الـ (this) بيشير لمصدر استدعاء الدالة: (1) داخل (method) في كلاس بيشير للـ object، (2) داخل دالة عادية بيشير للـ window أو (undefined) في strict mode، (3) في (Node) بيشير للـ global، (4) داخل (Arrow Functions) ما بيكون عندها this خاص بها بل بيورث من الـ scope اللي فوقها. الـ (event handler) بيكون this هو العنصر اللي استقبل الـ event. بالـ React بتستخدم .bind() أو arrow function لتثبيت this.",
    code: `let obj = {
  name: "هادي",
  greet() { return this.name; }
};

function show() { console.log(this); }
let arrow = () => console.log(this);

class Counter {
  count = 0;
  increment() { this.count++; }
  arrowInc = () => { this.count++; }
}`
  },

  // ============================================================
  //  JS Sheet 4 — Asynchronous, Promises, Async/Await
  // ============================================================

  // ---------- الـ (Synchronous) مقابل الـ (Asynchronous) ----------
  {
    head: "الـ (Synchronous) مقابل الـ (Asynchronous)",
    lesson: "الـ (Synchronous) عمليات بتنفذ بالترتيب، كل سطر ينتظر اللي قبله. الـ (Asynchronous) بتشتغل بالخلفية ومش لازم تنتظر النتيجة. JS أحادية الـ thread لكن عندها أدوات للتعامل مع العمليات الغير متزامنة.",
    code: `console.log("1");
setTimeout(() => console.log("3"), 1000);
console.log("2");`
  },

  // ---------- الـ (setTimeout) ----------
  {
    head: "الـ (setTimeout)",
    lesson: "بتشغل دالة بعد وقت محدد بالميلي ثانية. بنقدر نحطها بـ arrow function. الوقت الموضوع هو الحد الأدنى مش الضمان الفعلي. التاغ اللي قبله (التاغ اللي يلي مهمته) بيتنفذ بعد أقل ما يصلح.",
    code: `setTimeout(() => {
  console.log("بعد ثانية");
}, 1000);`
  },

  // ---------- الـ (Callback) ----------
  {
    head: "الـ (Callback)",
    lesson: "دالة بتمررها كـ argument لدالة ثانية، الثانية بتستدعيها لما تخلص. بنمرر الـ arguments بالباراميتر، ثم نستعملها داخل الدالة، ثم نستعمل تاغ الابن من جوابات الدالة. هديئاً استعمال callback هيقتنا مساحة صريحة من JS لكتابة الاسم بالبارامترات.",
    code: `function greet(name, callback) {
  callback(name);
}
greet("هادي", (n) => console.log(n));`
  },

  // ---------- الـ (Promises) ----------
  {
    head: "الـ (Promises)",
    lesson: "كائن بيمثل عملية غير متزامنة ممكن تنجح أو تفشل. بنبنيه بـ new Promise(function(resolve, reject)). resolve بنستدعيه لما تنجح العملية، reject لما تفشل. بنتعامل معه بـ .then() لحالة النجاح، .catch() لحالة الفشل، .finally() بيتنفذ دايماً.",
    code: `let p = new Promise((resolve, reject) => {
  if (true) {
    resolve("تمت العملية");
  } else {
    reject("حدث خطأ");
  }
});

p.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => console.log("انتهى"));`
  },

  // ---------- الـ (Async / Await) ----------
  {
    head: "الـ (Async / Await)",
    lesson: "طريقة أنظف للتعامل مع الـ Promises. async قبل الدالة بتخليها ترجع Promise. await بتوقف تنفيذ الدالة حتى تنتهي الـ Promise. لازم تكون داخل async function. بنستخدم try/catch للتعامل مع الأخطاء.",
    code: `async function getData() {
  try {
    let user = await fetchUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}`
  },

  // ---------- الـ (try / catch / finally) ----------
  {
    head: "الـ (try / catch / finally)",
    lesson: "try لكتابة الكود اللي ممكن يطلع خطأ. catch(error) بتمسك الخطأ وبتتحكم فيه. finally بيتنفذ دايماً سواء صار خطأ أو لأ. الـ error.name بيعطيك نوع الخطأ: SyntaxError، ReferenceError، TypeError، RangeError.",
    code: `try {
  let x = undefinedVar;
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("انتهى");
}`
  },

  // ---------- الـ (throw) والـ (Error) المخصص ----------
  {
    head: "الـ (throw) والـ (Error) المخصص",
    lesson: "بنقدر نرمي خطأ خاص بنا بـ throw new Error(\"رسالة\"). بيوقف تنفيذ الكود اللي بعده. الـ e.message هي الرسالة اللي حددناها.",
    code: `function divide(a, b) {
  if (b === 0) throw new Error("قسمة على صفر");
  return a / b;
}
try {
  divide(5, 0);
} catch (e) {
  console.log(e.message);
}`
  },

  // ---------- كيف يشتغل الـ JS تحت الغطاء ----------
  {
    head: "كيف يشتغل الـ JS تحت الغطاء",
    lesson: "الـ JS بتشتغل على مرحلتين: مرحلة التحليل (Source code → Tokens بالـ Tokeniser/Lexer → Parser → AST) ثم مرحلة التنفيذ (Byte code بالـ JS Engine). الـ (global execution context) بيتضمن: مرحلة الـ hoisting أولاً، ثم مرحلة التنفيذ سطر بسطر. الـ (heap) لتخزين الـ objects والـ functions. الـ (call stack) كـ stack يخزن الـ functions. الـ (microtask queue) للـ Promises. الـ (event loop) بيراقب الـ call stack، إذا فرغ بيأخذ من الـ microtask queue أولاً.",
    code: `// كل Promise callback بروح على microtask queue
Promise.resolve().then(() => console.log("micro"));
console.log("sync");
setTimeout(() => console.log("macro"), 0);`
  },

  // ---------- الـ (Web APIs) ----------
  {
    head: "الـ (Web APIs)",
    lesson: "أدوات متاحة في بيئة المتصفح: .then .catch لمعالجة الـ Promises، fetch للطلبات الشبكية، document للتعامل مع الـ DOM، XmlHttpRequest، setTimeout، MotionObserver.",
    code: `fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data));`
  },

  // ============================================================
  //  JS Sheet 5 — DOM
  // ============================================================

  // ---------- الـ (DOM) — أساسيات ----------
  {
    head: "الـ (DOM) — أساسيات",
    lesson: "الـ (DOM) هو تمثيل شجري لصفحة الـ HTML داخل الذاكرة. كل عنصر HTML بيصير Node. أنواع الـ Nodes: element Node، text Node، attribute Node، document Node. الـ DOM بيخليك تقرأ وتعدل الـ HTML بالـ JS. document.title للوصول للعنوان.",
    code: `console.log(document.title);
console.log(document.body);`
  },

  // ---------- الوصول للعناصر — (Selectors) ----------
  {
    head: "الوصول للعناصر — (Selectors)",
    lesson: "طرق الوصول للعناصر: (1) getElementById('') بيرجع عنصر واحد، (2) getElementsByClassName('') بيرجع كل العناصر، (3) getElementsByTagName('') بيرجع كل العناصر. الـ querySelectorAll بيرجع قائمة [NodeList]. Array.from(document.getElementsByClassName('.')) أو querySelectAll لتحويلها لـ Array حقيقي.",
    code: `document.getElementById("myId");
document.getElementsByClassName("myClass");
document.querySelector(".myClass");
document.querySelectorAll("p");`
  },

  // ---------- إنشاء وإضافة العناصر ----------
  {
    head: "إنشاء وإضافة العناصر",
    lesson: "خطوات التعامل بالـ DOM: (1) إنشاء العنصر بـ createElement، (2) تعديله بـ textContent أو innerHTML أو attributes، (3) إضافته للصفحة. الدوال: appendChild() لإضافة كآخر ابن، insertBefore() لإضافة قبل عنصر محدد، append() لإضافة عناصر أو نصوص متعددة.",
    code: `let el = document.createElement("div");
el.textContent = "محتوى";
document.body.appendChild(el);

let parent = document.querySelector(".list");
parent.insertBefore(el, parent.firstChild);`
  },

  // ---------- الإضافة بعد وقبل — (insertAdjacentHTML) ----------
  {
    head: "الإضافة بعد وقبل — (insertAdjacentHTML)",
    lesson: "الـ insertAdjacentHTML لإضافة HTML نصي. مواضع الإضافة: afterbegin (أول ابن)، beforeend (آخر ابن)، beforebegin (قبل العنصر نفسه)، afterend (بعده). بيخليك تكتب تاغ بـ <p> مباشرة.",
    code: `el.insertAdjacentHTML("afterbegin", "<p>أول</p>");
el.insertAdjacentHTML("beforeend", "<p>آخر</p>");`
  },

  // ---------- استبدال وحذف العناصر ----------
  {
    head: "استبدال وحذف العناصر",
    lesson: "الـ replaceChild(new, old) لاستبدال ابن بآخر، الـ replaceWith() لاستبدال العنصر نفسه. الـ remove() لحذف العنصر، الـ removeChild() لحذف ابن محدد بـ el.parentNode.removeChild(el).",
    code: `parent.replaceChild(newEl, oldEl);
el.replaceWith(newEl);
el.remove();
el.parentNode.removeChild(el);`
  },

  // ---------- الـ (innerHTML) والـ (textContent) والـ (outerHTML) ----------
  {
    head: "الـ (innerHTML) والـ (textContent) والـ (outerHTML)",
    lesson: "innerText بيقرأ ويكتب النص المرئي فقط. textContent بيقرأ ويكتب كل النص بما فيه المخفي. innerHTML بيقرأ ويكتب الـ HTML الداخلي بما فيه التاغات. outerHTML بيرجع الـ HTML الكامل للعنصر نفسه بما فيه تاغه.",
    code: `el.textContent = "نص";
el.innerHTML = "<b>نص غامق</b>";
console.log(el.outerHTML);`
  },

  // ---------- استنساخ العناصر — (cloneNode) ----------
  {
    head: "استنساخ العناصر — (cloneNode)",
    lesson: "الـ cloneNode() لاستنساخ عنصر. القيمة true لاستنساخ العنصر مع أبنائه، false لاستنساخ العنصر وحده بدون أبناء. document.importNode() لاستيراد عنصر من document آخر مع تحديد true/false.",
    code: `let clone = el.cloneNode(true);
document.body.appendChild(clone);`
  },

  // ---------- التنقل بين العناصر — (Traversal) ----------
  {
    head: "التنقل بين العناصر — (Traversal)",
    lesson: "التنقل عبر شجرة الـ DOM: nextElementSibling للأخ التالي، previousElementSibling للأخ السابق، children لكل الأبناء، parentNode للأب، isEqualNode() لمقارنة عنصرين.",
    code: `el.nextElementSibling;
el.previousElementSibling;
el.children;
el.parentNode;
el.isEqualNode(otherEl);`
  },

  // ---------- الـ (classList) ----------
  {
    head: "الـ (classList)",
    lesson: "للتعامل مع كلاسات العنصر: toggle('') لإضافة أو إزالة، remove('') للإزالة، add('') للإضافة.",
    code: `el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");`
  },

  // ---------- الـ (style) والـ CSS عبر JS ----------
  {
    head: "الـ (style) والـ CSS عبر JS",
    lesson: "بنوصل لـ CSS العنصر مباشرة. الـ style.property لتعيين style مباشر. الـ matches('.class') بتتحقق لو العنصر ينطبق عليه selector معين. el.style = متغير CSS.",
    code: `el.style.color = "red";
el.style.backgroundColor = "blue";
el.matches(".active");`
  },

  // ---------- الـ (Attributes) ----------
  {
    head: "الـ (Attributes)",
    lesson: "للتعامل مع صفات العنصر: getAttribute('src') لقراءة صفة، setAttribute() لتعيين صفة، removeAttribute() لحذف صفة. img.src مباشرة بيعطيك القيمة. الـ data-name بنوصلها كـ dataset.name.",
    code: `img.getAttribute("src");
el.setAttribute("data-name", "value");
el.removeAttribute("href");
img.src = "photo.jpg";`
  },

  // ---------- الـ (addEventListener) ----------
  {
    head: "الـ (addEventListener)",
    lesson: "بنضيف event listener لعنصر. الـ e هو الـ event object. الأوبشنز: capture بيغير اتجاه الـ event من الابن للأب، once: true بيشيل الـ listener بعد أول مرة، passive لمنع preventDefault على الـ scroll، signal لربطه بـ AbortController للإلغاء.",
    code: `el.addEventListener("click", (e) => {
  console.log(e.target);
}, { once: true, capture: false, passive: true });`
  },

  // ---------- الـ (AbortController) ----------
  {
    head: "الـ (AbortController)",
    lesson: "بيخليك تلغي الـ event listener من بره. بنبني controller = new AbortController()، ونمرر signal: controller.signal بالـ options. بنستدعي controller.abort() لإلغاء كل الـ listeners المرتبطة فيه. بيطبق على الأبناء وليس الآباء عند الـ bubble.",
    code: `let controller = new AbortController();
el.addEventListener("click", handler, { signal: controller.signal });
controller.abort();`
  },

  // ---------- الـ (e.target) والـ (Event Delegation) ----------
  {
    head: "الـ (e.target) والـ (Event Delegation)",
    lesson: "الـ e.target هو العنصر اللي ضغط عليه المستخدم فعلاً. الـ e.currentTarget هو العنصر اللي عليه الـ listener. الـ Event Delegation: بدل ما نضيف listener لكل ابن نضيفه على الأب ونتحقق من e.target. الـ bubble بيصعد من الابن للأب. ui.add للإضافة.",
    code: `ul.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    console.log(e.target.textContent);
  }
});`
  },

  // ---------- الـ (capture) والـ (Prevent Default) ----------
  {
    head: "الـ (capture) والـ (Prevent Default)",
    lesson: "الـ capture: false (الافتراضي) الـ event بيمشي من الابن للأب (bubbling). capture: true بيمشي من الأب للابن. الـ preventDefault() بيمنع السلوك الافتراضي للمتصفح. True/False للـ bubble.",
    code: `document.addEventListener("click", handler, { capture: true });

el.addEventListener("submit", (e) => {
  e.preventDefault();
});`
  },

];
let starlist = [
];

export {Hlesson,Clesson,Jlesson,starlist};